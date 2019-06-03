import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../app/user/user.component';
import { LoginComponent } from '../app/login/login.component';
import { AdminComponent } from '../app/admin/admin.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'user', component: UserComponent },
{ path: 'admin', component: AdminComponent },
{ path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
