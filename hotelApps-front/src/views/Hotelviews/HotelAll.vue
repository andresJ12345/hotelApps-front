<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">nombre</th>
              <th scope="col">nit</th>
              <th scope="col">ciudad</th>
              <th scope="col">direccion</th>
              <th scope="col">numHabitaciones</th>
              <th scope="col">acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="this.cargando">
              <td colspan="6"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="hotel in hoteles" :key="hotel.id">
              <td >{{ hotel.nombre }}</td>
              <td >{{ hotel.nit }}</td>
              <td >{{ hotel.ciudad }}</td>
              <td >{{ hotel.direccion }}</td>
              <td >{{ hotel.numHabitaciones }}</td>
              <td >Acciones</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script >


import axios from 'axios';

export default {
  data(){
    return{
      hoteles:null,
      cargando:true
    }
  },
  mounted()
  {
    this.AllHotel();
  },
  methods:{
    AllHotel()
    {
      this.cargando=true;
      axios.get('http://127.0.0.1:8000/api/v1/Hotel').then(
        res=>{
          this.hoteles=res.data;
          this.cargando=false;
        }
      );
    }
  }
}
</script>
