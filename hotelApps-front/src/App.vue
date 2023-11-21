<template>
  <div>
    <Header />
    <main>
      <HotelTable :hotels="hotelList" />
      <!-- Agrega otros componentes o contenido aquí -->
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import HotelTable from '@/components/HotelTable.vue';

export default {
  components: {
    Header,
    HotelTable
  },
  data() {
    return {
      hotelList: [
        { nombre: 'Hotel A', nit: '123456', ciudad: 'Ciudad A', direccion: 'Dir A', habitaciones: 50 },
        { nombre: 'Hotel B', nit: '789012', ciudad: 'Ciudad B', direccion: 'Dir B', habitaciones: 30 },
        // Agrega más hoteles según tu necesidad
      ]
    };
  }
}
</script>

<style scoped>
/* Estilos específicos de la vista Home */
main {
  padding: 2rem;
}
</style>