import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { CursoService } from './services/curso.service';
import { NavComponent } from './commons/nav/nav.component';
import { HomeComponent } from './commons/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { TemasComponent } from './components/temas/temas.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        CursosComponent,
        DocentesComponent,
        EstudiantesComponent,
        TemasComponent,
    ],
    imports: [
        BrowserModule, 
        HttpClientModule, 
        RouterOutlet,
        AppRoutingModule 
    ],
    providers: [
        CursoService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
