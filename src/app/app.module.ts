import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BuenaspracticasComponent } from './buenaspracticas/buenaspracticas.component';
import { MalaspracticasComponent } from './malaspracticas/malaspracticas.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    BuenaspracticasComponent,
    MalaspracticasComponent,
    DenunciasComponent,
    NoticiasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'contacto', component: ContactoComponent},
      {path: 'buenaspracticas', component: BuenaspracticasComponent},
      {path: 'malaspracticas', component: MalaspracticasComponent},
      {path: 'denuncias', component: DenunciasComponent},
      {path: 'noticias', component: NoticiasComponent},
    {path: 'home', component: HomeComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
