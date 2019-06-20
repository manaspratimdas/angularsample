import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent} from './student.component';
import { StudentDetailsComponent} from './student-details/student-details.component';

const routes: Routes = [
    {path : '', component: StudentComponent},
    {path : 'details', component: StudentDetailsComponent},
    {path : 'details/:action', component: StudentDetailsComponent},
    {path : 'details/:action/:login', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
