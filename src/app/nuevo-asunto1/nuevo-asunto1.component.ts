import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NuevoAsunto1Service } from './nuevo-asunto1.service';

@Component({
  selector: 'app-nuevo-asunto1',
  templateUrl: './nuevo-asunto1.component.html',
  styleUrls: ['./nuevo-asunto1.component.css']
})
export class NuevoAsunto1Component {
  constructor(private fileUploadService: NuevoAsunto1Service) {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'promediomovil';
  nombreX: string = '';
  nombreY: string = '';
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
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns = [
          this.nombreX,
          this.nombreY,
          'MMO_3',
          'MMO_4',
          'e_MM3',
          'e_MM4',
        ];
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
}
 