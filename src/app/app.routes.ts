import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { TemasComponent } from './components/temas/temas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'alumnos', component: EstudiantesComponent },
    { path: 'docentes', component: DocentesComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'temas', component: TemasComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
