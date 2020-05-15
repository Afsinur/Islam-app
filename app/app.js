$(document).ready(function () {
  //-----
  var sura_counter = 0;
  var fivetnn_1 = 15;
  var fourtnn_1 = fivetnn_1 - 1;
  var arb, ban, eng;
  //-----same_01_01
  $(window).scroll(function () {
    var ins_sr_1 = $("div.surahs_main > div > p").text();
    var ins_selt_1 = $("select#select_surahs").val();
    var ins_selt_1_2 = $("select#select_surahs_2").val();
    var ins_sr_2 = $("body > div.surahs_main > div > p.hd_after_that").text();
    if (ins_sr_1 != "") {
      if (eng == "eng") {
        var pos = ins_selt_1.indexOf(".");
        var res = ins_selt_1.slice(0, pos);
        $.ajax({
          type: "get",
          url: "json/surahs/" + res + ".json",
          success: function (data) {
            if (sura_counter > fourtnn_1 && sura_counter < data.length) {
              console.log(sura_counter, data.length);
              $("div.surahs_main div").append(`
                  <p>${data[sura_counter].eng}</p>
                  `);
            }
            sura_counter++;
          },
        });
      } else if (ban == "ban") {
        var pos = ins_selt_1.indexOf(".");
        var res = ins_selt_1.slice(0, pos);
        $.ajax({
          type: "get",
          url: "json/surahs/" + res + ".json",
          success: function (data) {
            if (sura_counter > fourtnn_1 && sura_counter < data.length) {
              console.log(sura_counter, data.length);
              $("div.surahs_main div").append(`
                <p>${data[sura_counter].ban}</p>
                `);
            }
            sura_counter++;
          },
        });
      } else if (arb == "arb") {
        var pos = ins_selt_1.indexOf(".");
        var res = ins_selt_1.slice(0, pos);
        $.ajax({
          type: "get",
          url: "json/surahs/" + res + ".json",
          success: function (data) {
            if (sura_counter > fourtnn_1 && sura_counter < data.length) {
              console.log(sura_counter, data.length);
              $("div.surahs_main div").append(`
                <p>${data[sura_counter].arb}</p>
                `);
            }
            sura_counter++;
          },
        });
      } else if (ins_sr_2 != "") {
        if (arb == "arb_h") {
          var pos = ins_selt_1.indexOf(".");
          var res = ins_selt_1.slice(0, pos);
          var pos_1 = ins_selt_1_2.indexOf(".");
          var res_1 = ins_selt_1_2.slice(0, pos_1);
          $.ajax({
            type: "get",
            url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
            success: function (data) {
              if (sura_counter > fourtnn_1 && sura_counter < data.length) {
                $("div.surahs_main div").append(`
                  <p class="hd_after_that">${data[sura_counter].arb}</p>
                  `);
              }
              sura_counter++;
            },
          });
        } else if (ban == "ban_h") {
          var pos = ins_selt_1.indexOf(".");
          var res = ins_selt_1.slice(0, pos);
          var pos_1 = ins_selt_1_2.indexOf(".");
          var res_1 = ins_selt_1_2.slice(0, pos_1);
          $.ajax({
            type: "get",
            url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
            success: function (data) {
              if (sura_counter > fourtnn_1 && sura_counter < data.length) {
                $("div.surahs_main div").append(`
                  <p class="hd_after_that">${data[sura_counter].ban}</p>
                  `);
              }
              sura_counter++;
            },
          });
        } else if (eng == "eng_h") {
          var pos = ins_selt_1.indexOf(".");
          var res = ins_selt_1.slice(0, pos);
          var pos_1 = ins_selt_1_2.indexOf(".");
          var res_1 = ins_selt_1_2.slice(0, pos_1);
          $.ajax({
            type: "get",
            url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
            success: function (data) {
              if (sura_counter > fourtnn_1 && sura_counter < data.length) {
                $("div.surahs_main div").append(`
                  <p class="hd_after_that">${data[sura_counter].eng}</p>
                  `);
              }
              sura_counter++;
            },
          });
        }
      }
    }
  });
  //-----same_01
  $("body").on("click", "div#column_surahs > p", function () {
    if (eng == "eng") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_surahs/1.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/surah_names/1_surah_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].eng == x_1) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}" selected>${y[i].eng}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}">${y[i].eng}</option>
                  `);
                }
              });
              var pos = x_1.indexOf(".");
              var res = x_1.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/surahs/" + res + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                        <p>${data[i].eng}</p>
                        `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (ban == "ban") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_surahs/1.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/surah_names/1_surah_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].ban == x_1) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}" selected>${y[i].ban}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}">${y[i].ban}</option>
                  `);
                }
              });
              var pos = x_1.indexOf(".");
              var res = x_1.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/surahs/" + res + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                        <p>${data[i].ban}</p>
                        `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (arb == "arb") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_surahs/1.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/surah_names/1_surah_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].arb == x_1) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}" selected>${y[i].arb}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}">${y[i].arb}</option>
                  `);
                }
              });
              var pos = x_1.indexOf(".");
              var res = x_1.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/surahs/" + res + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                        <p>${data[i].arb}</p>
                        `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (arb == "arb_h") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_hadiths/1.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].arb == x_1) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}" selected>${y[i].arb}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}">${y[i].arb}</option>
                  `);
                }
              });
              var pos = x_1.indexOf(".");
              var res = x_1.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                        <p class="after_that">${data[i].arb}</p>
                        `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (ban == "ban_h") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_hadiths/1.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].ban == x_1) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}" selected>${y[i].ban}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}">${y[i].ban}</option>
                  `);
                }
              });
              var pos = x_1.indexOf(".");
              var res = x_1.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                        <p class="after_that">${data[i].ban}</p>
                        `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (eng == "eng_h") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_hadiths/1.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].eng == x_1) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}" selected>${y[i].eng}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}">${y[i].eng}</option>
                  `);
                }
              });
              var pos = x_1.indexOf(".");
              var res = x_1.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                        <p class="after_that">${data[i].eng}</p>
                        `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    }
  });
  //-----
  $("body").on("click", "div.surahs_main p.after_that", function () {
    if (arb == "arb_h") {
      $("span > select#select_surahs_2").css("display", "block");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_2 = $("nav select#select_surahs").val();
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_hadiths/2.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].arb == x_2) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}" selected>${y[i].arb}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}">${y[i].arb}</option>
                  `);
                }
              });
              var pos = x_2.indexOf(".");
              var res = x_2.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  var x_1_1 = JSON.stringify(data);
                  var y_1 = JSON.parse(x_1_1);
                  y_1.forEach((item, i) => {
                    if (y_1[i].arb == x_1) {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].arb}" selected>${y_1[i].arb}</option>
                      `);
                    } else {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].arb}">${y_1[i].arb}</option>
                      `);
                    }
                  });
                },
              });
              var pos_1 = x_1.indexOf(".");
              var res_1 = x_1.slice(0, pos_1);
              console.log(res, res_1);
              $.ajax({
                type: "get",
                url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                      <p class="hd_after_that">${data[i].arb}</p>
                      `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (ban == "ban_h") {
      $("span > select#select_surahs_2").css("display", "block");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_2 = $("nav select#select_surahs").val();
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_hadiths/2.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].ban == x_2) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}" selected>${y[i].ban}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}">${y[i].ban}</option>
                  `);
                }
              });
              var pos = x_2.indexOf(".");
              var res = x_2.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  var x_1_1 = JSON.stringify(data);
                  var y_1 = JSON.parse(x_1_1);
                  y_1.forEach((item, i) => {
                    if (y_1[i].ban == x_1) {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].ban}" selected>${y_1[i].ban}</option>
                      `);
                    } else {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].ban}">${y_1[i].ban}</option>
                      `);
                    }
                  });
                },
              });
              var pos_1 = x_1.indexOf(".");
              var res_1 = x_1.slice(0, pos_1);
              console.log(res, res_1);
              $.ajax({
                type: "get",
                url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                      <p class="hd_after_that">${data[i].ban}</p>
                      `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (eng == "eng_h") {
      $("span > select#select_surahs_2").css("display", "block");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_2 = $("nav select#select_surahs").val();
      var x_1 = $(this).text();
      $.ajax({
        type: "get",
        url: "get_hadiths/2.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].eng == x_2) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}" selected>${y[i].eng}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}">${y[i].eng}</option>
                  `);
                }
              });
              var pos = x_2.indexOf(".");
              var res = x_2.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  var x_1_1 = JSON.stringify(data);
                  var y_1 = JSON.parse(x_1_1);
                  y_1.forEach((item, i) => {
                    if (y_1[i].eng == x_1) {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].eng}" selected>${y_1[i].eng}</option>
                      `);
                    } else {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].eng}">${y_1[i].eng}</option>
                      `);
                    }
                  });
                },
              });
              var pos_1 = x_1.indexOf(".");
              var res_1 = x_1.slice(0, pos_1);
              console.log(res, res_1);
              $.ajax({
                type: "get",
                url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                      <p class="hd_after_that">${data[i].eng}</p>
                      `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    }
  });
  //-----
  $("body").on("change", "span > select#select_surahs_2", function () {
    if (arb == "arb_h") {
      $("span > select#select_surahs_2").css("display", "block");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_2 = $("nav select#select_surahs").val();
      var x_1 = $(this).val();
      $.ajax({
        type: "get",
        url: "get_hadiths/2.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].arb == x_2) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}" selected>${y[i].arb}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].arb}">${y[i].arb}</option>
                  `);
                }
              });
              var pos = x_2.indexOf(".");
              var res = x_2.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  var x_1_1 = JSON.stringify(data);
                  var y_1 = JSON.parse(x_1_1);
                  y_1.forEach((item, i) => {
                    if (y_1[i].arb == x_1) {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].arb}" selected>${y_1[i].arb}</option>
                      `);
                    } else {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].arb}">${y_1[i].arb}</option>
                      `);
                    }
                  });
                },
              });
              var pos_1 = x_1.indexOf(".");
              var res_1 = x_1.slice(0, pos_1);
              console.log(res, res_1);
              $.ajax({
                type: "get",
                url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                      <p class="hd_after_that">${data[i].arb}</p>
                      `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (ban == "ban_h") {
      $("span > select#select_surahs_2").css("display", "block");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_2 = $("nav select#select_surahs").val();
      var x_1 = $(this).val();
      $.ajax({
        type: "get",
        url: "get_hadiths/2.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].ban == x_2) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}" selected>${y[i].ban}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].ban}">${y[i].ban}</option>
                  `);
                }
              });
              var pos = x_2.indexOf(".");
              var res = x_2.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  var x_1_1 = JSON.stringify(data);
                  var y_1 = JSON.parse(x_1_1);
                  y_1.forEach((item, i) => {
                    if (y_1[i].ban == x_1) {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].ban}" selected>${y_1[i].ban}</option>
                      `);
                    } else {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].ban}">${y_1[i].ban}</option>
                      `);
                    }
                  });
                },
              });
              var pos_1 = x_1.indexOf(".");
              var res_1 = x_1.slice(0, pos_1);
              console.log(res, res_1);
              $.ajax({
                type: "get",
                url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                      <p class="hd_after_that">${data[i].ban}</p>
                      `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    } else if (eng == "eng_h") {
      $("span > select#select_surahs_2").css("display", "block");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_2 = $("nav select#select_surahs").val();
      var x_1 = $(this).val();
      $.ajax({
        type: "get",
        url: "get_hadiths/2.html",
        success: function (data) {
          $("body").html(data);
          $.ajax({
            type: "get",
            url: "json/hadiths_names/1_hadiths_names.json",
            success: function (data) {
              var x = JSON.stringify(data);
              var y = JSON.parse(x);
              y.forEach((item, i) => {
                if (y[i].eng == x_2) {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}" selected>${y[i].eng}</option>
                  `);
                } else {
                  $("span > select#select_surahs").append(`
                  <option value="${y[i].eng}">${y[i].eng}</option>
                  `);
                }
              });
              var pos = x_2.indexOf(".");
              var res = x_2.slice(0, pos);
              $.ajax({
                type: "get",
                url: "json/hadiths/" + res + ".json",
                success: function (data) {
                  var x_1_1 = JSON.stringify(data);
                  var y_1 = JSON.parse(x_1_1);
                  y_1.forEach((item, i) => {
                    if (y_1[i].eng == x_1) {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].eng}" selected>${y_1[i].eng}</option>
                      `);
                    } else {
                      $("span > select#select_surahs_2").append(`
                      <option value="${y_1[i].eng}">${y_1[i].eng}</option>
                      `);
                    }
                  });
                },
              });
              var pos_1 = x_1.indexOf(".");
              var res_1 = x_1.slice(0, pos_1);
              console.log(res, res_1);
              $.ajax({
                type: "get",
                url: "json/hadiths_1/hd" + res + "/" + res_1 + ".json",
                success: function (data) {
                  data.forEach((item, i) => {
                    if (i < fivetnn_1) {
                      $("div.surahs_main div").append(`
                      <p class="hd_after_that">${data[i].eng}</p>
                      `);
                    }
                  });
                  $("div#_round").css("display", "none");
                },
              });
            },
          });
        },
      });
    }
  });
  //-----
  $("body").on("click", "nav span", function () {
    var x = $(this).text();
    if (x == "Surahs") {
      if (eng == "eng") {
        $("div#_round").removeAttr("style");
        sura_counter = 0;
        $.ajax({
          type: "get",
          url: "get/1.html",
          success: function (data) {
            $("body").html(data);
            $("div#_round").css("display", "none");
          },
        });
      } else if (ban == "ban") {
        $("div#_round").removeAttr("style");
        sura_counter = 0;
        $.ajax({
          type: "get",
          url: "get/1_1.html",
          success: function (data) {
            $("body").html(data);
            $("div#_round").css("display", "none");
          },
        });
      } else if (arb == "arb") {
        $("div#_round").removeAttr("style");
        sura_counter = 0;
        $.ajax({
          type: "get",
          url: "get/1_2.html",
          success: function (data) {
            $("body").html(data);
            $("div#_round").css("display", "none");
          },
        });
      }
    } else if (x == "Hadiths") {
      if (eng == "eng_h") {
        $("div#_round").removeAttr("style");
        sura_counter = 0;
        $.ajax({
          type: "get",
          url: "get/2_2.html",
          success: function (data) {
            $("body").html(data);
            $("div#_round").css("display", "none");
          },
        });
      } else if (ban == "ban_h") {
        $("div#_round").removeAttr("style");
        sura_counter = 0;
        $.ajax({
          type: "get",
          url: "get/2.html",
          success: function (data) {
            $("body").html(data);
            $("div#_round").css("display", "none");
          },
        });
      } else if (arb == "arb_h") {
        $("div#_round").removeAttr("style");
        sura_counter = 0;
        $.ajax({
          type: "get",
          url: "get/2_1.html",
          success: function (data) {
            $("body").html(data);
            $("div#_round").css("display", "none");
          },
        });
      }
    }
  });
  //-----same_01
  $("body").on("change", "span > select#select_surahs", function () {
    if (eng == "eng") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).val();
      $("div.surahs_main div").html("");
      var pos = x_1.indexOf(".");
      var res = x_1.slice(0, pos);
      $.ajax({
        type: "get",
        url: "json/surahs/" + res + ".json",
        success: function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $("div.surahs_main div").append(`
                <p>${data[i].eng}</p>
                `);
            }
          });
          $("div#_round").css("display", "none");
        },
      });
    } else if (ban == "ban") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).val();
      $("div.surahs_main div").html("");
      var pos = x_1.indexOf(".");
      var res = x_1.slice(0, pos);
      $.ajax({
        type: "get",
        url: "json/surahs/" + res + ".json",
        success: function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $("div.surahs_main div").append(`
                <p>${data[i].ban}</p>
                `);
            }
          });
          $("div#_round").css("display", "none");
        },
      });
    } else if (arb == "arb") {
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).val();
      $("div.surahs_main div").html("");
      var pos = x_1.indexOf(".");
      var res = x_1.slice(0, pos);
      $.ajax({
        type: "get",
        url: "json/surahs/" + res + ".json",
        success: function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $("div.surahs_main div").append(`
                <p>${data[i].arb}</p>
                `);
            }
          });
          $("div#_round").css("display", "none");
        },
      });
    } else if (arb == "arb_h") {
      $("span > select#select_surahs_2").css("display", "none");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).val();
      $("div.surahs_main div").html("");
      var pos = x_1.indexOf(".");
      var res = x_1.slice(0, pos);
      $.ajax({
        type: "get",
        url: "json/hadiths/" + res + ".json",
        success: function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $("div.surahs_main div").append(`
                        <p class="after_that">${data[i].arb}</p>
                        `);
            }
          });
          $("div#_round").css("display", "none");
        },
      });
    } else if (ban == "ban_h") {
      $("span > select#select_surahs_2").css("display", "none");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).val();
      $("div.surahs_main div").html("");
      var pos = x_1.indexOf(".");
      var res = x_1.slice(0, pos);
      $.ajax({
        type: "get",
        url: "json/hadiths/" + res + ".json",
        success: function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $("div.surahs_main div").append(`
                        <p class="after_that">${data[i].ban}</p>
                        `);
            }
          });
          $("div#_round").css("display", "none");
        },
      });
    } else if (eng == "eng_h") {
      $("span > select#select_surahs_2").css("display", "none");
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      var x_1 = $(this).val();
      $("div.surahs_main div").html("");
      var pos = x_1.indexOf(".");
      var res = x_1.slice(0, pos);
      $.ajax({
        type: "get",
        url: "json/hadiths/" + res + ".json",
        success: function (data) {
          data.forEach((item, i) => {
            if (i < fivetnn_1) {
              $("div.surahs_main div").append(`
                        <p class="after_that">${data[i].eng}</p>
                        `);
            }
          });
          $("div#_round").css("display", "none");
        },
      });
    }
  });
  //-----
  $("body").on("click", "header span", function () {
    var x = $(this).text();
    if (x == " Islamic app") {
      eng = "N_eng";
      ban = "N_ban";
      arb = "N_arb";
      console.log(eng);
      $("div#_round").removeAttr("style");
      sura_counter = 0;
      $.ajax({
        type: "get",
        url: "get/0.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    }
  });
  //-----
  $("body").on("click", "div.common_div_1 button", function () {
    var x = $(this).find("span").text();
    if (x == "Read The Quran") {
      eng = "eng";
      $("div#_round").removeAttr("style");
      $.ajax({
        type: "get",
        url: "get/1.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    } else if (x == "কোরআন পড়ুন") {
      ban = "ban";
      $("div#_round").removeAttr("style");
      $.ajax({
        type: "get",
        url: "get/1_1.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    } else if (x == "اقرأ القرآن") {
      arb = "arb";
      $("div#_round").removeAttr("style");
      $.ajax({
        type: "get",
        url: "get/1_2.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    } else if (x == "Read The Hadiths") {
      eng = "eng_h";
      $("div#_round").removeAttr("style");
      $.ajax({
        type: "get",
        url: "get/2_2.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    } else if (x == "اقرأ الأحاديث") {
      arb = "arb_h";
      $("div#_round").removeAttr("style");
      $.ajax({
        type: "get",
        url: "get/2_1.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    } else if (x == "হাদীস সমূহ পড়ুন") {
      ban = "ban_h";
      $("div#_round").removeAttr("style");
      $.ajax({
        type: "get",
        url: "get/2.html",
        success: function (data) {
          $("body").html(data);
          $("div#_round").css("display", "none");
        },
      });
    }
  });
  //-----
  $("div#_round").css("display", "none");
  //-----
});
