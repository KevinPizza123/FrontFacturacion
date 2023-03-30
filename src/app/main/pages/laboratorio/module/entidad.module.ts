import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {TooltipModule} from "primeng/tooltip";
import {LaboratorioComponent} from "../components/laboratorio/laboratorio.component";

import {RUTA_ENTIDAD} from "../routes/entidad.routing";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PanelModule } from 'primeng/panel';
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {LaboratorioTableComponent} from "../components/laboratorio-table/laboratorio-table.component";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {DividerModule} from "primeng/divider";
import {ResponsableComponent} from "../components/responsable/responsable.component";
import {ResponsableTableComponent} from "../components/responsable-table/responsable-table.component";
import {AcreditacionComponent} from "../components/acreditacion/acreditacion.component";
import {AcreditacionTableComponent} from "../components/acreditacion-table/acreditacion-table.component";
import {Laboratoriov2Component} from "../components/laboratorio/laboratoriov2/laboratoriov2.component";
import {LaboratorioListComponent} from "../components/laboratorio-list/laboratorio-list.component";
import {LaboratorioProfileComponent} from "../components/laboratorio-profile/laboratorio-profile.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {DocumentacionlabTableComponent} from "../components/documentacionlab-table/documentacionlab-table.component";
import {DocumentacionlabComponent} from "../components/documentacionlab/documentacionlab.component";
import {LaboratorioFichaComponent} from "../components/laboratorio-ficha/laboratorio-ficha.component";
import {SpeedDialModule} from "primeng/speeddial";
import {AutoCompleteModule} from "primeng/autocomplete";
import {PrimengModule} from "src/app/primeng/primeng.module";
import {PersonalTableComponent} from "../components/personal-table/personal-table.component";
import {PersonalComponent} from "../components/personal/personal.component";

import { PerfilesComponent } from '../components/perfiles/perfiles.component';
import { PerfilesTableComponent } from '../components/perfiles-table/perfiles-table.component';

import { MenuComponent } from '../components/menu/menu.component';
import { MenuTableComponent } from '../components/menu-table/menu-table.component';

import { Perfiles_menuComponent} from "../components/perfil-menu/perfiles_menu.component";
import { Perfiles_menuTableComponent} from "../components/perfil-menu-table/perfiles_menu-table.component";


import { CargoPersonalComponent } from '../components/cargo-personal/cargo-personal.component';
import { CargoPersonalTableComponent } from '../components/cargo-personal-table/cargo-personal-table.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ServicioComponent} from "../components/servicio/servicio.component";
import {ServicioTableComponent} from "../components/servicio-table/servicio-table.component";
import {RecetaComponent} from "../components/receta/receta.component";
import {RecetaTableComponent} from "../components/receta-table/receta-table.component";
import {IvaComponent} from "../components/iva/iva.component";
import {IvaTableComponent} from "../components/iva-table/iva-table.component";
import {EntidadComponent} from "../components/entidad/entidad.component";
import {EntidadTableComponent} from "../components/entidad-table/entidad-table.component";
import {CostosComponent} from "../components/costos/costos.component";
import {CostosTableComponent} from "../components/costos-table/costos-table.component";
import {InsumoComponent} from "../components/insumo/insumo.component";
import {InsumoTableComponent} from "../components/insumo-table/insumo-table.component";
import {EquipoEjecucionComponent} from "../components/equipo-ejecucion/equipo-ejecucion.component";
import {EquipoEjecucionTableComponent} from "../components/equipo-ejecucion-table/equipo-ejecucion-table.component";
import {PersonalEjecucionComponent} from "../components/personal-ejecucion/personal-ejecucion.component";
import {
    PersonalEjecucionTableComponent
} from "../components/personal-ejecucion-table/personal-ejecucion-table.component";
import {ArrendamientoComponent} from "../components/arrendamiento/arrendamiento.component";
import {ArrendamientoTableComponent} from "../components/arrendamiento-table/arrendamiento-table.component";
import {RegistroServicioComponent} from "../components/registro-servicio/registro-servicio.component";
import {RUTA_REG_SERVICIO} from "../routes/servicio-steps.routing";
import {EquiposServicioComponent} from "../components/equipos-servicio/equipos-servicio.component";
import {DocumentosServicioComponent} from "../components/documentos-servicio/documentos-servicio.component";
import {CostosServicioComponent} from "../components/costos-servicio/costos-servicio.component";
import {FichaServicioComponent} from "../components/ficha-servicio/ficha-servicio.component";
import {CdkTableModule} from "@angular/cdk/table";
import {
    DocumentosServicioTableComponent
} from "../components/documentos-servicio-table/documentos-servicio-table.component";
import {
    ResumenCostoServicioComponent
} from "../components/registro-servicio/resumen-costo-servicio/resumen-costo-servicio.component";


@NgModule({
    declarations: [
        EntidadComponent,
        EntidadTableComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(RUTA_ENTIDAD),
        InputTextModule,
        InputNumberModule,
        DialogModule,
        InputTextareaModule,
        FileUploadModule,
        ButtonModule,
        CalendarModule,
        TooltipModule,
        DataViewModule,
        DropdownModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        PanelModule,
        StyleClassModule,
        RippleModule,
        ToolbarModule,
        TableModule,
        DividerModule,
        FormsModule,
        SpeedDialModule,
        AutoCompleteModule,
        SpeedDialModule,
        ScrollPanelModule,
        PrimengModule,
        CdkTableModule
    ]
})
export class EntidadModule {
}
