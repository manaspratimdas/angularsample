package com.example.demo.model;

public class Teacher {
	
	private long id;
	private String FirstName;
	private String LastName;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	@Override
	public String toString() {
		return "Teacher [id=" + id + ", FirstName=" + FirstName + ", LastName=" + LastName + "]";
	}
	
	
	

}
