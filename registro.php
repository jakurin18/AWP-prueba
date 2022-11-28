<?php
    
    include("db.php");


    if(isset($_POST['register'])) 
    {
    	
    		$name = trim($_POST['name']);
            $number = trim($_POST['number']);
    		$email = trim($_POST['email']);
    		$mensaje = trim($_POST['mensaje']);

    		$consulta = "INSERT INTO usuarios (name, number, email, mensaje) VALUES ('$name', '$number', '$email', '$mensaje')";

    		$resultado = mysqli_query($conex, $consulta);


            if ($resultado) 
            { 
            	?>
                	<h3 class="ok">Registro creado con Exito!!!</h3>
            	<?php 
      		} 
        	else 
        	{ 
        		?>
                	<h3 class="bad">Ocurrio un problema con el registro</h3>
	            <?php 
	        }
     

    } 

?>