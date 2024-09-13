<?
// CRM server conection data
define('CRM_HOST', 'glazolik.bitrix24.kz'); // your CRM domain name
define('CRM_PORT', '443'); // CRM server port
define('CRM_PATH', '/crm/configs/import/lead.php'); // CRM server REST service path

// CRM server authorization data
define('CRM_LOGIN', 'info@glazolik.kz'); // login of a CRM user able to manage leads
define('CRM_PASSWORD', 'QPOF8K$Puvlx'); // password of a CRM user
// OR you can send special authorization hash which is sent by server after first successful connection with login and password
//define('CRM_AUTH', 'e54ec19f0c5f092ea11145b80f465e1a'); // authorization hash
