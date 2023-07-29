<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'ryusupov788@gmail.com'; // Replace with your receiving email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-to: $email\r\n";
    $email_subject = "New Message From Contact Form: $subject";
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message: $message\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Email sent successfully
        echo json_encode(array('status' => 'success', 'message' => 'Email sent successfully.'));
    } else {
        // Error sending email
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send email.'));
    }
}
