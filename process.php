<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validar campos (puedes hacer validaciones adicionales aquí)
    if (!empty($name) && !empty($phone) && !empty($email) && !empty($message)) {
        // Configuración del correo
        $to = "estemporadademango@gmail.com, mcneil30@gmail.com"; // Cambia esto a tu dirección de correo
        $subject = "Mensaje desde portfolio";
        $body = "Nombre: $name\nTeléfono: $phone\nCorreo: $email\n\nMensaje:\n$message";
        $headers = "From: $email";

        // Enviar el correo
        if (mail($to, $subject, $body, $headers)) {
            echo "Gracias por contactarnos, $name. Tu mensaje ha sido enviado con éxito.";
        } else {
            echo "Lo sentimos, hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.";
        }
    } else {
        echo "Por favor completa todos los campos.";
    }
} else {
    echo "Método no permitido.";
}
?>
