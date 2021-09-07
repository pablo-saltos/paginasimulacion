import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Nuevoasunto2Service } from '../nuevoasunto2/nuevoasunto2.service';

@Component({
  selector: 'app-nuevoasunto2',
  templateUrl: './nuevoasunto2.component.html',
  styleUrls: ['./nuevoasunto2.component.css']
})
export class Nuevoasunto2Component {

  constructor(private fileUploadService: Nuevoasunto2Service) {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'suavizamiento';
  nombreX: string = '';
  nombreY: string = '';
  alpha: string = '';
  api: string = '';
  displayedColumns: string[] = [];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    } else {
      this.fileName = 'Suba un archivo';
    }
  }
  onUpload() {
    this.loading = !this.loading;
    this.fileUploadService
      .upload(this.file!, `${this.api}/${this.alpha}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns = [this.nombreX, this.nombreY, 'SN'];
        console.log(this.displayedColumns);
        this.dataSource.data = respuesta.datos;
        this.dataSource.paginator = this.paginator;
        document.getElementById('hidden')!.style.display = 'block';
        this.llegaronDatos = true;
      });
  }

  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
    this.api = this.base + '/' + nombreX.target.value + '/' + this.nombreY;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
    this.api = this.base + '/' + this.nombreX + '/' + nombreY.target.value;
  }

  onChangeAlpha(alpha: any) {
    this.alpha = alpha.target.value;
  }
}
