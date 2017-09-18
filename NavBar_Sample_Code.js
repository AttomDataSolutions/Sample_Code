<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
  $onboardJquery = jQuery.noConflict();
  
  $onboardJquery( document ).ready(function() {
        var frame_url = window.parent.location.origin;
        var src = "http://onboard.rocks/admin/script.php?customer_id=COMR68394&address1=45 Wall Street&address2=New York, NY&zip=ZI10005&frame_url="+frame_url;
        $onboardJquery("#iframe_id").attr("src",src);
    });
</script>
<iframe  width="100%" id="iframe_id" style="height: 120px;" frameborder="0" scrolling="auto" src="" allowfullscreen="true"></iframe>
<script type="text/javascript">
var isMobile = {
				Android: function() {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function() {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function() {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function() {
					return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function() {
					return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
				},
				any: function() {
					return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};		
var iframeMobHeight = "120px";
var iframeMobOpenHeight = "750px";

if( isMobile.any() ) {
	iframeMobHeight = "170px";
	var iframeMobOpenHeight = "350px";
	$onboardJquery("#iframe_id").css("height",iframeMobHeight);
}
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
eventer(messageEvent,function(e) {
	if(e.data=="open"){
	   $onboardJquery("#iframe_id").css("height",iframeMobOpenHeight);
	}else if(e.data=="close"){
		 $onboardJquery("#iframe_id").css("height",iframeMobHeight);
	}else if(e.data=="closeOpenTab"){
		 $onboardJquery("#iframe_id").css("height",iframeMobOpenHeight);
	}
	e.data= "";
},false);
$onboardJquery("html").on("click","body",function(){
var iframeCustom = document.getElementById("iframe_id");
// get the window associated with that iframe
var iWindow = iframeCustom.contentWindow;
iWindow.postMessage("closeOnBgClick","*");
});
</script>
