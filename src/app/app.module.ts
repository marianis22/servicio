import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { Expediente2Component } from './pages/expediente2/expediente2.component';
import { CardsalumnosComponent } from './pages/cardsalumnos/cardsalumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortafolioComponent,
    Expediente2Component,
    CardsalumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
