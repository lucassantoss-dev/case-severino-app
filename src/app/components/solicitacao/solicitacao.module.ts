import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacaoRoutingModule } from './solicitacao-routing.module';
import { SolicitacaoListaComponent } from './solicitacao-lista/solicitacao-lista.component';
import { SolicitacaoFormComponent } from './solicitacao-form/solicitacao-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [SolicitacaoListaComponent,
   SolicitacaoFormComponent
  ],
  imports: [
    CommonModule,
    SolicitacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SolicitacaoRoutingModule
  ],
  exports: [
    SolicitacaoFormComponent,
    SolicitacaoListaComponent
  ]
})
export class SolicitacaoModule { }
