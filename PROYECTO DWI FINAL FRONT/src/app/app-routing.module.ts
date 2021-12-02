import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AltacarreraComponent } from "./pages/altacarrera/altacarrera.component";
import { AltagrupoComponent } from "./pages/altagrupo/altagrupo.component";
import { AltacordinadorComponent } from "./pages/altacordinador/altacordinador.component";
import { AltaperiodoComponent } from "./pages/altaperiodo/altaperiodo.component";
import { AltaespecialidadComponent } from "./pages/altaespecialidad/altaespecialidad.component";
import { AltamateriaComponent } from "./pages/altamateria/altamateria.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { AcademiaComponent } from "./pages/academia/academia.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "altacarrera", component: AltacarreraComponent },
  { path: "altagrupo", component: AltagrupoComponent },
  { path: "altacordinador", component: AltacordinadorComponent },
  { path: "altaperiodo", component: AltaperiodoComponent },
  { path: "altaespecialidad", component: AltaespecialidadComponent },
  { path: "altamateria", component: AltamateriaComponent },
  { path: "academia", component: AcademiaComponent },
  { path: "home", component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
