import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MadeirasComponent } from './madeiras/madeiras.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { AboutComponent } from './about/about.component';
import { ServicosComponent } from './servicos/servicos.component';

import { EmployeesComponent } from './employees/employees.component';


import { SobreDTO } from './sobreDTO';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    MadeirasComponent,
    ContactosComponent,
    InicioComponent,
    MenuTopComponent,
    ServicosComponent,
    AboutComponent,
    EmployeesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatCardModule, /*angular material */
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LeafletModule,
    MatCommonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,

    TooltipModule.forRoot(), /* NGX bootstrap */
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
