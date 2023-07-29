<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'Portfolio';
    $email_subject = 'New Message From Portfolio Contact Form';
    $email_body = "Name: $name.\n".
                  "Email: $email.\n".
                  "Subject: $subject.\n".
                  "Message $message.\n";
    $to = "ryusupov788@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: index.html");
?>