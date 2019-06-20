import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
    declarations: [StudentComponent, StudentDetailsComponent],
    imports: [
        CommonModule,
        StudentRoutingModule,
        HttpClientModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class StudentModule { }
