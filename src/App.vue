<template>
  <div id="app">
    <navbar-component @cambiar="cambiarApartado" ></navbar-component>
    <div class="container">
        <component class="mt-5" :is="apartado"></component>
    </div>
  </div>
</template>

<script>

import alumnoComponent from './alumno-component'
import profeComponent from './profe-component';
import navbarComponent from './navbar-component'

export default {
  name: 'app',
  components: {
    alumnoComponent,
    profeComponent,
    navbarComponent
  },
  
  data(){
    return{

      apartado : "alumno-component"

    }
  },
  
  methods : {

    cambiarApartado(apartado){

      console.log(apartado.nombre);
      this.apartado = apartado.nombre;

    }

  }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
