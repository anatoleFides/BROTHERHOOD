$(document).ready(function(){
	
//navtab
	$('#navTab_mainMeu a').click(function (e) {
		e.preventDefault()
			$(this).tab('show')
	})

//Tissue slider
	$("#tissue_slider").owlCarousel(
		{
		items: 1, 
		nav: true,
		loop: true,
		dots: false,	   
		pagination : true,
		//autoplay:true,
		//smartSpeed:4000,
		//autoplayTimeout:8000,  
	});

//MAP

});
function initMap() 
            {     
              //var myLatlng = new google.maps.LatLng(50.533254, 30.514811);
              var myLatlng = {lat: 50.533254, lng: 30.514811};
              var myElement = document.getElementById('map');
              var myOptions = {
                zoom: 6,
                center: myLatlng,
                styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "29"
            },
            {
                "invert_lightness": true
            },
            {
                "hue": "#008fff"
            },
            {
                "saturation": "-73"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-72"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "32"
            },
            {
                "weight": "0.42"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "-53"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-86"
            },
            {
                "gamma": "1.13"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#006dff"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "1.44"
            },
            {
                "saturation": "-67"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "0.84"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "0.79"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-78"
            },
            {
                "saturation": "-91"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "-69"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-35"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-97"
            },
            {
                "lightness": "-14"
            }
        ]
    }
]             
       		}
              var myMap = new google.maps.Map(myElement, myOptions) 

              addMarker({lat: 49.2333333, lng: 28.4833333}); //Винница
              addMarker({lat: 50.259749, lng: 28.676248}); //Житомир
              addMarker({lat: 48.45, lng: 34.9833333});    // Днепр
              addMarker({lat: 47.899726, lng: 33.379534});    // Кривой Рог
              addMarker({lat: 48.0027778, lng: 37.8052778}); // Донецк
              addMarker({lat: 47.853748, lng: 35.157139}); // Запорожье
              addMarker({lat: 50.584981, lng: 30.235748}); // Киев
              addMarker({lat: 48.508389, lng: 32.264801}); // Кировоград
              addMarker({lat: 48.573269, lng: 39.355659}); // Луганск
              addMarker({lat: 49.85, lng: 24.0166667}); // Львов
              addMarker({lat: 46.9666667, lng: 32.0}); // Николаев
              addMarker({lat: 46.4666667, lng: 30.7333333}); // Одесса
              addMarker({lat: 49.073521, lng: 33.4231}); // Кременчуг
              addMarker({lat: 49.59269, lng: 34.551159}); // Полтава
              addMarker({lat: 50.910561, lng: 34.80566}); // Сумы
              addMarker({lat: 49.98967, lng: 36.208309}); // Харьков
              addMarker({lat: 46.653368, lng: 32.629424}); // Херсон
              addMarker({lat: 49.4333333, lng: 32.0666667}); // Черкассы
              addMarker({lat: 51.503653, lng: 31.293167}); // Чернигов
              addMarker({lat: 48.3, lng: 25.9333333}); // Черновцы
        function addMarker(coordinates) {
        	 var marker = new google.maps.Marker({
                position: coordinates,
                map: myMap,
                title:"BROTHERHOOD",
                icon: 'images/yellowShell.png',
                animation: google.maps.Animation.BOUNCE,
              });           
            }
        }  
	