import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*Modulos*/

import {EntidadModule} from "./laboratorio/module/entidad.module";
import {DashboardModule} from "../dashboard/module/dashboard.module";
import {ProductService} from "../dashboard/services/productservice";
import { ServicioComponent } from './laboratorio/components/servicio/servicio.component';
import { ServicioTableComponent } from './laboratorio/components/servicio-table/servicio-table.component';
import { RecetaComponent } from './laboratorio/components/receta/receta.component';
import { RecetaTableComponent } from './laboratorio/components/receta-table/receta-table.component';
import { IvaComponent } from './laboratorio/components/iva/iva.component';
import { IvaTableComponent } from './laboratorio/components/iva-table/iva-table.component';
import { EntidadComponent } from './laboratorio/components/entidad/entidad.component';
import { EntidadTableComponent } from './laboratorio/components/entidad-table/entidad-table.component';
import { CostosComponent } from './laboratorio/components/costos/costos.component';
import { CostosTableComponent } from './laboratorio/components/costos-table/costos-table.component';
import { InsumoComponent } from './laboratorio/components/insumo/insumo.component';
import { InsumoTableComponent } from './laboratorio/components/insumo-table/insumo-table.component';
import { EquipoEjecucionComponent } from './laboratorio/components/equipo-ejecucion/equipo-ejecucion.component';
import { EquipoEjecucionTableComponent } from './laboratorio/components/equipo-ejecucion-table/equipo-ejecucion-table.component';
import { PersonalEjecucionComponent } from './laboratorio/components/personal-ejecucion/personal-ejecucion.component';
import { PersonalEjecucionTableComponent } from './laboratorio/components/personal-ejecucion-table/personal-ejecucion-table.component';
import { ArrendamientoComponent } from './laboratorio/components/arrendamiento/arrendamiento.component';
import { RegistroServicioComponent } from './laboratorio/components/registro-servicio/registro-servicio.component';
import { EquiposServicioComponent } from './laboratorio/components/equipos-servicio/equipos-servicio.component';
import { DocumentosServicioComponent } from './laboratorio/components/documentos-servicio/documentos-servicio.component';
import { CostosServicioComponent } from './laboratorio/components/costos-servicio/costos-servicio.component';
import { FichaServicioComponent } from './laboratorio/components/ficha-servicio/ficha-servicio.component';
import { DocumentosServicioTableComponent } from './laboratorio/components/documentos-servicio-table/documentos-servicio-table.component';
import { ResumenCostoServicioComponent } from './laboratorio/components/registro-servicio/resumen-costo-servicio/resumen-costo-servicio.component';


@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        EntidadModule,
        DashboardModule,


    ],

    providers: [ProductService]
})
export class PagesModule {
}
