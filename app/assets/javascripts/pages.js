$(document).ready(function(){
  var query;

   var processImages = function(data) {
      var images = data.photos.photo;

      for (var i = 0; i < images.length; i++) {
        var item = images[i];
        var img_url = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
        var $img = $('<img>');
        $img.attr('src', img_url);
        $('#images').append($img);
      }
    };

  var searchFlickr = function(){
    query = $('#search').val();
    var page = 1;

    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f5a78b55d0916888526ec3b3eb2e3aa&text=' + query + '&per_page=20&page=' + page + '&format=json&jsoncallback=?', processImages);
  };

  var clearImages = function(){
      $('#images').empty();
    };

  var page = 1;
  $('#more').click(function(){
    console.log('ehhh');
      page++;
  $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f5a78b55d0916888526ec3b3eb2e3aa&text=' + query + '&per_page=20&page=' + page + '&format=json&jsoncallback=?', processImages);
  });

  $('#clear_images').on('click', clearImages);
  $('#search_flickr').on('click', searchFlickr);
});