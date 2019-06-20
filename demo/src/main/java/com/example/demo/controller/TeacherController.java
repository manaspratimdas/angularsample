package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Teacher;
import com.example.demo.services.TeacherServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TeacherController {
	
	@Autowired
	TeacherServices teacherServices;
	
	@RequestMapping(value="/test" , method=RequestMethod.GET)
	public String test() {
		return "testing TeacherController";
	}
	
	@RequestMapping(value="/list/teachers", method=RequestMethod.GET)
	public List<Teacher> getTeachers() {
		
		System.out.println(teacherServices.listAllTeachers());
		return teacherServices.listAllTeachers();
	}
	
	
	@RequestMapping(value="/teacher/{fname}", method=RequestMethod.GET)
	public List<Teacher> getTeacherByName(@PathVariable("fname") String fname) {
		
		List<Teacher> teachers=teacherServices.listAllTeachers();
		List<Teacher> teacherByName=new ArrayList<>();
		for(int i=0;i<teachers.size();i++) {
			if(teachers.get(i).getFirstName().equalsIgnoreCase(fname)) {
				teacherByName.add(teachers.get(i));
			}
		}
		
		return teacherByName;
		
	}
	
	@RequestMapping(value="/teacher/add", method=RequestMethod.POST)
	public List<Teacher> addTeacher(@RequestBody Teacher teacher) {
		System.out.println("in server controller ");
		return teacherServices.addTeacher(teacher);
		
	}

}
