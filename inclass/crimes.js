$(function() {
    
  var i = 0;
  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  while (i < crimes.data.length) {
  var crime = crimes.data[i];
  
  
  var x = parseFloat(crime[34],10);
  var y = parseFloat(crime[35],10);
          
  if(x < minX) { minX = x; }
  if(x > maxX) { maxX = x; }
    
    
  if(y < minY) { minY = y; }
  if(y > maxY) { maxY = y; }
  
  //console.log([minX, maxX, minY, maxY]);
    
    
  i++;

        }
        
  var i = 0;
  
  while (i < crimes.data.length) {
  var crime = crimes.data[i];
  
  var neighborhood = crime[22];
  var crimecode = crime[42];
  
  
  var x = parseFloat(crime[34],10);
  var y = parseFloat(crime[35],10);

  
var diffX = maxX - minX;
var screenX =  (x - minX) / diffX * 500;

var diffY = maxY - minY;
var screenY =  (y - minY) / diffY * 500;
    
    
  var div = $("<div>").css({
  position: "absolute", width:"10", height:"10", 
  backgroundColor: "red",
  left: screenX, top: screenY
  }).attr("title", neighborhood + crimecode);
  
  $("body").append(div);
    
  i++;

        }
});