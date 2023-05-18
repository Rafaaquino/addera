import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AlfaComponent } from './components/gd/alfa/alfa.component';
import { SigmaComponent } from './components/gd/sigma/sigma.component';
import { RpSigmaComponent } from './components/representantes/sigma/sigma.component';
import { RpDeltaComponent } from './components/representantes/delta/delta.component';
import { RpAlfaComponent } from './components/representantes/alfa/alfa.component';
import { InformeComponent } from './components/informe/informe.component';
import { BoasPraticasComponent } from './components/boas-praticas/boas-praticas.component';
import { TesteComponent } from './components/teste/teste.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AlfaComponent,
    SigmaComponent,
    RpSigmaComponent,
    RpDeltaComponent,
    RpAlfaComponent,
    InformeComponent,
    BoasPraticasComponent,
    TesteComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
