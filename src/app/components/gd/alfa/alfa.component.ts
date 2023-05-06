import { Component, OnInit } from '@angular/core';
import { ArquivosModel } from 'src/app/models/arquivos.model';
import { Gdsigma } from 'src/app/providers/arquivos.providers';

@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class AlfaComponent implements OnInit {
  arquivos: ArquivosModel[] = Gdsigma;
  constructor() { }

  ngOnInit(): void {
    console.log(this.arquivos);
  }
}
