var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 15.6000, lng: 74.0300 },
          zoom: 11
        });
          ko.applyBindings(new model());
      }
function maperror()
        {
          alert("Map Can't Load...Check Your Connection!!!");
        }