import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CursoService } from './services/curso.service';
import { NavComponent } from './commons/nav/nav.component';
import { HomeComponent } from './commons/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { TemasComponent } from './components/temas/temas.component';
import { AppRoutingModule } from './app.routes';
import { ModalCursoComponent } from './components/cursos/modal-curso/modal-curso.component';
import { EstudianteService } from './services/estudiante.service';
import { DocenteService } from './services/docente.service';
import { TemaService } from './services/tema.service';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        CursosComponent,
        DocentesComponent,
        EstudiantesComponent,
        TemasComponent,
        ModalCursoComponent,
    ],
    imports: [
        BrowserModule, 
        HttpClientModule, 
        RouterOutlet,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        CursoService,
        DocenteService,
        EstudianteService,
        TemaService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
