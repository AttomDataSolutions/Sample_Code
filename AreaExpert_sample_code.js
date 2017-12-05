
<div style="display:none;" id="add_report_widget" data-title="Find out if a home or <br>neighborhood is right for you" data-sub_title="Get a complete report on any property or community"></div>
<script>
	if( !window.AddressReportObj ){
		window.AddressReportObj = { 'scriptInited': false, 'widgets': [] };
	}
	var randomID = 'ar_lc_script_' + new Date().getTime();
	var thisScript = document.scripts[document.scripts.length - 1];
	thisScript.id = randomID;
	window.AddressReportObj.widgets.push({
		'settings': {
			'arwid': 'a55e6392-faed-4568-96ec-96aa9fe7b423',
			'arwsc': '3164b7a6-91b4-4a89-b345-befccd39ded6',
			'type': 'default',
			'address': '', // pass in target address
			'iab': 'inline2',
			'formbaseurl': 'https://demopartner-dot-qa-dot-rentenna3.appspot.com',
			'elemid': randomID
		}
	});
	if( window.AddressReportObj.scriptInited != true ){
		window.AddressReportObj.scriptInited = true;
		var s = document.createElement('script');
		s.src = 'https://demopartner-dot-qa-dot-rentenna3.appspot.com/resource/widget/ar-lc-widget.js?version=0e09ea89-236b-4f6f-910c-0af7b0516e57';
		s.async = true;
		var parent = thisScript.parentElement;
		parent.insertBefore( s, thisScript.nextSibling );
	}
</script>
