
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="ruta_de_tu_imagen.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-top">
        Tu Sitio Web
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <router-link class="nav-link" to="/">Inicio <span class="sr-only">(actual)</span></router-link>
                
            </li>
            <li class="nav-item">
               <router-link class="nav-link" to="/HotelAll">Hoteles</router-link>
                
            </li>
            <!-- Agrega más elementos según sea necesario -->
        </ul>
    </div>
</nav>
 <div class="container-fluid">
   <RouterView />
 </div>
 
</template>

