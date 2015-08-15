$.getJSON("http://sakarias.net/cache/twitchStatus.json", function(obj) {    
  if ( obj.streamLive == 1) {
    var streamTitle     = obj.streamTitle;
    var streamGame      = obj.streamGame;
    var streamPreview   = obj.streamPreview;
    var streamStartTime = obj.streamStartTime;

    $('#twitchContainer').append('<span class="light">Live now : </span>' + streamGame + '<br />');
    $('#twitchContainer').append('<a href="http://twitch.tv/sakariaslp"><img src=' + streamPreview +' height="180" width="320"/></a>');
  }
  else {
    $('#twitchContainer').append('<span class="light">Sakarias</span> Gaming');
  }
});