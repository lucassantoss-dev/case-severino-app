import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { ClienteService } from 'src/app/resources/services/cliente.service';
import { SolicitacaoService } from 'src/app/resources/services/solicitacao.service';
import { Cliente } from '../../cliente/Cliente';
import { Solicitacao } from '../solicitacao';

@Component({
  selector: 'app-solicitacao-form',
  templateUrl: './solicitacao-form.component.html',
  styleUrls: ['./solicitacao-form.component.css']
})
export class SolicitacaoFormComponent implements OnInit {

  cliente: Cliente[] = [];
  solicitacaoForm: FormGroup;
  solicitacao: Solicitacao;
  colorSituacao: string;
  status: string = 'Inativo';
  Validators: any;
  id: number;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private solicitacaoService: SolicitacaoService,
    private alertService: AlertService,
    private clienteService: ClienteService
  ) { 
    this.solicitacao = new Solicitacao();

   }

  ngOnInit(): void {
    this.configurarFormulario();
    this.clienteService
      .getCliente()
      .subscribe((response) => (this.cliente = response));
  }
  onChange($event: MatSlideToggleChange) {
    if(!$event.checked){
      this.status = 'Inativo'
    } else {
      this.status = 'Ativo'
    }
  }
  configurarFormulario() {
    this.solicitacaoForm = this.formBuilder.group(
      {
        descricao: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(1000),
          ]),
        ],
        usuario: [
          null,
          Validators.compose([
            Validators.required, 
            Validators.minLength(3),
            Validators.maxLength(100),]),
        ],
        dataAbertura: [
          null,
          Validators.compose([
            Validators.required,
          ])
        ],
        dataEncerramento: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
      }
    );
  }
  change() {
    console.log(this.solicitacao.cliente);
  }
  salvar() {
    this.configurarFormulario();
    if(this.id){
      this.solicitacaoService
      .atualizar(this.solicitacao)
      .subscribe(response => {
        this.alertService.success('Maravilha', 'Solicitação atualizada com sucesso');
      }, errorResponse => {
        this.alertService.info('error', 'Erro ao atualizar a solicitação!');
      })

    }else {
    this.solicitacaoService
      .salvar(this.solicitacao)
      .subscribe( (data) => {
        this.alertService.success('Ótimo', 'Solicitação criada com sucesso!');
      }, (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
        })
    }
  }

  voltarParaListagem() {
    this.router.navigate(["solicitacao/lista"]);
  }

}
