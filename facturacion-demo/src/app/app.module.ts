import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClientesComponent } from './cliente/form-clientes.component';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'/cliente',pathMatch:'full'},
  {path:'cliente', component:ClienteComponent},
  {path:'cliente/form',component:FormClientesComponent}
]
@NgModule({
  declarations: [AppComponent, ClienteComponent, FormClientesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
