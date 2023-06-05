import { Component, OnInit } from '@angular/core';
import { ArquivosModel } from 'src/app/models/arquivos.model';
import { RpAlfa } from 'src/app/providers/rpAlfa.providers';

@Component({
  selector: 'app-rp-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class RpAlfaComponent implements OnInit {

  arquivos: ArquivosModel[] = RpAlfa;
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
    const pessoaSelecionada = RpAlfa.find(pessoa => pessoa.id === id);
    if (pessoaSelecionada) {
      this.pessoaModal = pessoaSelecionada
      console.log(pessoaSelecionada)
      this.openModal();
    }
  }

}
