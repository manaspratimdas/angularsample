import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from './authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    constructor(
        private formBuilder: FormBuilder,
        public router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService
    ) {

        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.loginForm.controls; }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    onSubmit() {
        console.log('login component...');
        console.log('username ' + this.f.username.value);
        console.log('password ' + this.f.password.value);
        this.authenticationService.login(this.f.username.value, this.f.password.value)
           .subscribe(
             data => {
                   console.log('success ' + this.route.snapshot.queryParams['returnUrl']);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log('fail');
                }
          );

    }
}
