console.log("STARTUPS STARTUPS OMG STARTUPS");
$("body").children().each(function() {
    $(this).html($(this).html().replace(/startup|start-up/g,"business").replace(/Startups|Start-ups/g,"Businesses").replace(/startups|start-ups/g,"businesses").replace(/Startup/g,"Business"));
    console.log("WE OUT!");
});
