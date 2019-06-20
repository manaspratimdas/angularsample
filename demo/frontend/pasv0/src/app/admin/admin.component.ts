import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentService } from '../student/student.service';
import {Student} from '../student/student';


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


    studentBulkUploadForm: FormGroup;
    teacherBulkUploadForm: FormGroup;

    students: Student[];

    studentsFile: any = File;
    constructor(
        private route: ActivatedRoute,
        private router: Router,

        private formBuilder: FormBuilder,
        private studentService: StudentService
    ) { }

    ngOnInit() {
        this.studentBulkUploadForm = this.formBuilder.group({
           
            studentsFile: []
        });

        this.teacherBulkUploadForm = this.formBuilder.group({
             studentsFile: []
        });


    }

    registerStudent() {
        console.log('in student register');
        this.router.navigate(['/student/details', 'register']);
    }

    registerTeacher() {
        console.log('in teacher register ');
        this.router.navigate(['/teacher/details']);
    }

    registerTeachers() {

        console.log('buld upoload of teachers');

    }

    registerStudents() {


        console.log('uploading files now -> ' + JSON.stringify(this.studentBulkUploadForm.value));
        const formData: any = new FormData();
        formData.append('file', this.studentsFile);
        console.log('data file  ' + JSON.stringify(formData.value));

        this.studentService.insertBulkStudents(this.studentsFile).subscribe(
            data => {
                this.students = data;
                console.log('student list : ' + this.students);
            }
        );


    }

    getStudentsFile(event) {

        const file = event.target.files[0];
        console.log('buld upoload of students ' + JSON.stringify(file));
        this.studentsFile = file;

    }


    registeTeachers() {


        console.log('uploading files now -> ' + JSON.stringify(this.studentBulkUploadForm.value));
        const formData: any = new FormData();
        formData.append('file', this.studentsFile);
        console.log('data file  ' + JSON.stringify(formData.value));

        this.studentService.insertBulkStudents(this.studentsFile).subscribe(
            data => {
                this.students = data;
                console.log('student list : ' + this.students);
            }
        );


    }

    getTeachersFile(event) {

        const file = event.target.files[0];
        console.log('buld upoload of students ' + JSON.stringify(file));
        this.studentsFile = file;

    }
}
