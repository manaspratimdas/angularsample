package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Teacher;

@Service
public class TeacherServices {
	
	public List<Teacher> teachers(){
		Teacher teacher1=new Teacher();
		teacher1.setId(1);
		teacher1.setFirstName("Bob");
		teacher1.setLastName("Smith");
		
		Teacher teacher2=new Teacher();
		teacher2.setId(2);
		teacher2.setFirstName("Pabolo");
		teacher2.setLastName("Picaso");
		
		Teacher teacher3=new Teacher();
		teacher3.setId(3);
		teacher3.setFirstName("Thomas");
		teacher3.setLastName("Edison");
		
		
		
		List<Teacher> teachers=new ArrayList<>();
		teachers.add(teacher1);
		teachers.add(teacher2);
		teachers.add(teacher3);
		teachers.add(teacher2);
		teachers.add(teacher2);
		
		return teachers;
	}
	
	public List<Teacher> listAllTeachers(){
		
		return teachers();
		
	}
	
	
	public List<Teacher> addTeacher(Teacher teacher){
		
		
		List<Teacher> teachers=teachers();
		teachers.add(teacher);
		System.out.println("teacher in server service "+teachers);
		return teachers;
		
	}

}
