import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
    declarations: [
        AuthLayoutComponent,
        HeaderComponent,
    
    ],
    imports: [
        CommonModule,
        AuthLayoutRoutingModule,
        
        ComponentsModule,
        ReactiveFormsModule,
 
    ]
})
export class AuthLayoutModule { }
