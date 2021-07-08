import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { MadeirasComponent } from './madeiras/madeiras.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'madeiras', component: MadeirasComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'Sobre Nós', component: AboutComponent},
  {path: 'Employees', component: EmployeesComponent},
  {path: '**', redirectTo: ''} //wildcard para erro de URL, tem por sintaxe de ser o ultimo do array dos routes!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
