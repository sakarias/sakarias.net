function getTwitch() {
  $.getJSON("https://sakarias.net/cache/twitchStatus.json", function(obj) {
    //$('#twitchContainer').empty();
    $('#twitchStream').empty();
    if (obj.streamLive == 1) {
      var streamTitle     = obj.streamTitle;
      var streamGame      = obj.streamGame;
      var streamPreview   = obj.streamPreview;
      var streamURL       = obj.streamURL;
      var streamChannel   = obj.streamChannel;
      var streamStartTime = obj.streamStartTime;

      //$('#twitchContainer').append('<span class="light">Live now : </span>' + streamGame + '<br />');
      //$('#twitchContainer').append('<a href="'+ streamURL +'"><img src=' + streamPreview +' height="180" width="320"/></a>');
      //$('#twitchStream').append('<object type="application/x-shockwave-flash" height="405" width="720" data="https://www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" bgcolor="#36373d"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="https://www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" /><param name="flashvars" value="channel='+ streamChannel +'&amp;auto_play=false&amp;start_volume=50" /></object>');
      $('#twitchStream').append('<iframe src="https://player.twitch.tv/?channel='+ streamChannel +'" height="405" width="720" frameborder="0" scrolling="no" allowfullscreen></iframe>');
    }
    else {
      var streamPreview = obj.streamPreview;
      //$('#twitchContainer').append('<span class="light">Sakarias</span> Gaming');
      $('#twitchStream').append('<img src="' + streamPreview +'" height="405" width="720" />');
    }
    setTimeout(getTwitch, 300000);
  });
}
getTwitch();