import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth.guard';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'signup',
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "events",
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "todolist",
    component: TodolistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
