package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

	@RequestMapping(value = "/entry", method = RequestMethod.GET)
	public String entry() {

		System.out.println("entry for my app..........");
		return "Success";
	}
	
	@RequestMapping(value = "/users/register", method = RequestMethod.POST)
	public User register(@RequestBody User user) {

		System.out.println("entry in register method........."+user);
		return user;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public User login(@RequestBody Login login) {
		
		System.out.println("in login method of the server...."+login.getUsername()+"  password:"+login.getPassword());
		User user=new User();
		user.setFirstname("manas");
		user.setId(1);
		user.setUsername(login.getUsername());
		user.setLastname("Das");
		user.setToken("test-tocken");
		
		return user;
		
	}
}
