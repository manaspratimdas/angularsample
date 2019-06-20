import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import {TeacherService} from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

    teachers: Teacher[];
  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teachers =this.teacherService.getTeachers();
  }

}
