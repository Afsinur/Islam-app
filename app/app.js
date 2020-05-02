$(document).ready(function () {
  //-----
  $('body').on('click', 'header span', function () {
    var x = $(this).text();
    if (x == ' Islamic app') {
      $.ajax({
        type:'get',
        url:'get/0.html',
        success:function (data) {
          $('body').html(data);
          $('div#_round').css('display','none');
        }
      });
    }
  });
  //-----
  $('body').on('click', 'div.common_div_1 button', function () {
    var x = $(this).find('span').text();
    if (x == 'Read Quran') {
      $.ajax({
        type:'get',
        url:'get/1.html',
        success:function (data) {
          $('body').html(data);
          $('div#_round').css('display','none');
        }
      });
    }else if (x == 'Read Hadiths') {
      $.ajax({
        type:'get',
        url:'get/2.html',
        success:function (data) {
          $('body').html(data);
          $('div#_round').css('display','none');
        }
      });
    }
  });
  //-----
  $('div#_round').css('display','none');
  //-----
});
