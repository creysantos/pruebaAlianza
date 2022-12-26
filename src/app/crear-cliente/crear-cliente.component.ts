import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {
  nombre: string;
  telefono: string;
  correo: string;
  fechaInicio: Date;
  fechaFin: Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private clienteService: ClienteService) {
    this.nombre = "";
    this.telefono = "";
    this.correo = "";
    this.fechaInicio = new Date();
    this.fechaFin = new Date();
  }

  ngOnInit(): void {
  }

  guardarCliente() {
    let cliente = {
      sharedKey: this.nombre,
      businessId: this.nombre,
      email: this.correo,
      phone: this.telefono,
      dataAdded: new Date(),
    }
    this.clienteService.guardarCliente(cliente).subscribe({
      next:(resp)=>{
        console.log("RespG", resp);
      //  this.listaClientes = resp['objeto_respuesta'] as any[];
      }
    });
  }
}
