<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>SENT MESSAGE</title>

<style type="text/css">
body {
	background: #fff; /* Old browsers */
	background: -moz-linear-gradient(left, #232526 0%, #fff 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(left, #232526 0%,#fff 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to right, #232526 0%,#fff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#741d51', endColorstr='#e44e52',GradientType=1 ); /* IE6-9 */

	text-align: center;
}

.resp a {
    font-size: 24px;
    text-decoration: none;
    padding: 15px 40px;
	border-radius: 6px;
	border: 1.5px solid #000000;
	color: #ffffff;
	display: inline-block;
}

p {
    color: #ffffff;
    margin-top: 200px;
    margin-bottom: 50px;
    font-size: 30px;
    
}
</style>
</head>

<body>
<?php
$name = $_POST['name']; // el valor dentro de las '' debe coincidir con el valor de name de cada input
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$destino = "yourmail@mail.com"; // la direccion de correo a donde quiero que llegue el mail

$asunto = "Consulta enviada desde https://yoursite.com/"; // titulo/asunto del mail

$cuerpo = "Nombre: ".$name."\r\n". "Phone: ".$phone."\r\n"."Mail: ".$email."\r\n"."Mensaje: ".$message;

$remitente = "From: $name $phone <$email>"; // direccion de respuesta

mail ($destino, $asunto, $cuerpo, $remitente); // 
?>

<p>Thanks for your message !</p>
<div class="resp">
<a  href="https://yoursite.com/"> BACK TO HOME </a>
</div>

</body>
</html>