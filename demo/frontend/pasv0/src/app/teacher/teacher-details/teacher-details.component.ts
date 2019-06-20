import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {

  
    teacherRegistrationForm: FormGroup; 
    
   login: string;
   name: string;
   doj: string;

   isFormDisabled: boolean = false ;
   isEditEnabled: boolean =false;
   isSaveEnabled: boolean =false;
   isRegisterEnabled: boolean = false;

 
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
  ) {
      this.route.params.subscribe(params =>{
          console.log('params in constructor ' + params['action'])
          this.initalizeForm(params['login'])
          if(params['action'] == 'list'){
                this.isFormDisabled = true;
                this.isEditEnabled=true;
          }
          else if(params['action'] == 'modify'){
                 this.isSaveEnabled=true;                
                 console.log('isFormDisabled  ' + this.isFormDisabled) ;                
          }
         
    });

   }

  ngOnInit() {
     
      this.teacherRegistrationForm=this.formBuilder.group(
          {
             name: [this.name ],
              login: [this.login],
              doj: [this.doj]
          }
      );
      console.log('in ngOnInit conditional block' + this.isFormDisabled);
     if(this.isFormDisabled){
         console.log('in ngOnInit conditional block')
        this.teacherRegistrationForm.controls['name'].disable();
        this.teacherRegistrationForm.controls['login'].disable();
        this.teacherRegistrationForm.controls['doj'].disable();
     } 
     
  }

  onSubmit(){
      console.log('Teacher registration form');
      
  }

  initalizeForm(login: string){
      this.login=login;
    console.log('initializing the form..' +this.login);
    this.name='MPD';
    this.doj='1-jan-1919';
    // We need to get the data from backend here and assign to each attribute in the form.

  }


 onEdit(){
    this.router.navigate(['/teacher/details','modify',this.login]);
    console.log('u are in edit block');
     this.teacherRegistrationForm.controls['name'].enable();
     this.teacherRegistrationForm.controls['login'].enable();
     this.teacherRegistrationForm.controls['doj'].enable();
     this.isEditEnabled=false;
     
 }
  onSave(){
      console.log('in save...' + this.teacherRegistrationForm.value.name);
      //send data to server to save
      /*
      *
      */
      // Redirect to the edit page
       this.router.navigate(['/teacher/details','list',this.login]);
        this.teacherRegistrationForm.controls['name'].disable();
     this.teacherRegistrationForm.controls['login'].disable();
     this.teacherRegistrationForm.controls['doj'].disable();
     this.isSaveEnabled=false;
  }

  onBack(){
      console.log('you are going back....');
      this.router.navigate(['/teacher']);


  }

}
