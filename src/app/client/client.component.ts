import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import {MatDialog} from '@angular/material/dialog';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  displayedColumns: string[] = ['SharedKey', 'BusinessID', 'E-mail', 'Phone', 'DataAdded', 'Editar'];
  parametroBusqueda: string = "";

  listaClientes: any[] = [];

  constructor(private clienteService: ClienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.consultarClientes();
  }

  

  consultarClientes() {
    let urlBusqueda = "";
    if (this.parametroBusqueda !== undefined && this.parametroBusqueda !== '') {
      urlBusqueda = "?parametroBusqueda=" + this.parametroBusqueda;
    }
    this.clienteService.obtenerClientes(urlBusqueda).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.listaClientes = resp['objeto_respuesta'] as any[];
      }
    });
  }

  abrirPopupCrearCliente(){
    let dialogRef = this.dialog.open(CrearClienteComponent,{width:'400px'});
    dialogRef.afterClosed().subscribe(result=>{
      this.consultarClientes();
    });
  }

}
