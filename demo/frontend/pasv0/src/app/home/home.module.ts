import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeAboutusComponent } from './home-aboutus/home-aboutus.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { HomeTestimonialComponent } from './home-testimonial/home-testimonial.component';

@NgModule({
    declarations: [HomeComponent, HomeHeaderComponent, HomeAboutusComponent, HomeHistoryComponent, HomeTestimonialComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgbCarouselModule,
        NgbAlertModule,
        CarouselModule
    ]
})
export class HomeModule { }
