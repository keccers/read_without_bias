javascript:
(function(){
	var v = "2.1.0";
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			console.log("STARTUPS STARTUPS OMG STARTUPS");
			$("body").children().each(function() {
			    $(this).html($(this).html().replace(/Startups|Start-ups/g,"Businesses").replace(/startups|start-ups/g,"businesses").replace(/Startup/g,"Business").replace(/startup|start-up/g,"business"));
			    console.log("WE OUT!");
			});
		})();
	}
})();