<template>
    <div class="table-responsive">
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" :item="item" v-for="(item, index) of alumnos" >
                    <td>{{item.nombre}}</td>
                    <td>{{item.apellido}}</td>
                    <td>{{item.email}}</td>
                    <td>
                    <slot name="item" :item="item" :index="index"  ></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

    name : 'listado-component',

    props : [
        'alumnos'
    ],

}
</script>

<style>

</style>