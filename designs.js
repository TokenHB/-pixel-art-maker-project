// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//console.log("test");

// start up grid
makeGrid( 16 , 16 );
var chosenColor = "#000000";
var previousColor;
var mouseDown = false;

$( "#sizePicker" ).submit(function( event ) {

var gridHeight= $("#input_height").val();
var gridWidth = $("#input_width").val();
console.log("gridHeight = " + gridHeight);
console.log("gridWidth = " + gridWidth);

  ///console.log( $( this ).serializeArray() );


console.log("mouseDown = " +mouseDown);
makeGrid( gridHeight , gridWidth );
event.preventDefault();
});



$( "#colorPicker" ).change(function( event ) {

 chosenColor = $(this).val();

console.log(chosenColor);
event.preventDefault();
//return chosenColor;
});



//when clicked(), perm set the color and previous color to the chosen color
/*
$( 'table' ).on( 'click', 'td', function() {
  //$( 'table' ).on( 'click', 'td', function() { //this worked on clicks only
//$( "tbody" ).find('td').click(function() {
    //$( this ).css( "color", "chosenColor" );
  $(this).attr("bgcolor", chosenColor);
  console.log("clicked");
  previousColor = chosenColor;

});
*/

//click to set color and hold to continue to set color
$( 'table' ).on( 'mousedown' , 'td', function() {
  mouseDown=true;
  console.log("mouseDown = " +mouseDown);

  $(this).attr("bgcolor", chosenColor);
  console.log("clicked");
  previousColor = chosenColor;
});


//once mouse is no longer clicked, set the variable to false
$( 'table' ).on( 'mouseup'  , 'td', function() {
  mouseDown=false;
  console.log("mouseDown = " +mouseDown);
});


/*
if(mouseDown){
  $(this).attr("bgcolor", chosenColor);
  console.log("clicked");
  previousColor = chosenColor;
}
else {
  if (previousColor == undefined){
    previousColor = "#ffffff";}

    $(this).attr("bgcolor", previousColor);
}
*/


// set and temp set the color of the cell to the chosen color depending on the mouse button
$( 'table' ).on('mouseenter', 'td',function() {
  if(mouseDown){    // if the mouse is down when entering the cell - set the color
    $(this).attr("bgcolor", chosenColor);
    console.log("clicked");
    previousColor = chosenColor;
  }
  else{  //if not held down, then temp set the color and set the previous color
console.log("mouseEnter");
previousColor = $(this).attr("bgcolor");
if (previousColor == undefined){
  //  previousColor = $(this).attr("bgcolor");
      previousColor = "#ffffff";
  }
  console.log("enter previousColor = " +previousColor);
$(this).attr("bgcolor", chosenColor);
}
});




 //change the color back to what it was before entering the cell
$( 'table' ).on('mouseleave', 'td',function() {
  console.log("leave previousColor = " +previousColor);
  if (previousColor == undefined){
    previousColor = "#ffffff";}

    $(this).attr("bgcolor", previousColor);
  console.log("previousColor = " +previousColor);
});


//now i want a function where it paints when the mosue is held down








//bgcolor="#FF0000"
//<td bgcolor="#FF0000">January</td>

//1$( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" );

function makeGrid( gridHeight , gridWidth ) {

// Your code goes here!

/*  //this check didnt work
if($(".grid")){    // if it finds and existing grid - remove it
  $(".grid").remove();
 }
else {   //else no grid - add a new DOM
//$("body").append("<div class = 'grid'></div>");
$("#pixel_canvas").append("<div class = 'grid'></div>");
}

*/

//$("#pixel_canvas").append("<div class = 'grid'></div>");
$("tbody").remove(); // if there is a previous table, remove it  - make a fresh canvas if not, the new table will be added to the bottom of the previous one

var rowPxs;

for (var gridH =0; gridH < gridHeight; gridH++ ){

rowPxs ="<tr>";  // create a new row - add the header tag

 for (var gridW =0; gridW < gridWidth; gridW++ ){

//place pixel object
// i need to find out how to change the placement of pbjects..
// so say its a 20x20 Pixel .. i would need to :
//currect location or gridH or gridV +21px .. this would leave a 1 px border
// between dots.. i could use the gridh or v to multiply by 34...
// so if gridH = 0.. then 34x0 = 0.. if its 1 then 34 x 1 = 34..  2 then its 68
// i think i can just set the pixel divs o a set size when i add them
//same as when i changed the others in css.. i can hard cose the size i want
// when adding the div .. <div class ="pizel" hight: 34px  wide : 34px//


//var pxName = "px" + gridH +gridW;
// add a "<div call = pxName width="200" height="200" style="border:1px solid"></div>" to the grid at the x/y above

//html tables:

/*
<table style="width:100%">
<tr>   //this marks a new row
  <td>Jill</td>   //these are the collumbs
  <td>Smith</td>
  <td>50</td>
</tr>
<tr>
  <td>Eve</td>
  <td>Jackson</td>
  <td>94</td>
</tr>
</table>


 var row = $("<tr/>");

 row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));

*/

/*
$(".grid").append("<div width='20' height='20' style='border:1px solid'></div>");
//$(".grid").append("<div call = pxName width='20' height='20' style='border:1px solid'></div>");
var pxTop = 21 * gridH;
var pxLeft = 21 * gridW;

//$( pxName).offset({ top: pxTop, left: pxLeft });
$(".grid").css( "color", "red" );
$(".grid:last").offset({ top: pxTop, left: pxLeft });
//if the dynamic naming does not work.

*/
 rowPxs +="<td></td>";  // add each cell

// each one needs to add <td>Eve</td>

//console.log(pxTop + " , "+pxLeft);
//console.log(rowPxs);
 };
 //  -- this is nto needed - multi hight by 21px to make the next row..
rowPxs += "</tr>";  // finish each row
$("table").append(rowPxs);  //add newly made row to the table
console.log(rowPxs);
};


  console.log("makeGrid()");

return;
}
