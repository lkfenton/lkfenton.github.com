
		$(document).ready(function() {
			
			// initialize the plugin, pass in the class selector for the sections of content (blocks)
			var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
			
			// assigßn function to add behavior for onBlockChange event
			scrollorama.onBlockChange(function() {
				var i = scrollorama.blockIndex;
				$('#console')
					.css('display','block')
					.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
			});
			
			
		
			// animate some examples
			scrollorama
				.animate('#unpin',{ duration:500, property:'padding-top', start:500, pin:true })
				.animate('#rats',{ delay: 250, duration: 200, property:'opacity', start:0 })
				.animate('#no-money',{ delay: 900, duration: 150, property:'opacity', start:0 })
				.animate('#expensive',{ delay: 900, duration: 200, property:'left', start:-1400, end:0 })
				.animate('#unpin2',{ duration:900, property:'padding-top', start:1200, pin:true })
				.animate('#unpin3',{ duration:400, property:'padding-top', start:700, pin:true })
				.animate('#unpin4',{ duration:520, property:'padding-top', start:1500, pin:true })
				.animate('#blow-up',{ delay: 150, duration: 400, property:'zoom', start:3 })
				.animate('#walking',{ delay: 200, duration: 600, property:'left', start:-1400, end:0 })
				.animate('#pink-bike',{ delay: 200, duration: 400, property:'right', start:-1400, end:1400 });
				
				

			
			// animate the parallaxing
			scrollorama
			
				.animate('#ducks2',{ delay: 400, duration: 600, property:'top', start:800, end:-800 })
				.animate('#ducks3',{ delay: 200, duration: 1200, property:'top', start:500, end:-500 });
			
			
			
		});

