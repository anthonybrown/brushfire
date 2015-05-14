$(function whenDOMIsReady () {
  $('.the-list-of-videos .loading').show();

  setTimeout(function afterRetrievingVideos () {
    var videos = [
      {
        title: "Tumblin' Dice",
        src: 'https://www.youtube.com/embed/AJ1CRKiwdho'
      },
      {
        title: 'PSY - GANGNAM STYLE M/V',
        src: 'https://www.youtube.com/embed/9bZkp7q19f0'
      },
      {
        title: 'Stairway to heaven',
        src: 'https://www.youtube.com/embed/9Q7Vr3yQYWQ'
      },

      {
        title: 'Faster Pussycat',
        src: 'https://www.youtube.com/embed/_1JZtudOCpw'
      },
      {
        title: 'Bad Romance',
        src: 'https://www.youtube.com/embed/qrO4YZeyl0I'
      }
    ];

    $('.the-list-of-videos .loading').hide();

    var videosHtml = _.reduce(videos, function (html, video) {
      html += '<li class="video">'+
      ' <h2>' + video.title + '</h2>'+
      ' <iframe width="640" height="390" src="' + video.src + '" frameborder="0" allowfullscreen</iframe>' +
      '</li>';
      return html;
    },'');

    $('.the-list-of-videos ul').replaceWith(videosHtml)
  }, 750);
});
