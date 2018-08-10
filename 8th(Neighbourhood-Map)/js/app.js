//array of beaches in GOA having 5 objects
var beaches = [{
        name: "Baga Beach, North Goa",
        show: true,
        lat: 15.5570,
        lng: 73.7549,
        b_id: "4b9f686bf964a520ce2037e3"
    },
    {
        name: "Anjuna Beach, North Goa",
        show: true,
        lat: 15.5736,
        lng: 73.7407,
        b_id: "4bd2e62fcaff95210094d3f0"
    },
    {
        name: "Arambol Beach, North Goa",
        show: true,
        lat: 15.6847,
        lng: 73.7033,
        b_id: "4c8b8556106d76b054c5f60b"
    },
    {
        name: "Morjim Beach, North Goa",
        show: true,
        lat: 15.6316,
        lng: 73.7390,
        b_id: "4c62374d4b5176b0f8be0117"
    },
    {
        name: "Mandrem Beach, North Goa",
        show: true,
        lat: 15.6631,
        lng: 73.7419,
        b_id: "4d259205903c8cfa555fcf25"
    }

];

//Model object
var model = function() {
    var defaultMarker = makeMarkerIcon('FE8169');
    var highlightedMarker = makeMarkerIcon('B8AFAF');
    var InfoWindow = new google.maps.InfoWindow();

    function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(22, 35),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(22, 35));
        return markerImage;
    }


    var self = this;
    self.marker = [];
    var mapInfowindow = new google.maps.InfoWindow();
    for (var z = 0; z < beaches.length; z++) {
        var title = beaches[z].name;
        var marker = new google.maps.Marker({
            position: {
                lat: beaches[z].lat,
                lng: beaches[z].lng
            },
            bname: beaches[z].name,
            map: map,
            bid: beaches[z].b_id,
            show: ko.observable(true),
            title: title,
            animation: google.maps.Animation.DROP
        });

        self.marker.push(marker);


        marker.addListener('click', function(marker) {
            placesInfo(this, mapInfowindow);
            /*https://developers.google.com/maps/documentation/javascript/examples/marker-animations*/
            this.setAnimation(google.maps.Animation.DROP);

        });
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedMarker);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultMarker);
        });
    }

    //calling FourSquare API
    self.info = function(marker) {

        $.ajax({
            type: "GET",
            url: "https://api.foursquare.com/v2/venues/" +
                marker.bid + "?ll=40.7,-74&client_id=PD1D03JMVOWF0IINXLC4CUBMKB21CLDYNQWG1ANB1UMNX445&client_secret=UK0PZ1SQ33I0SCYM0H02HMOUAY5CMWMQ2CARTUD03HO1TBCG&v=20170510",
            dataType: "json",
            error: function(e) {
                window.alert("Data Unavailable!!!");
            },
            success: function(data) {
                marker.summary = data.response.venue.likes.hasOwnProperty('summary') ? data.response.venue.likes.summary : "";

            },

        });
    };
    for (var i = 0; i < 5; i++) {
        self.info(self.marker[i]);
    }

    function placesInfo(marker, info) {

        if (info.marker != marker) {
            info.marker = marker;
            info.setContent('<div>' + '<b>' + marker.bname + '</b>' + '<br>' + marker.summary + '</div>');
            info.open(map, marker);
            info.addListener('closeClick', function() {

                info.close();
            });
        }
    }
    this.everything = function(marker) {
        placesInfo(marker, InfoWindow);
        marker.setAnimation(google.maps.Animation.DROP);

    };
    this.showAll = function(variable, marker) {

        for (i = 0; i < this.marker.length; i++) {
            this.marker[i].show(variable);
            this.marker[i].setVisible(variable);
        }
    };
    //search text variable
    this.inputText = ko.observable('');
    this.filtersearch = function(Infowindow) {

        var inputSearch = this.inputText();
        if (inputSearch.length === 0) {
            this.showAll(true, marker);
        } else {
            //making marker visible
            for (i = 0; i < this.marker.length; i++) {
                if (this.marker[i].title.toUpperCase().indexOf(inputSearch.toUpperCase()) > -1) {
                    this.marker[i].show(true);
                    this.marker[i].setVisible(true);
                } else {
                    this.marker[i].show(false);
                    this.marker[i].setVisible(false);
                }
            }
        }

    };


};