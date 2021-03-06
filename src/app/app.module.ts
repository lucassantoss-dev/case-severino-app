import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
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
import { SolicitacaoModule } from './components/solicitacao/solicitacao.module';
import { ClienteService } from './resources/services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ChatModule } from './components/chat/chat.module';
import { SolicitacaoService } from './resources/services/solicitacao.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    AuthComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    BrowserAnimationsModule,
    SolicitacaoRoutingModule,
    ClienteModule,
    SolicitacaoModule,
    ChatModule
  ],
  providers: [
    ClienteService,
    SolicitacaoService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
