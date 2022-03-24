/* Set radius for all circles */
var r = 30;
var circles = document.querySelectorAll('.circle');
var total_circles = circles.length;
for (var i = 0; i < total_circles; i++) {
    circles[i].setAttribute('r', r);
}
 
/* Set meter's wrapper dimension */
var meter_dimension = (r * 2) + 100;
var wrapper = document.querySelector("#wrapper");
wrapper.style.width = meter_dimension + "";
wrapper.style.height = meter_dimension + "";
 
/* Add strokes to circles  */
var cf = 2 * Math.PI * r;
var semi_cf = cf / 2;
var semi_cf_1by3 = semi_cf / 3;
var semi_cf_2by3 = semi_cf_1by3 * 2;
// document.querySelector("#outline_curves")
//     .setAttribute("stroke-dasharray", semi_cf + "," + cf);
// document.querySelector("#low")
//     .setAttribute("stroke-dasharray", semi_cf + "," + cf);
// document.querySelector("#avg")
//     .setAttribute("stroke-dasharray", semi_cf_2by3 + "," + cf);
// document.querySelector("#high")
//     .setAttribute("stroke-dasharray", semi_cf_1by3 + "," + cf);
// document.querySelector("#outline_ends")
//     .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));
// document.querySelector("#mask")
//     .setAttribute("stroke-dasharray", semi_cf + "," + cf);
 
/* Bind range slider event*/
var slider1 = document.querySelector("#slider1");
var slider2 = document.querySelector("#slider2");
var slider3 = document.querySelector("#slider3");
var slider4 = document.querySelector("#slider4");
var slider5 = document.querySelector("#slider5");
var slider6 = document.querySelector("#slider6");
var slider7 = document.querySelector("#slider7");
var slider8 = document.querySelector("#slider8");

var lbl = document.querySelector("#lbl");

var mask1 = document.querySelector("#mask1");
var mask2 = document.querySelector("#mask2");
var mask3 = document.querySelector("#mask3");
var mask4 = document.querySelector("#mask4");
var mask5 = document.querySelector("#mask5");
var mask6 = document.querySelector("#mask6");
var mask7 = document.querySelector("#mask7");
var mask8 = document.querySelector("#mask8");

var meter_needle1 =  document.querySelector("#meter_needle1");
var meter_needle2 =  document.querySelector("#meter_needle2");
var meter_needle3 =  document.querySelector("#meter_needle3");
var meter_needle4 =  document.querySelector("#meter_needle4");
var meter_needle5 =  document.querySelector("#meter_needle5");
var meter_needle6 =  document.querySelector("#meter_needle6");
var meter_needle7 =  document.querySelector("#meter_needle7");
var meter_needle8 =  document.querySelector("#meter_needle8");
 
function range_change_event1() {
    var percent = slider1.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask1.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle1.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider1.addEventListener("input", range_change_event1);

function range_change_event2() {
    var percent = slider2.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask2.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle2.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider2.addEventListener("input", range_change_event2);

function range_change_event3() {
    var percent = slider3.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask3.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle3.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider3.addEventListener("input", range_change_event3);

function range_change_event4() {
    var percent = slider4.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask4.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle4.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider4.addEventListener("input", range_change_event4);

function range_change_event5() {
    var percent = slider5.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask5.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle5.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider5.addEventListener("input", range_change_event5);

function range_change_event6() {
    var percent = slider6.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask6.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle6.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider6.addEventListener("input", range_change_event6);

function range_change_event7() {
    var percent = slider7.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask7.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle7.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider7.addEventListener("input", range_change_event7);

function range_change_event8() {
    var percent = slider8.value;
    var meter_value = semi_cf - ((percent * semi_cf) / 100);
    mask8.setAttribute("stroke-dasharray", meter_value + "," + cf);
    meter_needle8.style.transform = "rotate(" + 
        (270 + ((percent * 180) / 100)) + "deg)";
    lbl.textContent = percent + "%";
}
slider8.addEventListener("input", range_change_event8);