import { Component, OnInit } from '@angular/core';
import { ArquivosModel } from 'src/app/models/arquivos.model';
import { RpDelta } from 'src/app/providers/rpDelta.providers';
@Component({
  selector: 'app-rp-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class RpDeltaComponent implements OnInit {

  arquivos: ArquivosModel[] = RpDelta;
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
    const pessoaSelecionada = RpDelta.find(pessoa => pessoa.id === id);
    if (pessoaSelecionada) {
      this.pessoaModal = pessoaSelecionada
      console.log(pessoaSelecionada)
      this.openModal();
    }
  }

}
