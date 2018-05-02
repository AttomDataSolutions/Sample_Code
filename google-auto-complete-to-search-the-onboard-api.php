<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
	<meta charset="utf-8">
	<title>Using Google Auto-complete to search the Onboard API</title>
</head>
<body>
	<form method="post">
		<input id="pac-input" class="controls" name="ggogle_address" type="text" placeholder="Search Box">
		<input type="submit" name="submit" value="Submit"/>
	</form>
	<script>
	function initAutocomplete() {
		// Create the search box and link it to the UI element.
		var input = document.getElementById('pac-input');
		var searchBox = new google.maps.places.SearchBox(input);
	}
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&libraries=places&callback=initAutocomplete" async defer></script>
</body>
</html>

<?php
if(isset($_REQUEST['submit']) AND ($_REQUEST['submit'] =="Submit")){
	
	$suggestive_address = (isset($_REQUEST['ggogle_address']) && $_REQUEST['ggogle_address'] !="")?$_REQUEST['ggogle_address']:'4529 Winona Court, Denver CO United States 80212';
	$explodedAddressArr = explode(",", $suggestive_address);
	//Example value : 4529 Winona Court		
	$address1 = urlencode($explodedAddressArr[0]);
	//Example value : Denver CO United States 80212
	$address2 = urlencode($explodedAddressArr[0]);

	/*Once the address is separated, you can pass these parameters into the Onboard API using cURL hit.*/
	$url = "http://search.onboard-apis.com/propertyapi/v1.0.0/property/detailwithschools?address1=$address1&address2=$address2";
	
	$curl = curl_init();
	curl_setopt_array($curl, array(
	CURLOPT_URL => $url,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => array(
	  "accept: application/json",
	  "apikey: USE_YOUR_ONBOARD_API_KEY_HERE"
	),
	));
	$response = curl_exec($curl);
	$err = curl_error($curl);
	curl_close($curl);
	if($err){
	    echo '{"status": { "code": 999, "msg": "cURL Error #:" . $err."}}';
	}else{
	    echo $response;
	}
}	
?>