$(document).ready(function () {
  //-----
  $('body').on('click', 'div#column_surahs > p', function () {
    var x_1 = $(this).text();
    $.ajax({
      type:'get',
      url:'get_surahs/1.html',
      success:function (data) {
        $('body').html(data);
        $.ajax({
          type:'get',
          url:'json/surah_names/1_surah_names.json',
          success:function (data) {
            var x = JSON.stringify(data);
            var y = JSON.parse(x);
            y.forEach((item, i) => {
              if (y[i].eng == x_1) {
                $('span > select#select_surahs').append(`
                <option value="${y[i].eng}" selected>${y[i].eng}</option>
                `);
              }else {
                $('span > select#select_surahs').append(`
                <option value="${y[i].eng}">${y[i].eng}</option>
                `);
              }
            });
            $('div#_round').css('display','none');
          }
        });
      }
    });
  });
  //-----
  $('body').on('click', 'nav span', function () {
    var x = $(this).text();
    if (x == 'Surahs') {
      $.ajax({
        type:'get',
        url:'get/1.html',
        success:function (data) {
          $('body').html(data);
          $('div#_round').css('display','none');
        }
      });
    }
  });
  //-----
  $('body').on('change', 'span > select#select_surahs', function () {
    console.log($(this).val());
  });
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
