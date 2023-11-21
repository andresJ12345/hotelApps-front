<template>
  <div>
    <h2>Listado de Hoteles</h2>
    <table>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>NIT</th>
          <th>CIUDAD</th>
          <th>DIRECCIÓN</th>
          <th>HABITACIONES</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hotel, index) in hotels" :key="index">
          <td>{{ hotel.nombre }}</td>
          <td>{{ hotel.nit }}</td>
          <td>{{ hotel.ciudad }}</td>
          <td>{{ hotel.direccion }}</td>
          <td>{{ hotel.habitaciones }}</td>
          <td>
            <!-- Agrega aquí botones u opciones para las acciones -->
            <button @click="editarHotel(index)">Editar</button>
            <button @click="eliminarHotel(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    hotels: Array // Recibe la lista de hoteles como propiedad
  },
  methods: {
    editarHotel(index) {
      // Lógica para editar el hotel (puedes emitir un evento o realizar otra acción)
      console.log('Editar hotel:', this.hotels[index]);
    },
    eliminarHotel(index) {
      // Lógica para eliminar el hotel (puedes emitir un evento o realizar otra acción)
      console.log('Eliminar hotel:', this.hotels[index]);
    }
  }
}
</script>

<style scoped>
/* Estilos específicos del componente HotelTable */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #007BFF;
  color: white;
}
</style>