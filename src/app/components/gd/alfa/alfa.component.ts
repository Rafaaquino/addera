import { Component, OnInit } from '@angular/core';
import { ArquivosModel } from 'src/app/models/arquivos.model';
import { GdAlfa } from 'src/app/providers/gdAlfa.providers';
@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class AlfaComponent implements OnInit {
  arquivos: ArquivosModel[] = GdAlfa;
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
    const pessoaSelecionada = GdAlfa.find(pessoa => pessoa.id === id);
    if (pessoaSelecionada) {
      this.pessoaModal = pessoaSelecionada
      console.log(pessoaSelecionada)
      this.openModal();
    }
  }

  aroundMath(porcentagem: number){
    return Math.round(porcentagem);
  }

}
