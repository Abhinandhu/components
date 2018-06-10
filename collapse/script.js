$(document).ready(()=>{

$(".collapse").hide();
$(".collapse2").hide();

$(".click").click(()=>{
	$(".collapse").slideToggle("fast");

});
$(".click2").click(()=>{
	$(".collapse2").slideToggle("fast");

});

})