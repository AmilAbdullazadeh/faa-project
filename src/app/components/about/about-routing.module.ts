import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {exitGuard} from "../../guards/exit.guard";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./about.component').then(m => m.AboutComponent)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
