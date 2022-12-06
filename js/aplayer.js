!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
	    listFolded: true,
	    listMaxHeight: 90,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
			  name: 'Dreamers',
		  	artist: 'Jung Kook',
			  url: 'http://music.163.com/song/media/outer/url?id=1999817550.mp3',
			  cover: 'http://p1.music.126.net/hFHFusqewJ2Uwy8qjpN1uQ==/109951168072456069.jpg?param=130y130'
	       },
        {
          name: 'Cure For Me',
          artist: 'AURORA',
          url: 'http://music.163.com/song/media/outer/url?id=1859515946.mp3',
          cover: 'http://p1.music.126.net/sfRnI2qZgPjH3oCpkMZj0g==/109951166157926966.jpg?param=130y130'
        },
        {
          name: '南风',
          artist: '叶炫清',
          url: 'https://dl.stream.qqmusic.qq.com/C4000015WUeK1uN6rl.m4a?guid=5225771119&vkey=7519C535A6D86B15B36C92DF52EBB64405430B67C246141E620F47AC50EDDC8B08845D226E3833EC8D0CECA6536C79A646F6D7816C0A3E0E&uin=2934655227&fromtag=120032',
          cover: '//y.qq.com/music/photo_new/T002R300x300M000004LNOKj2HKSPA_1.jpg?max_age=2592000'
        }
      ]
    });
  }
})();
