$(document).ready(function () {
  //-----
  var sura_counter = 0;
  var fivetnn_1 = 15;
  var fourtnn_1 = 14;
  //-----same_01_01
  $(window).scroll(function () {
    var ins_sr_1 = $('div.surahs_main div').text();
    var ins_selt_1 = $('select#select_surahs').val();
    if (ins_sr_1 != '') {
      if (ins_selt_1 == '1. Surah Fatiha') {
        $.ajax({
          type:'get',
          url:'json/surahs/1.json',
          success:function (data) {
            if (sura_counter > fourtnn_1 && sura_counter < data.length) {
              $('div.surahs_main div').append(`
                <p>${data[sura_counter].eng}</p>
                `);
            }
            sura_counter++;
          }
        });
      }else if (ins_selt_1 == '2. Surah Baqarah') {
        $.ajax({
          type:'get',
          url:'json/surahs/2.json',
          success:function (data) {
            if (sura_counter > fourtnn_1 && sura_counter < data.length) {
              console.log(sura_counter, data.length);
              $('div.surahs_main div').append(`
                <p>${data[sura_counter].eng}</p>
                `);
            }
            sura_counter++;
          }
        });
      }
    }
  });
  //-----same_01
  $('body').on('click', 'div#column_surahs > p', function () {
    sura_counter = 0;
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
    if (x_1 == '1. Surah Fatiha') {
      $.ajax({
        type:'get',
        url:'json/surahs/1.json',
        success:function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $('div.surahs_main div').append(`
                <p>${data[i].eng}</p>
                `);
            }
          });
        }
      });
    }else if (x_1 == '2. Surah Baqarah') {
      $.ajax({
        type:'get',
        url:'json/surahs/2.json',
        success:function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $('div.surahs_main div').append(`
                <p>${data[i].eng}</p>
                `);
            }
          });
        }
      });
    }
  });
  //-----
  $('body').on('click', 'nav span', function () {
    var x = $(this).text();
    if (x == 'Surahs') {
      sura_counter = 0;
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
  //-----same_01
  $('body').on('change', 'span > select#select_surahs', function () {
    $('div#_round').removeAttr('style');
    sura_counter = 0;
    var x_1 = $(this).val();
    $('div.surahs_main div').html('');
    if (x_1 == '1. Surah Fatiha') {
      $.ajax({
        type:'get',
        url:'json/surahs/1.json',
        success:function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $('div.surahs_main div').append(`
                <p>${data[i].eng}</p>
                `);
            }
          });
          $('div#_round').css('display','none');
        }
      });
    }else if (x_1 == '2. Surah Baqarah') {
      $.ajax({
        type:'get',
        url:'json/surahs/2.json',
        success:function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $('div.surahs_main div').append(`
                <p>${data[i].eng}</p>
                `);
            }
          });
          $('div#_round').css('display','none');
        }
      });
    }
  });
  //-----
  $('body').on('click', 'header span', function () {
    var x = $(this).text();
    if (x == ' Islamic app') {
      sura_counter = 0;
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
