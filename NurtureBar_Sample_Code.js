<script>
	if( !window.AddressReportObj ){
		window.AddressReportObj = { 'scriptInited': false, 'widgets': [] };
	}
	var randomID = 'ar_lc_script_' + new Date().getTime();
	var thisScript = document.scripts[document.scripts.length - 1];
	thisScript.id = randomID;
	window.AddressReportObj.widgets.push({
		'settings': {
			'arwid': 'c4619846-82d5-4015-b627-a5e285cf8c8b',
			'arwsc': '29312afb-9469-43e7-be96-706dbfeac772',
			'type': 'default',
			'address': '', // pass in target address
			'iab': 'inline',
			'formbaseurl': 'https://demopartner.addressreport.com',
			'elemid': randomID
		}
	});
	if( window.AddressReportObj.scriptInited != true ){
		window.AddressReportObj.scriptInited = true;
		var s = document.createElement('script');
		s.src = 'https://cdn-addressreport.netdna-ssl.com/widget/ar-lc-widget.js?version=d3c68d91-e102-4d92-901a-17bd9d9db0da';
		s.async = true;
		var parent = thisScript.parentElement;
		parent.insertBefore( s, thisScript.nextSibling );
	}
</script>
