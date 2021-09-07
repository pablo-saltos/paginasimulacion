import { Component, Input, OnInit } from '@angular/core';
import { Asunto1Service } from './asunto1.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}

/**
 * @title Display value autocomplete
 */

@Component({
  selector: 'app-asunto1',
  templateUrl: './asunto1.component.html',
  styleUrls: ['./asunto1.component.css'],
})
export class Asunto1Component implements OnInit {

  constructor(private fileUploadService: Asunto1Service) {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  datosImg: string = '';
  graficaImg: string = '';

//********************************/
  myControl = new FormControl();
  options: User[] = [
    {name: 'hospitalizados_totales'},
    {name: 'hospitalizados_totales_cdmx'},
    {name: 'hospitalizados_totales_edomex'},
    {name: 'camas_intubados_totales'},
    {name: 'camas_intubados_cdmx'},
    {name: 'camas_intubados_edomex'},
  ];
  filteredOptions: Observable<User[]>;
//*******************************

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
        this.llegaronDatos = true;
        this.datosImg = 'http://34.67.213.198:3000/images/' + respuesta.datos;
        this.graficaImg =
          'http://34.67.213.198:3000/images/' + respuesta.grafica;
      });
  }
//*******************************
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  //*******************************
  base: string = 'tema1';
  nombreX: string = '';
  nombreY: string = '';
  api: string = '';
  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
    this.api = this.base + '/' + nombreX.target.value + '/' + this.nombreY;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
    this.api = this.base + '/' + this.nombreX + '/' + nombreY.target.value;
  }
}


