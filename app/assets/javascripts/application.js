// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require_tree .


$(document).ready(function(){
    $('#map').each(function(){
      var map_container = $(this);
      var bounds = new google.maps.LatLngBounds();
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14
      });
      $.ajax({
        url: map_container.data('url'),
        success: function( data, textStatus, jqXHR ){
          $.each(data.assets, function(index, asset){
            var latLng = new google.maps.LatLng(asset.latitude, asset.longitude);
            var marker = new google.maps.Marker({
              position: latLng,
              title: asset.name
            });
            var infowindow = new google.maps.InfoWindow({
              content: '<h1>' + asset.name + '</h1><p>' + asset.description + '</p>'
            });
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
            bounds.extend(marker.getPosition());
            marker.setMap(map);
          });
          map.fitBounds(bounds);
        },
        error: function(){
          alert('Data failed to load');
        }
      })
    });
});
