import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


const routes: Routes = [
  {path: "cliente", component: LayoutComponent, children: [
    {path: "form", component: ClienteFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
