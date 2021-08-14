import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Cliente } from '../Cliente';

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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
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
        nome_cliente: [
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
    //console.log("Clicou");
    const dadosFormulario = this.clienteForm.value;

    if (this.cliente && this.clienteForm.valid) {
      // this.usuarioService
      //   .salvarUsuarios(this.cliente)
      //   .subscribe((response) => console.log("Teste"));

      //console.log(dadosFormulario)
      this.clienteForm.reset();
      this.router.navigate(["usuarios/lista"]);
    }
  }

  voltarParaListagem() {
    this.router.navigate(["usuarios/lista"]);
  }

}
