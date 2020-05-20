var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
function update(){
	var d = new Date();
	mon.innerHTML = 'Date : ' + d.getDate() + ' '+ month[d.getMonth()]+ ' ' + d.getYear()+ '<br' ;
	daz.innerHTML = 'Day : ' + day[d.getDay()]+ '<br>';
	hr.innerHTML = d.getHours() + "<br> Hours";
	min.innerHTML = d.getMinutes()+ "<br> Minutes";
	sec.innerHTML = d.getSeconds() + "<br> Seconds";

}
window.addEventListener("load",function(){
	setInterval(update , 1000);
});