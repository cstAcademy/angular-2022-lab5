import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NotFoundComponent, HomeComponent, CompanyInfoComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
