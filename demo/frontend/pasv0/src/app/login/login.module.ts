import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtinterceptorService} from '../login/interceptor/jwtinterceptor.service';
import {FakeBackendService} from '../login/interceptor/fake-backend.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [LoginComponent],
     providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true },        
        // provider used to create fake backend
        FakeBackendService
    ]
})
export class LoginModule {}
