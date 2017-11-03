<?php 

$request = new HttpRequest(); 
$request->setUrl('https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail'); 
$request->setMethod(HTTP_METH_GET); 

$request->setQueryData(array( 
  'address1' => '4529 Winona Court', 
  'address2' => 'Denver, CO' 
)); 

$request->setHeaders(array( 
  'apikey' => '870e26a0ffcc29cbb6b8bc86012a8c28', 
  'accept' => 'application/json' 
)); 

try { 
  $response = $request->send(); 

  echo $response->getBody(); 
} catch (HttpException $ex) { 
  echo $ex; 
}
