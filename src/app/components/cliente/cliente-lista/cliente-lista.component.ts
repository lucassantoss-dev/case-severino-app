import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { ClienteService } from 'src/app/resources/services/cliente.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  cliente: Cliente[] = [];
  clienteSelecionado: Cliente = null;

  displayedColumns: string[] = [
    "descricao",
    "cliente",
    "usuario",
    "dataAbertura",
    "acoes"
  ];
  dataSource: MatTableDataSource<Cliente> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor(
    private service: ClienteService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.service.getCliente().subscribe((response) => {
      this.cliente = response;
      this.dataSource = new MatTableDataSource<Cliente>(this.cliente);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });

    console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  novoCadastro() {
    this.router.navigate(["/cliente/form"]);
  }
  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }
  deletarSolicitacao() {
    this.service.deletar(this.clienteSelecionado).subscribe(
      (response) => {
        this.alertService.success(
          "Maravilha",
          "Você optou por excluir essa solicitacao"
        );
        this.ngOnInit();
      },
      (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
      }
    );
  }

}
