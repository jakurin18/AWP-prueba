<?php

// Servidor, Usuario de la BD, Contraseña del usuario, Nombre de la BD


$conex = mysqli_connect("localhost", "root", "", "contactanos");
     
     if(mysqli_connect_errno()){
     	echo 'CONECTION FAILED: ', mysqli_connect_error();
     	exit();
     }


?>