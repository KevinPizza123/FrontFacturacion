import {Routes} from '@angular/router';
import {LaboratorioComponent} from "../components/laboratorio/laboratorio.component";
import {ResponsableComponent} from "../components/responsable/responsable.component";
import {AcreditacionComponent} from "../components/acreditacion/acreditacion.component";
import {LaboratorioListComponent} from "../components/laboratorio-list/laboratorio-list.component";
import {LaboratorioProfileComponent} from "../components/laboratorio-profile/laboratorio-profile.component";
import {AuthGuard} from "../../../../_guards/auth.guard";
import {EntidadComponent} from "../components/laboratorio/laboratoriov2/laboratoriov2.component";
import {DocumentoLaboratorioDto} from "../model/DocumentoLaboratorioDto";
import {DocumentacionlabComponent} from "../components/documentacionlab/documentacionlab.component";
import {LaboratorioFichaComponent} from "../components/laboratorio-ficha/laboratorio-ficha.component";
import {PersonalComponent} from "../components/personal/personal.component";

import { PerfilesComponent } from '../components/perfiles/perfiles.component';

import {MenuComponent} from '../components/menu/menu.component';
import {Perfiles_menuComponent} from "../components/perfil-menu/perfiles_menu.component";

import { CargoPersonalComponent } from '../components/cargo-personal/cargo-personal.component';
import {ServicioComponent} from "../components/servicio/servicio.component";
import {RecetaComponent} from "../components/receta/receta.component";
import {IvaComponent} from "../components/iva/iva.component";
import {EntidadComponent} from "../components/entidad/entidad.component";
import {CostosComponent} from "../components/costos/costos.component";
import {InsumoComponent} from "../components/insumo/insumo.component";
import {EquipoEjecucionComponent} from "../components/equipo-ejecucion/equipo-ejecucion.component";
import {PersonalEjecucionComponent} from "../components/personal-ejecucion/personal-ejecucion.component";
import {ArrendamientoComponent} from "../components/arrendamiento/arrendamiento.component";
import {RegistroServicioComponent} from "../components/registro-servicio/registro-servicio.component";

export const RUTA_ENTIDAD: Routes = [

    {
        path: 'entidad',
        component: EntidadComponent,
        canActivate: [AuthGuard],
    },
];
