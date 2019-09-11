<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Crud's</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li  :key="index" v-for="(apartado,index) of listaApartados" class="nav-item">
                        <a style="cursor:pointer" @click="cambiar(apartado)" class="nav-link">{{ apartado.texto }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

    name : "navbar-component",

    data(){
        return{

            apartadoActual : 'crud_alumno',

            listaApartados : [
                {
                    nombre : "alumno-component",
                    texto : "Alumnos"
                },
                {
                    nombre : "profe-component",
                    texto : "Profesores"
                },
            ],

        }
    },

    methods : {

        cambiar(apartado){

            this.$emit('cambiar',apartado);

        }

    }


}
</script>
