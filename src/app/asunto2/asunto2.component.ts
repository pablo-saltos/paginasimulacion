/* 

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-asunto2',
  templateUrl: './asunto2.component.html',
  styleUrls: ['./asunto2.component.css']
})


export class Asunto2Component implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

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
} */


import {Component, OnInit} from '@angular/core';
import { Asunto2Service } from '../asunto2/asunto2.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-asunto2',
  templateUrl: './asunto2.component.html',
  styleUrls: ['./asunto2.component.css']
})

export class Asunto2Component implements OnInit {
  constructor(private fileUploadService: Asunto2Service) {}
  ngOnInit(): void {}
  fileName = '';
  file: File | null = null; // Variable to store file
  llegaronDatos: boolean = false;
  nombreColumna: string = '';
  api: string = '';
  base: string = 'mmm';

  media: string = '';
  mediana: string = '';
  moda: string = '';

  onChangeColumna(nombreColumna: any) {
    this.nombreColumna = nombreColumna.target.value;
    this.api = this.base + '/' + this.nombreColumna;
  }
  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    } else {
      this.fileName = 'Suba un archivo';
    }
  }
  onUpload() {
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.llegaronDatos = true;
        this.media = respuesta.media;
        this.mediana = respuesta.mediana;
        this.moda = respuesta.moda;
      });
  }
}
