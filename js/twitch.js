$.getJSON("http://cache.sakarias.net/twitchStatus.json", function(obj) {
  if (obj.streamLive == 1) {
    var streamTitle     = obj.streamTitle;
    var streamGame      = obj.streamGame;
    var streamPreview   = obj.streamPreview;
    var streamURL       = obj.streamURL;
    var streamStartTime = obj.streamStartTime;

    $('#twitchContainer').append('<span class="light">Live now : </span>' + streamGame + '<br />');
    $('#twitchContainer').append('<a href="'+ streamURL +'"><img src=' + streamPreview +' height="180" width="320"/></a>');
    $('#twitchStream').append('<iframe width="720" height="405" src="'+ streamURL +'/embed" frameborder="0" allowfullscreen></iframe>');
  }
  else {
    var streamPreview   = obj.streamPreview;
    $('#twitchContainer').append('<span class="light">Sakarias</span> Gaming');
    $('#twitchStream').append('<img src="' + streamPreview +'" />');
  }
});