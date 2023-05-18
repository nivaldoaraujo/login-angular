import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PainelComponent } from './componentes/painel/painel.component';

const routes: Routes = [
  { path:'projadm', component: LoginComponent },
  { path:'painel', component:  PainelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
