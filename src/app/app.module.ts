import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteRoutingModule } from './components/cliente/cliente-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolicitacaoFormComponent } from './components/solicitacao/solicitacao-form/solicitacao-form.component';
import { SolicitacaoRoutingModule } from './components/solicitacao/solicitacao-routing.module';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { ClienteModule } from './components/cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    //ClienteFormComponent,
    SolicitacaoFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    BrowserAnimationsModule,
    SolicitacaoRoutingModule,
    ClienteModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
