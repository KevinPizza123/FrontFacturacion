import {Component, Input, OnInit} from '@angular/core';
import {EntidadDto} from "../../model/EntidadDto";
import {ResponseGenerico} from "../../../../../_dto/response-generico";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../../../../_service/app.service";
import {TokenService} from "../../../../../_service/token.service";
import {BreadcrumbService} from "../../../../../_service/utils/app.breadcrumb.service";
import {TipoServicioService} from "../../services/tiposervicio.service";
import {severities} from "../../../../../_enums/constDomain";
import {TokenDto} from "../../../../../_dto/token-dto";

@Component({
    selector: 'app-entidad',
    templateUrl: './entidad.component.html',
    styleUrls: ['./entidad.component.scss']
})
export class EntidadComponent implements OnInit {

    @Input() tipoServicio: EntidadDto;

    proceso: string = 'tipoServicio'

    response: ResponseGenerico
    formTipoServicio: FormGroup
    listTipoServicio: EntidadDto[] = [];

    token: TokenDto;


    constructor(
        public appService: AppService,
        private formBuilder: FormBuilder,
        private tokenService: TokenService,
        private breadcrumbService: BreadcrumbService,
        private tipoService: TipoServicioService,
    ) {
        this.breadcrumbService.setItems([{label: 'Tipo Servicio'}]);
    }

    ngOnInit() {
        this.iniciarForms()
        this.llenarListTipoServicio()

    }

    iniciarForms() {
        this.formTipoServicio = this.formBuilder.group({
            idTipoServicio: new FormControl('',),
            nombreTipo: new FormControl('', Validators.compose([Validators.required])),
            detalleTipo: new FormControl('', Validators.compose([Validators.required])),
            fechaCreacionTipo: new FormControl('', Validators.compose([Validators.required])),
            usuarioCreacion: new FormControl('', Validators.compose([Validators.required])),
            //servicioListDto: new FormControl('', Validators.compose([Validators.required])),
        });

        this.token = JSON.parse(this.tokenService.getResponseAuth());
        this.f.usuarioCreacion.setValue(this.token.id)
        this.f.fechaCreacionTipo.setValue(new Date())


    }

    get f() {
        return this.formTipoServicio.controls;
    }

    setSeleccionado(obj) {
        this.tipoServicio = obj;
        this.formTipoServicio = this.formBuilder.group(this.tipoServicio);
        // this.f.fechaCreacionServicioLab.setValue(new Date(this.Servicio.fechaCreacionServicioLab).toLocaleString())
    }

    /**
     * Métodos para funcionalidad de la pagina
     * **/
    async llenarListTipoServicio() {
        await this.tipoService.getAll().subscribe({
                next: data => {
                    this.listTipoServicio = data.listado
                },
                complete: () => {
                    this.appService.msgInfoDetail(severities.INFO, 'INFO', 'Datos Cargados exitosamente')
                },
                error: error => {
                    this.appService.msgInfoDetail(severities.ERROR, 'ERROR', error.error)
                }
            }
        );
    }

    guardar() {

        console.log('DATOS TIPO SERVICIO ANTES DE GUARDAR. ', this.formTipoServicio.value)
        if (this.formTipoServicio.invalid) {
            this.appService.msgInfoDetail('warn', 'Verificación', 'Verificar los Datos a Ingresar')
            return
        } else {
            if (!this.formTipoServicio.value.idServicio)
                //this.f.fechaCreacionTipo.setValue(new Date())

            this.tipoServicio = this.formTipoServicio.value;

            this.tipoService.saveObject(this.tipoServicio).subscribe({
                next: (data) => {
                    this.response = data;
                    if (this.response.codigoRespuestaValue == 200) {
                        if (!this.tipoServicio.idTipoServicio) {
                            this.appService.msgCreate()
                        } else {
                            this.appService.msgUpdate()
                        }

                        this.setearForm();
                        this.llenarListTipoServicio();
                    }

                },
                complete: () => {
                },
                error: error => {
                }

            })
        }
    }

    setearForm() {
        this.formTipoServicio.reset();
        this.iniciarForms();
    }

    cancelar() {
        this.setearForm();
        this.appService.msgInfoDetail('info', '', 'Acción Cancelada')
    }

}
