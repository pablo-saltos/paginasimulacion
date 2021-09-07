import { Component, OnInit } from '@angular/core';
import { Asunto3Service } from './asunto3.service';

@Component({
  selector: 'app-asunto3',
  templateUrl: './asunto3.component.html',
  styleUrls: ['./asunto3.component.css']
})

export class Asunto3Component implements OnInit {
  constructor(private fileUploadService: Asunto3Service) {}
  ngOnInit(): void {}
  llegaronDatos: boolean = false;
  api: string = '';
  base: string = 'numerosAleatorios/cuadradosMedios';
  dataSource: any = [{}];
  displayedColumns: string[] = ['index', 'X2', 'Xi', 'ri'];

  cantidad: number = 0;
  seed: number = 0;

  onChangeSeed(seed: any) {
    this.seed = seed.target.value;
  }
  onChangeCantidad(cantidad: any) {
    this.cantidad = cantidad.target.value;
  }

  onUpload() {
    this.api = this.base + '/' + this.cantidad + '/' + this.seed;
    this.fileUploadService.upload(`${this.api}`).subscribe((respuesta: any) => {
      this.llegaronDatos = true;
      this.dataSource = respuesta.resultado;
      console.log(this.dataSource);
    });
  }
}