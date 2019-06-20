package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Student;
import com.example.demo.services.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	
	@RequestMapping(value="/list/students", method=RequestMethod.GET)
	public List<Student> getStudents() {
		
		System.out.println("students in controller "+studentService.getStudents());
		return studentService.getStudents();
		
	}
	
	@RequestMapping(value="/insert/students",method=RequestMethod.POST)
	public List<Student> insertBulkStudents(@RequestParam("file") MultipartFile file){
		System.out.println("in insertBulkStudents in server controller "+ file.getName());
		return studentService.getStudents();
	}
	

}
