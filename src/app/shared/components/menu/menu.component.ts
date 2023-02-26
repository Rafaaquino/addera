import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  imagem: string;
  tipoOpen: string = "../../../../assets/images/menu-open.png";
  tipoClose: string = "../../../../assets/images/menu-close.png";

  constructor() { }

  ngOnInit(): void {
    this.imagem = this.tipoClose;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ? this.imagem = this.tipoOpen : this.imagem = this.tipoClose;

    console.log("menu ", this.isMenuOpen)
  }

}
