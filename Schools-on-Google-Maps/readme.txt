==Show Attom school data on a Google Map==
After following this guide and integrating the API with Google Maps in your product, you will be able to display a pin overlay the map image to show where a school is located. The marker in this guide is the standard marker image from Google.

==Getting started==
1.	The very first step would be setting up your product to hit the API through cURL in order to pull back location information about the schools within overlapping attendance zones of the address entered.
a.	Here is an example API URL: https://search.onboard-apis.com/propertyapi/v1.0.0/property/detailwithschools?address1=4529%20Winona%20Court&address2=Denver%2C%20CO
2.	This API call returns an array containing property information along with specific details about schools in the applicable attendance zones around the property.
3.	The next step is to initialize the Google Map per the same requested address. You can find details about that process here google map api link. 
4.	Once you have completed the map initialization, then you need to set the marker pins per the latitude and longitude for the school that you want to display.
a.	Here is the example of set marker pins: “https://developers.google.com/maps/documentation/javascript/examples/marker-simple”
5.	Once you’re done with the marker pin setup, then this code should help you display the Attom school data on your Google map display for your product.

==Complete Code==

<? curl = curl_init(); 
	curl_setopt_array($curl, array( 
	CURLOPT_URL => "https://search.onboard-apis.com
	/propertyapi/v1.0.0/property/detailwithschools
	?address1=4529%20Winona%20Court&address2=Denver%2C%20CO",
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
?>

<script>
  var gmarkers = [];
  function initMap() {
	var locations = [<?php 
	if(!empty($final_array)) { 
	$ps = 1;
	foreach($final_array as $publicSchool){
		if ($publicSchool['InstitutionName'] !=''){ ?>
		['<?php echo $publicSchool['InstitutionName']; ?>',
		'<?php echo $publicSchool['geocodinglatitude']; ?>',
		'<?php echo $publicSchool['geocodinglongitude']; ?>',
		'<?php echo $ps; ?>','

		  
<?php echo $publicSchool
		   ['InstitutionName']; ?>
		  

		   <?php echo $publicSchool['school_address']
		   ['locationaddress']." ".
		   $publicSchool['school_address']['locationcity']
		   ." ".
		   $publicSchool['school_address']['stateabbrev']
		   .", ".
		   $publicSchool['school_address']['ZIP']; ?>

		  
<?php echo $publicSchool
		   ['distance']; ?>
		    Miles
'],
					<?php $ps++; ?>
				<?php } ?>		
			<?php } ?>
	<?php } ?>
	];

	var map = new google.maps.Map(document.getElementById
	('map'), 
	{
	  zoom: 12,
	  center: new google.maps.LatLng('<?php echo 
	  $sourceLocationLatitude; ?>',
	   '<?php echo $sourceLocationLongitude; ?>'),
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow();

	var marker, i;
	
	 marker = new google.maps.Marker({
		position: new google.maps.LatLng('<?php echo 
		$sourceLocationLatitude; ?>',
		 '<?php echo $sourceLocationLongitude; ?>'),
		map: map,
		animation: google.maps.Animation.DROP,
		icon: 'images/4.png'
	  });
		
		
	  gmarkers.push(marker);

	for (i = 0; i < locations.length; i++) { 
	  marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1],
		locations[i][2]),
		map: map,
		animation: google.maps.Animation.DROP,
		icon: 'images/1.png'
	  });
		
	  google.maps.event.addListener(marker, 'click', 
	  (function(marker, i) {
		return function() {
			infowindow.setContent(locations[i][4]); 
			infowindow.open(map, marker);
			for (var sm = 0; sm < gmarkers.length; 
			sm++) {
				if(sm!=0){
					gmarkers[sm].
					setIcon("images/1.png"); 
				}
			}
			marker.setIcon("images/2.png");
		}
	  })(marker, i)); 
	  gmarkers.push(marker);
	}
  }
function openInfoModal(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}	

$(function(){
	initMap();
});
</script>
