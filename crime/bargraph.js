$(function() {


		var i = 0
		while(i < data.length) {
		var badCrimes = data[i];
		
 	var incidentWidth = parseInt(incidents,5); 
		var domesticWidth = parseInt(domestic,5);

		var town = badCrimes.name;
		var incidents = badCrimes.incidents;
		var domestic = badCrimes.domestic;	
	
	






		var row = $('<div>').addClass('row');
		var places = $('<div>')
			.addClass('town')
			.text(town)
			.appendTo(row);
		var barContainer = $('<div>')
			.addClass('bar-container')
			.appendTo(row);
		var incidentsDiv = $('<div>')
			.addClass('incidents')
			.css({width:incidentWidth})
			.appendTo(barContainer);
		var domesticDiv = $('<div>')
			.addClass('domestic')
			.css({width:domesticWidth})
			.appendTo(barContainer);

		
		$("body").append(row);
		i++;
		}

});