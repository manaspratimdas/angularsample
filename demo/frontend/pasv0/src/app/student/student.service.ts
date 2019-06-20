import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {

        return this.http.get<Student[]>('http://localhost:8080/list/students');

    }

    insertBulkStudents(file: File) {

        console.log('in insertBulkStudents ' + file.name);

        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.post<Student[]>('http://localhost:8080/insert/students', formData);
    }
}
