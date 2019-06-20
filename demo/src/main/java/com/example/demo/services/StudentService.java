package com.example.demo.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.google.gson.Gson;

@Service
public class StudentService {
	
	
	String students="[\r\n" + 
			"{\"name\": \"Sunita Kumari\",\"login\":\"skumari\",\"age\":\"10\"},\r\n" + 
			"{\"name\": \"Tushar Das\",\"login\":\"tdas\",\"age\":\"16\"},\r\n" + 
			"{\"name\": \"Ena Sal\",\"login\":\"esal\",\"age\":\"10\"},\r\n" + 
			"{\"name\": \"Saurabh Singh\",\"login\":\"ssingh\",\"age\":\"12\"},\r\n" + 
			"{\"name\": \"Vimal Gutr\",\"login\":\"vgutr\",\"age\":\"7\"},\r\n" + 
			"{\"name\": \"Mahi Goud\",\"login\":\"mgoud\",\"age\":\"15\"},\r\n" + 
			"{\"name\": \"Sujit Pal\",\"login\":\"spal\",\"age\":\"14\"},\r\n" + 
			"{\"name\": \"Meena Gosh\",\"login\":\"mgosh\",\"age\":\"15\"},\r\n" + 
			"{\"name\": \"Uday Kothak\",\"login\":\"ukothak\",\"age\":\"5\"},\r\n" + 
			"{\"name\": \"Sani More\",\"login\":\"smore\",\"age\":\"8\"},\r\n" + 
			"{\"name\": \"Michel Kron\",\"login\":\"mkorn\",\"age\":\"17\"},\r\n" + 
			"{\"name\": \"Thebas Mar\",\"login\":\"tmar\",\"age\":\"12\"},\r\n" + 
			"{\"name\": \"Sam Mihro\",\"login\":\"smihiro\",\"age\":\"13\"}\r\n" + 
			"\r\n" + 
			"]\r\n" + 
			"";
			

	
	public List<Student> getStudents() {
		
		System.out.println("json student "+ students);
		Gson g = new Gson();
		Student[] studentArr = g.fromJson(students, Student[].class);


		System.out.println("studentsObj  :"+studentArr);

		return Arrays.asList(studentArr);
	}
}
