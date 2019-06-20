package com.example.demo.model;

public class Student {
	
	private String name;
	private String login;
	private String age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", login=" + login + ", age=" + age + "]";
	}
	
	

}
