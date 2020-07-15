package com.eduarena.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;
import com.cloudant.client.api.query.QueryBuilder;
import com.cloudant.client.api.query.QueryResult;
import com.eduarena.model.UserModel;

import static com.cloudant.client.api.query.Expression.eq;
import com.google.gson.Gson;

/**
 * Hackathon 2020
 * 
 * @Team 9th Sense
 */

@RestController
public class CloudantController {
	
	@Autowired
	private CloudantClient client;
	
	@RequestMapping(method = RequestMethod.GET, value = "/users", produces = { "application/json" })
	public String getUserList() {
		
		QueryResult<UserModel> userList = null;
		Gson userGson = new Gson();
		String userResult = null;
		
		// Get a Database instance to interact with, but don't create it if it doesn't already exist
		Database db = client.database("arena", false);

		QueryBuilder queryBuilder = new QueryBuilder(eq("status", "Active")).
                fields("appno",
              	      "userid",
              	      "shortname",
              	      "firstname",
              	      "lastname",
              	      "age",
              	      "location",
              	      "category",
              	      "department",
              	      "role",
              	      "email",
              	      "mobile",
              	      "gender",
              	      "dob",
              	      "status",
              	      "password");
		
		try {
			userList = db.query(queryBuilder.build(),UserModel.class);
			userResult = userGson.toJson(userList.getDocs());
		} catch (Exception e) {
			System.out.println("dbList Exception:"+e);
		}
		return userResult;
	}
	
	
	@RequestMapping(method = RequestMethod.GET, value = "/database", produces = { "application/json" })
	public String getDatabases() {
		
		List<String> dbList = new ArrayList<String>();  
		
		try {
			dbList = client.getAllDbs();
		} catch (Exception e) {
			System.out.println("dbList Exception:"+e);
		}
		return dbList.toString();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/login", produces = { "application/json" })
	public String validateUser(@RequestParam("username") String username, @RequestParam("password") String password) {

		Gson userGson = new Gson();
		Map<String, String> userStatus = new HashMap<String, String>();

		String userAccess = (checkAccess(username, password) ? "valid" : "invalid");
		String userMsg = (userAccess.equals("valid") ? "Valid User!" : "Invalid User! Please Check Username/Password!");
		String userType = (userAccess.equals("valid") ? getUserRole(username) : "Public");

		userStatus.put("access", userAccess);
		userStatus.put("msg", userMsg);
		userStatus.put("type", userType);

		String userData = userGson.toJson(userStatus);
		System.out.println(userData);

		return userData;
	}

	private boolean checkAccess(String username, String password) {
		return ((username.equals("edu") && password.equals("edu"))
				|| (username.equals("student") && password.equals("student"))
				|| (username.equals("staff") && password.equals("staff")));
	}

	private String getUserRole(String username) {
		return ((username.equals("edu") ? "Admin"
				: (username.equals("staff") ? "Teacher" : (username.equals("student") ? "Student" : "Guest"))));
	}
}
