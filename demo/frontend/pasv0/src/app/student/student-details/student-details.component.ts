import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

    studentForm: FormGroup;

    login: string;
    name: string;
    age: string;

    isFormDisabled: boolean = false;
    showEditButton: boolean = false;
    showSaveButton: boolean = false;
    isRegisterEnabled: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {

        this.route.params.subscribe(params => {
            console.log('params in constructor ' + params['action'])
            this.initalizeForm(params['login'])
            if (params['action'] == 'list') {
                this.isFormDisabled = true;
                this.showEditButton = true;
            }
            else if (params['action'] == 'modify' ) {
                this.showSaveButton = true;
                console.log('isFormDisabled  ' + this.isFormDisabled);
            }
            else if(params['action'] == 'register'){
                 this.isRegisterEnabled=true;
            }

        });

    }

    ngOnInit() {
        this.studentForm = this.formBuilder.group(
            {
                name: [this.name],
                login: [this.login],
                age: [this.age]
            }
        );

        console.log('in ngOnInit conditional block' + this.isFormDisabled);
        if (this.isFormDisabled) {
            console.log('in ngOnInit conditional block')
            this.studentForm.controls['name'].disable();
            this.studentForm.controls['login'].disable();
            this.studentForm.controls['age'].disable();
        }
        if(this.isRegisterEnabled){
            this.studentForm.controls['name'].setValue('');
            this.studentForm.controls['login'].setValue('');
            this.studentForm.controls['age'].setValue('');
        }
    }


    initalizeForm(login: string) {
        this.login = login;
        console.log('initializing the form..' + this.login);
        this.name = 'MPD';
        this.age = '10';
        // We need to get the data from backend here and assign to each attribute in the form.

    }

    onEdit() {
        console.log('Student edit...');
        this.router.navigate(['/student/details', 'modify', this.login]);
        console.log('u are in edit block');
        this.studentForm.controls['name'].enable();
        this.studentForm.controls['login'].enable();
        this.studentForm.controls['age'].enable();
        this.showEditButton = false;
    }

    onSave() {
        console.log('Student save');

        //send data to server to save
        /*
        *
        */
        // Redirect to the edit page
        this.router.navigate(['/student/details', 'list', this.login]);
        this.studentForm.controls['name'].disable();
        this.studentForm.controls['login'].disable();
        this.studentForm.controls['age'].disable();
        this.showSaveButton = false;
    }

    onRegister() {
        console.log('Student Register');
    }

    onBack() {
        console.log('Student back');
         this.router.navigate(['/student']);
    }

}
