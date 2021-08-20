import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Cliente } from '../Cliente';
import { ClienteService } from 'src/app/resources/services/cliente.service';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;
  cliente: Cliente;
  confirmar_senha: string;
  colorSituacao: string;
  situacao: string = 'Inativo';
  Validators: any;
  id: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private alertService: AlertService
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.configurarFormulario();
  }
  onChange($event: MatSlideToggleChange) {
    if(!$event.checked){
      this.situacao = 'Inativo'
    } else {
      this.situacao = 'Ativo'
    }
  }

  configurarFormulario() {
    this.clienteForm = this.formBuilder.group(
      {
        nome: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
        senha: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12),
          ]),
        ],
        confirmar_senha: [null, Validators.compose([Validators.required])],
        situacao: [null, Validators.required],
      },
      { validator: this.senhasCombinam }
    );
  }

  senhasCombinam(controle: AbstractControl) {
    let senha = controle.get("senha").value;
    let confirmarSenha = controle.get("confirmar_senha").value;

    if (senha === confirmarSenha) return null;

    controle.get("confirmar_senha").setErrors({ senhasNaoCoincidem: true });
  }
  salvar() {
    this.configurarFormulario();
    if(this.id){
      this.clienteService
      .atualizar(this.cliente)
      .subscribe(response => {
        this.alertService.success('Maravilha', 'Cliente atualizado com sucesso');
      }, errorResponse => {
        this.alertService.info('error', 'Erro ao atualizar o cliente!');
      })

    }else {
    this.clienteService
      .salvar(this.cliente)
      .subscribe( (data) => {
        this.alertService.success('Ótimo', 'Cliente criado com sucesso!');
      }, (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
        })
    }
  }

  voltarParaListagem() {
    this.router.navigate(["layout"]);
  }

}
