import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArquivosModel } from 'src/app/models/arquivos.model';
import { Gdsigma } from 'src/app/providers/arquivos.providers';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  arquivos: ArquivosModel[] = Gdsigma;
  modalVisible = false;
  pessoaModal: any;
  modal:any;
  showModal = false;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
       console.log(this.arquivos);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.pessoaModal = null;
  }

  openId(id: number) {
    const pessoaSelecionada = Gdsigma.find(pessoa => pessoa.id === id);
    if (pessoaSelecionada) {
      this.pessoaModal = pessoaSelecionada
      console.log(pessoaSelecionada)
      this.openModal();
    }
  }

  // openModalPessoa(pessoa: any) {
  //   const modalRef = this.modalService.open(ModalComponent);
  //   modalRef.componentInstance.pessoa = pessoa;
  // }

}
