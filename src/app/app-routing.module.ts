import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  //Rota principal como login.
  {path: "", component: LoginComponent},
  //Rota de Layout usando children.
  {path: "layout", component: LayoutComponent, children: [
    {path: "cliente", component: ClienteFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
