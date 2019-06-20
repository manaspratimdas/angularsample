import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, FormBuilder,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { ModifyComponent } from './modify/modify.component';
import { RemoveComponent } from './remove/remove.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { FormModule } from '../layout/form/form.module';

@NgModule({
  declarations: [TeacherComponent, ModifyComponent, RemoveComponent, TeacherDetailsComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormModule
  ]
})
export class TeacherModule { }
