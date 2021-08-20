import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthGuard } from './resources/services/auth.guard';


const routes: Routes = [
//   { path: "", component: AuthComponent, children: [
//     { path: "", redirectTo: "login", pathMatch: "full" },
//     { path: "login", component: LoginComponent },
//     { path: "create-account", component: CreateAccountComponent }
//   ],
//   canActivate: [AuthGuard]
// },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "cliente", component: ClienteFormComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
