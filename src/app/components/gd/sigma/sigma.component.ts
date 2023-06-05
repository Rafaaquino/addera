import { Component, OnInit } from '@angular/core';
import { ArquivosModel } from 'src/app/models/arquivos.model';
import { Gdsigma } from 'src/app/providers/arquivos.providers';

@Component({
  selector: 'app-sigma',
  templateUrl: './sigma.component.html',
  styleUrls: ['./sigma.component.css']
})
export class SigmaComponent implements OnInit {

  arquivos: ArquivosModel[] = Gdsigma;
  modalVisible = false;
  pessoaModal: any;
  modal:any;
  showModal = false;
  semFoto: string = "https://www.oscaraddera.com.br/assets/images/sem-foto.png"

  constructor(
  ) { }

  ngOnInit(): void {
       console.log(this.arquivos);
       this.verificaImg(this.arquivos);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.pessoaModal = null;
  }

  verificaImg(arquivo: ArquivosModel[]) {
    arquivo.forEach(element => {
      if(element.img == "") {
        element.img = this.semFoto;
        console.log("teste", element, element.img)
      }
    });
  }

  openId(id: number) {
    const pessoaSelecionada = Gdsigma.find(pessoa => pessoa.id === id);
    if (pessoaSelecionada) {
      this.pessoaModal = pessoaSelecionada
      console.log(pessoaSelecionada)
      this.openModal();
    }
  }

}
