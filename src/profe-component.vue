<template>
  <div>
      <catalogo-component>
          <template slot="header">
              <div class="row">
                  <div class="col-md-10">
                      <h1>CRUD de profesores</h1>
                  </div>
                  <div class="col-md-2">
                      <button @click="abrirModal()" class="btn btn-primary btn-block">Crear <i class="fa fa-plus-circle"></i></button>
                  </div>
              </div>
          </template>
          <template slot="body">
              <div class="row">
                  <div class="col-md-12">
                      <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(profesor, index) of profesoresLista" :key="index" >
                                    <td>{{ profesor.nombre }}</td>
                                    <td>{{ profesor.apellido }}</td>
                                    <td>{{ profesor.email }}</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm mr-1"> <i class="fa fa-pencil"></i> </button>
                                        <button class="btn btn-primary btn-sm" ><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                  </div>
              </div>
          </template>
          <template slot="footer">

          </template>
      </catalogo-component>
      <modal-component>
            <template slot="titulo" >
                <h3>Crear profesor</h3>
            </template>
            <template slot="contenido" >
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            
                        </div>
                    </div>
                </div>
            </template>
            <template slot="botones" ></template>
        </modal-component>
  </div>
</template>

<script>

import $ from 'jquery'
import catalogoComponent from './components/catalogo-component'
import modalComponent from './components/modal-component'

export default {

    name : 'profe-component',

    components : {
        catalogoComponent,
        modalComponent
    },

    data(){
        return {

            profesoresLista : [
                {
                    nombre : "Francisco",
                    apellido : "Montejo",
                    email : "francismon@hotmail.com"
                },{
                    nombre : "Maria",
                    apellido : "Luisa",
                    email : "marialuisa1@hotmail.com"
                },{
                    nombre : "Wade",
                    apellido : "Winston",
                    email : "wadewins@gmail.com"
                },
            ],

        }
    },

    methods : {

        abrirModal(){

            $("#modal").modal();

        }

    }

}
</script>
