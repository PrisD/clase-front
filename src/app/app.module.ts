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
import { ModalNewCursoComponent } from './components/cursos/modal-new-curso/modal-new-curso.component';
import { ModalNewDocenteComponent } from './components/docentes/modal-new-docente/modal-new-docente.component';
import { ModalNewEstudianteComponent } from './components/estudiantes/modal-new-estudiante/modal-new-estudiante.component';
import { ModalEstudianteComponent } from './components/estudiantes/modal-estudiante/modal-estudiante.component';
import { ModalTemaComponent } from './components/temas/modal-tema/modal-tema.component';
import { ModalNewTemaComponent } from './components/temas/modal-new-tema/modal-new-tema.component';
import { ModalDocenteComponent } from './components/docentes/modal-docente/modal-docente.component';
import { CursoPopoverComponent } from './components/estudiantes/curso-popover/curso-popover.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocentePopoverComponent } from './components/docentes/docente-popover/docente-popover.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        CursosComponent,
        DocentesComponent,
        EstudiantesComponent,
        TemasComponent,
        ModalNewCursoComponent,
        ModalNewDocenteComponent,
        ModalNewEstudianteComponent,
        ModalNewTemaComponent,
        ModalCursoComponent,
        ModalDocenteComponent,
        ModalEstudianteComponent,
        ModalTemaComponent,
        CursoPopoverComponent,
        DocentePopoverComponent,
    ],
    imports: [
        BrowserModule, 
        HttpClientModule, 
        RouterOutlet,
        AppRoutingModule,
        FormsModule,
        NgbModule
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
