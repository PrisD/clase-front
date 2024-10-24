import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { CursoService } from './services/curso.service';

@NgModule({
    declarations: [
        AppComponent],
    imports: [
        BrowserModule, 
        HttpClientModule, 
        RouterOutlet],
    providers: [
        CursoService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
