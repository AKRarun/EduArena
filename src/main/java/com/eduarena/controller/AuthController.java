package com.eduarena.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

/**
 * Hackathon 2020
 * 
 * @Team 9th Sense
 */

@RestController
public class AuthController {

	@RequestMapping(method = RequestMethod.GET, value = "/check", produces = { "application/json" })
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
