<template>
  <div>
        <catalogo-component>
            <template slot="header">
                <div class="row">
                    <div class="col-md-10">
                        <h1>CRUD de alumnos</h1>
                        <div class="form-group form-inline mt-2">
                            <input v-model="busqueda" type="text" class="form-control mr-2" placeholder="Buscar por nombre y apellido" >
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button @click="abrirModal()" class="btn btn-primary btn-block">Crear <i class="fa fa-plus-circle"></i> </button>
                    </div>
                </div>
            </template>
            <template slot="body">
                <div class="row">
                    <div class="col-md-12">
                        <listado-component :alumnos="listaBusquedaAlumnos">
                            <template v-slot:item="{item, index}"  >
                                <button @click="VerAlumno(item)" class="btn btn-primary btn-sm mr-1"> <i class="fa fa-pencil"></i> </button>
                                <button @click="eliminar(index)" class="btn btn-primary btn-sm" ><i class="fa fa-trash"></i></button>
                            </template>
                        </listado-component>
                    </div>
                </div>
            </template>
            <template slot="footer">
            
            </template>
        </catalogo-component>

        <modal-component>
            <template slot="titulo">
                <h1 v-if="!editar">Nuevo alumno</h1>
                <h1 v-else>Editar alumno</h1>
            </template>
            <template slot="contenido">
                <form-component :alumno="alumno" ></form-component>
            </template>
            <template slot="botones">
                <button v-if="!editar" @click="agregar()" class="btn btn-primary">Agregar</button>
                <button v-else  class="btn btn-primary">Guardar cambios</button>
            </template>
        </modal-component>
    </div>
</template>

<script>

import $ from 'jquery'
import catalogoComponent from './components/catalogo-component'
import formComponent from './components/form-component'
import modalComponent from './components/modal-component'
import listadoComponent from './components/listado-component'

export default {

    name : "alumno-component",

    components : {
        catalogoComponent,
        formComponent,
        modalComponent,
        listadoComponent
    },

    data(){
        return{

            editar : false,

            alumno : {
                nombre : "",
                email : "",
                apellido : ""
            },

            listaAlumnos: [
                {
                    nombre: "Ricardo",
                    apellido: "Gomez",
                    email: "bengomezperez@gmail.com"
                },
                {
                    nombre: "German",
                    apellido: "Duzl",
                    email: "germandz@hotmail.com"
                }, {
                    nombre: "Frida",
                    apellido: "Bouquet",
                    email: "frimarz@hotmail.com"
                }, {
                    nombre: "Lucero",
                    apellido: "Loeza",
                    email: "luz01@yahoo.com"
                },
            ],

            busqueda : "",

        }
    },

    methods: {

        limpiarModelo(){

            this.alumno.nombre = "";
            this.alumno.apellido = "";
            this.alumno.email = "";
            this.alumno.id = ""

        },

        abrirModal() {

            if(this.editar){

                this.editar = false;
                this.limpiarModelo();

            }

            $("#modal").modal();

        },

        VerAlumno(alumno) {

            this.alumno.nombre = alumno.nombre;
            this.alumno.apellido = alumno.apellido;
            this.alumno.email = alumno.email;
            
            this.editar = true;

            $("#modal").modal();

        },

        eliminar(index){

            console.log(index);
            this.listaAlumnos.splice(index,1);

        },

        agregar() {

            let item = {
                nombre: this.alumno.nombre,
                apellido: this.alumno.apellido,
                email: this.alumno.email
            };

            this.listaAlumnos.push(item);

        },

        guardarCambios(){

            let item = {

            };

        }

    },

    created() {



    },

    computed : {

        listaBusquedaAlumnos(){

            let busqueda = this.busqueda;

            return this.listaAlumnos.filter((alumno) => {

                return alumno.nombre.match(busqueda);

            }); 

        }

    }

}
</script>

<style>

</style>