import { RouterModule, Routes} from '@angular/router';
import {CardsalumnosComponent} from './pages/cardsalumnos/cardsalumnos.component';
import {Expediente2Component} from './pages/expediente2/expediente2.component';
import {PortafolioComponent} from './pages/portafolio/portafolio.component';
import { StudentComponent } from './pages/student/student.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: CardsalumnosComponent},
    { path: 'expediente', component: Expediente2Component},
    { path: 'portafolio', component: PortafolioComponent},
    { path: 'student/:id', component: StudentComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);