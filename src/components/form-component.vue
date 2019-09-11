<template>
  <div>
        <div class="form-group">
            <label>Nombre</label>
            <input v-model="alumno.nombre" type="text" class="form-control" placeholder="Ingresar el nombre del alumno" >
        </div>
        <div class="form-group">
            <label>Apellidos</label>
            <input v-model="alumno.apellido" type="text" class="form-control" placeholder="Ingresar los apellidos del alumno" >
        </div>
        <div class="form-group">
            <label>Email</label>
            <input v-model="alumno.email" type="email" class="form-control" placeholder="Ingresar el email del alumno">
        </div>
    </div>
</template>

<script>
export default {
    
    name : "form-component",

    props : [
        'alumno'
    ],

}
</script>

<style>

</style>