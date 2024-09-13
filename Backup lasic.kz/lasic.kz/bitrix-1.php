<?

require_once('bitr-aut.php');

/********************************************************************************************/

// POST processing
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $leadData = $_POST['DATA'];

  // get lead data from the form
  $postData = array(
	  'TITLE' => $leadData['TITLE'],    
	  'NAME' => $leadData['NAME'],
	  'PHONE_WORK' => $leadData['PHONE_WORK'],
	  'EMAIL_WORK' => $leadData['EMAIL_WORK'],	
	  'UF_CRM_1563441488' => $leadData['UF_CRM_1563441488'],	  
	  'COMMENTS' => $leadData['COMMENTS'],	  
	  'UF_CRM_1563267810' => $leadData['UF_CRM_1563267810'],
	  'UF_CRM_1563267819' => $leadData['UF_CRM_1563267819'],
	  'UF_CRM_1563267831' => $leadData['UF_CRM_1563267831'],
	  'UF_CRM_1563267844' => $leadData['UF_CRM_1563267844']	  
  );

  // append authorization data
  if (defined('CRM_AUTH'))
  {
    $postData['AUTH'] = CRM_AUTH;
  }
  else
  {
    $postData['LOGIN'] = CRM_LOGIN;
    $postData['PASSWORD'] = CRM_PASSWORD;
  }

  // open socket to CRM
  $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
  if ($fp)
  {
    // prepare POST data
    $strPostData = '';
    foreach ($postData as $key => $value)
      $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

    // prepare POST headers
    $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
    $str .= "Host: ".CRM_HOST."\r\n";
    $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
    $str .= "Content-Length: ".strlen($strPostData)."\r\n";
    $str .= "Connection: close\r\n\r\n";

    $str .= $strPostData;

    // send POST to CRM
    fwrite($fp, $str);

    // get CRM headers
    $result = '';
    while (!feof($fp))
    {
      $result .= fgets($fp, 128);
    }
    fclose($fp);

    // cut response headers
    $response = explode("\r\n\r\n", $result);

    $output = '<pre>'.print_r($response[1], 1).'</pre>';
  }
  else
  {
    echo 'Connection Failed! '.$errstr.' ('.$errno.')';
  }
}
else
{
  $output = '';
}

// HTML form
?>