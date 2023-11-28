package com.example.mode.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.mode.dao.UserDao;
import com.example.mode.models.User;
import com.example.mode.utils.JWTUtil;


@RestController
public class AuthControllers {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private JWTUtil jwtUtil;

	@RequestMapping(value = "api/login", method = RequestMethod.POST)
	public String login(@RequestBody User user) {
		
		User userLog = userDao.verification(user);
		if (userLog != null) {
			
			String tokenJwt = jwtUtil.create(String.valueOf(userLog.getId()), userLog.getMail());
			
			return tokenJwt;
		}
		return "Fail";
	}
	
}
