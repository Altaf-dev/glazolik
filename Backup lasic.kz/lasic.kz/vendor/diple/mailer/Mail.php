<?php
require_once 'class.phpmailer.php';

class Mail
{
    public static function sendMail($host, $port, $from, $password, $fromName, $to, $subject, $message, $file = null, $secure = null)
    {
        $Mail = new PHPMailer();
        $Mail->IsSMTP(); // Use SMTP
        $Mail->Host = $host; // Sets SMTP server
        $Mail->SMTPAuth = TRUE; // enable SMTP authentication
        $Mail->SMTPDebug = 2;
        $Mail->Port = $port; // set the SMTP port
        $Mail->Username = $from; // SMTP account username
        $Mail->Password = $password; // SMTP account password
        $Mail->Priority = 3; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
        $Mail->CharSet = 'UTF-8';
        $Mail->Encoding = '8bit';
        $Mail->Subject = $subject;
        $Mail->ContentType = 'text/html; charset=utf-8\r\n';
        $Mail->From = $from;
        $Mail->FromName = $fromName;
        $Mail->WordWrap = 900; // RFC 2822 Compliant for Max 998 characters per line

        if ($secure != null) {
            $Mail->SMTPSecure = $secure;
        }

        if ($file != null) {
            $Mail->addAttachment($file);
        }

        $Mail->AddAddress($to); // To:
        $Mail->isHTML(true);
        $Mail->Body = $message;
        $Mail->Send();
        $Mail->SmtpClose();

        if ($Mail->IsError()) { // ADDED - This error checking was missing
            return FALSE;
        } else {
            return TRUE;
        }
    }
}