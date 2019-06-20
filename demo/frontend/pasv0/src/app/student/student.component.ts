import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';



@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    students: Student[];

    listData: MatTableDataSource<any>;

    displayedColumns: string[] = ['name', 'login', 'age', 'action'];
    @ViewChild(MatSort) sort: MatSort;
    pageSizeOptions: number[] = [5, 10, 25, 100];
     pageSize = 5;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    searchKey: string;
    constructor(private studentService: StudentService) { }

    ngOnInit() {
        // this.students = this.studentService.getStudents();
        console.log('in the controller after receive data from server........');
        this.studentService.getStudents().subscribe(
            data => {
                this.students = data;
            }
        );

        console.log('--> ' + this.students);

        this.studentService.getStudents().subscribe(
            list => {
                console.log('test  ' + list);
                this.listData = new MatTableDataSource(list);
                this.listData.sort = this.sort;
                this.listData.paginator = this.paginator;

            });


    }

    doModify(){

        console.log('in do modify');
    }

    onSearchClear() {
        this.searchKey ='';
        this.applyFilter();
    }

    applyFilter(){
        console.log('in apply filter');
        this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
    }
}
