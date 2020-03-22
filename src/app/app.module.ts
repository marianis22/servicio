import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';
import { JsonService } from './json.service';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { Expediente2Component } from './pages/expediente2/expediente2.component';
import { CardsalumnosComponent } from './pages/cardsalumnos/cardsalumnos.component';
import { StudentComponent } from './pages/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortafolioComponent,
    Expediente2Component,
    CardsalumnosComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
