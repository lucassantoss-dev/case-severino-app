import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: "chat", component: LayoutComponent, children: [
    { path: "form", component: ChatComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
