import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TipoServicioDto} from "../../model/TipoServicioDto";
import {FileService} from "../../../../../_service/utils/file.service";
import {AppService} from "../../../../../_service/app.service";
import {ConfirmationService} from "primeng/api";
import {Table} from "primeng/table";
import {TipoServicioService} from "../../services/tiposervicio.service";

@Component({
  selector: 'app-entidad-table',
  templateUrl: './entidad-table.component.html',
  styleUrls: ['./entidad-table.component.scss']
})
export class EntidadTableComponent implements OnInit {

    proceso: string = 'tiposervicio';
    @Input() lstTipoServicio: TipoServicioDto[];
    @Output() tipoServicioSelect = new EventEmitter();

    tipoServicio: TipoServicioDto;
    selectedTipoServicio: TipoServicioDto[];
    submitted: boolean;
    loading: boolean;
    exportColumns: any[];

    cols: any[];

    constructor(
        private tipoServicioService: TipoServicioService,
        private fileService: FileService,
        private appservice: AppService,
        private confirmationService: ConfirmationService
    ) {
    }

    ngOnInit() {
        this.construirTabla();
    }

    construirTabla() {
        this.cols = [
            {field: 'idTipoServicio', header: 'ID'},
            {field: 'nombreTipo', header: 'NOMBRE'},
            {field: 'detalleTipo', header: 'DETALLE'},
            {field: 'fechaCreacionTipo', header: 'FECHA'},
            {field: 'usuarioCreacion', header: 'USUARIO'},
            //{field: 'servicioListDto, header: 'ID'},
        ];
        this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
        this.loading = false;
    }

    clear(table: Table) {
        table.clear();
    }

    loadData(event) {
        this.loading = true;
        setTimeout(() => {
            this.tipoServicioService.getAll().subscribe(res => {
                this.lstTipoServicio = res;
                console.log(this.lstTipoServicio)
                this.loading = false;
            })
        }, 1000);
    }

    registrarNuevo() {
        this.tipoServicio = new TipoServicioDto();
        this.submitted = false;
    }

    deleteSelectedTipoServicio() {
        this.confirmationService.confirm({
            acceptLabel: 'Aceptar',
            rejectLabel: 'Cancelar',
            acceptButtonStyleClass: 'p-button-outlined p-button-rounded p-button-success',
            rejectButtonStyleClass: 'p-button-outlined p-button-rounded p-button-danger',
            message: 'Esta seguro de Eliminar los elementos seleccionados?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.eliminarTipoServicioSelected();
            }
        });
    }

    eliminarTipoServicioSelected() {

        let indexLista: number = 0;
        for (let i = 0; i < this.selectedTipoServicio.length; i++) {
            this.tipoServicioService.deleteObject(this.selectedTipoServicio[i].idTipoServicio).subscribe(
                data => {
                    indexLista++;

                    if (indexLista == this.selectedTipoServicio.length) {
                        this.lstTipoServicio = this.lstTipoServicio.filter(val => !this.selectedTipoServicio.includes(val));
                        this.selectedTipoServicio = null;
                        this.appservice.msgInfoDetail('error', 'Eliminación', 'Se han eliminado todos los datos seleccionados',)
                    }
                }
            );
        }


    }

    editTipoServicio(doc: TipoServicioDto) {
        this.tipoServicio = {...doc};
        this.tipoServicioSelect.emit(doc);
    }

    deleteTipoServicio(doc: TipoServicioDto) {
        this.confirmationService.confirm({
            acceptLabel: 'Aceptar',
            rejectLabel: 'Cancelar',
            acceptButtonStyleClass: 'p-button-outlined p-button-rounded p-button-success',
            rejectButtonStyleClass: 'p-button-outlined p-button-rounded p-button-danger',
            message: 'Esta seguro de eliminar ' + doc.idTipoServicio + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.eliminarTipoServicioSimple(doc);
            }
        });
    }

    eliminarTipoServicioSimple(doc: TipoServicioDto) {
        this.tipoServicioService.deleteObject(doc.idTipoServicio).subscribe(
            data => {
                this.lstTipoServicio = this.lstTipoServicio.filter(val => val.idTipoServicio !== doc.idTipoServicio);
                this.tipoServicio = new TipoServicioDto();
                this.appservice.msgDelete();
            }
        );
    }

    hideDialog() {
        this.submitted = false;
    }

    exportPdf() {
        this.appservice.exportPdf(this.exportColumns, this.lstTipoServicio, 'Tipo Servicios', "p");
    }

    exportExcel() {
        this.appservice.exportExcel(this.lstTipoServicio, 'Tipo Servicios');
    }

    descargarArchivo(fileName: string) {
        try {
            this.fileService.getFileByName(fileName, this.proceso);
        } catch (error) {
            this.appservice.msgInfoDetail('error', 'Error', 'Error al descargar el archivo');
        }
    }

}
