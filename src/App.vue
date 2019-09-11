<template>
  <div class="container" id="app">
    <alumno-component   class="mt-5" ></alumno-component>
  </div>
</template>

<script>

import alumnoComponent from './alumno-component';


export default {
  name: 'app',
  components: {
    alumnoComponent
  }
}
</script>
