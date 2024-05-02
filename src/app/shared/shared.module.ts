import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitlePipe} from "../pipes/title.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TitlePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TitlePipe
  ]
})
export class SharedModule { }
