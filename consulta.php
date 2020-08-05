
<?php
$name = $_POST['name']; // el valor dentro de las '' debe coincidir con el valor de name de cada input
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$destino = "aaaa@aaaa.com"; // la direccion de correo a donde quiero que llegue el mail

$asunto = "Consulta enviada desde https://......."; // titulo/asunto del mail

$cuerpo = "Nombre: ".$name."\r\n". "Phone: ".$phone."\r\n"."Mail: ".$email."\r\n"."Mensaje: ".$message;

$remitente = "From: $name $phone <$email>"; // direccion de respuesta

mail ($destino, $asunto, $cuerpo, $remitente); // 
?>
