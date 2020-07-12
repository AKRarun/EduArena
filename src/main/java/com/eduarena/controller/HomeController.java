package com.eduarena.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Hackathon 2020
 * @Team 9th Sense
 */

@Controller
public class HomeController {

	@RequestMapping("/")
	public String viewLogin() {
		return "index";
	}
	
}
