import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {authGuard} from "./guards/auth.guard";
import {exitGuard} from "./guards/exit.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
    // canDeactivate: [exitGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivateChild: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        // canDeactivate: [authGuard]
      },
      {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
