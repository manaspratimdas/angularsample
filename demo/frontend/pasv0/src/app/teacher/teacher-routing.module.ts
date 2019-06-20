import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from '@angular/forms';
import { TeacherComponent } from './teacher.component';
import {ModifyComponent} from './modify/modify.component';
import {RemoveComponent} from './remove/remove.component';
import {TeacherDetailsComponent} from './teacher-details/teacher-details.component';

const routes: Routes = [
    {path: '', component: TeacherComponent },
    {path: 'modify', component: ModifyComponent},
    {path: 'remove', component: RemoveComponent },
    {path: 'details', component:TeacherDetailsComponent},
    {path: 'details/:action', component:TeacherDetailsComponent},
    {path: 'details/:action/:login', component:TeacherDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
