import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path:'listado',
        component:ListaUsuariosComponent 
    }, 
    {
        path:'',
        component: PrincipalComponent
    },
    { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: '', redirectTo: '/crear-usuario', pathMatch: 'full' } // Redirige a crear-usuario por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } ;
  
