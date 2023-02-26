
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlfaComponent } from './components/gd/alfa/alfa.component';
import { RpSigmaComponent } from './components/representantes/sigma/sigma.component';
import { SigmaComponent } from './components/gd/sigma/sigma.component';
import { InformeComponent } from './informe/informe.component';
import { BoasPraticasComponent } from './components/boas-praticas/boas-praticas.component';
import { RpDeltaComponent } from './components/representantes/delta/delta.component';
import { RpAlfaComponent } from './components/representantes/alfa/alfa.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gd/alfa-e-sigma', component: AlfaComponent},
  { path: 'gd/sigma', component: SigmaComponent},
  { path: 'representantes/sigma', component: RpSigmaComponent},
  { path: 'representantes/delta', component: RpDeltaComponent},
  { path: 'representantes/alfa', component: RpAlfaComponent},
  { path: 'informe', component: InformeComponent},
  { path: 'boas-praticas', component: BoasPraticasComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
