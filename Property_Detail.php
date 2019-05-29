<?php 

$curl = curl_init(); 

curl_setopt_array($curl, array( 
  CURLOPT_URL => "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO",
  CURLOPT_RETURNTRANSFER => true, 
  CURLOPT_ENCODING => "", 
  CURLOPT_MAXREDIRS => 10, 
  CURLOPT_TIMEOUT => 30, 
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, 
  CURLOPT_CUSTOMREQUEST => "GET", 
  CURLOPT_HTTPHEADER => array( 
    "accept: application/json", 
    "apikey: ", 
  ), 
)); 

$response = curl_exec($curl); 
$err = curl_error($curl); 

curl_close($curl); 

if ($err) { 
  echo "cURL Error #:" . $err; 
} else { 
  echo $response; 
}
