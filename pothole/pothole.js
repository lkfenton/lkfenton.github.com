
    $(function() {
      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);

        // Add in a marker:

      var myHeatmapData = [];
      
       var i = 0;
  	   while (i < potholes.length) {
       var pothole = potholes[i];
          
          
        var lat = pothole.LATITUDE;  
        var lon = pothole.LONGITUDE;
        
        
        myHeatmapData.push(
          new google.maps.LatLng(pothole.LATITUDE,pothole.LONGITUDE)  
        ) 
        
        //markers
        //var marker = new google.maps.Marker({
        //position: new google.maps.LatLng(lat, lon),
        //title: "Potholes",
        //map: myMap

       i++;
       }
       
       
       
       var heatmap = new google.maps.visualization.HeatmapLayer({
        data: myHeatmapData,
        radius: 25
      });
      heatmap.setMap(myMap);

    });
   
 