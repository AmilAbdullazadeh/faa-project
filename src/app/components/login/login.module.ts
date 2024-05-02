import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {HighlightDirective} from "../../directives/highlight.directive";

@NgModule({
  declarations: [
    LoginComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
