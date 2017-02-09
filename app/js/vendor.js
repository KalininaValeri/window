/**
 * Created by home on 09.02.2017.
 */
if (!window.BX)window.BX = {
    message: function (mess) {
        if (typeof mess == 'object') for (var i in mess) BX.message[i] = mess[i];
        return true;
    }
};

(window.BX || top.BX).message({
    'JS_CORE_LOADING': 'Загрузка...',
    'JS_CORE_NO_DATA': '- Нет данных -',
    'JS_CORE_WINDOW_CLOSE': 'Закрыть',
    'JS_CORE_WINDOW_EXPAND': 'Развернуть',
    'JS_CORE_WINDOW_NARROW': 'Свернуть в окно',
    'JS_CORE_WINDOW_SAVE': 'Сохранить',
    'JS_CORE_WINDOW_CANCEL': 'Отменить',
    'JS_CORE_WINDOW_CONTINUE': 'Продолжить',
    'JS_CORE_H': 'ч',
    'JS_CORE_M': 'м',
    'JS_CORE_S': 'с',
    'JSADM_AI_HIDE_EXTRA': 'Скрыть лишние',
    'JSADM_AI_ALL_NOTIF': 'Показать все',
    'JSADM_AUTH_REQ': 'Требуется авторизация!',
    'JS_CORE_WINDOW_AUTH': 'Войти',
    'JS_CORE_IMAGE_FULL': 'Полный размер'
});
(window.BX || top.BX).message({
    'LANGUAGE_ID': 'ru',
    'FORMAT_DATE': 'DD.MM.YYYY',
    'FORMAT_DATETIME': 'DD.MM.YYYY HH:MI:SS',
    'COOKIE_PREFIX': 'BITRIX_SM',
    'SERVER_TZ_OFFSET': '10800',
    'SITE_ID': 's1',
    'SITE_DIR': '/',
    'USER_ID': '',
    'SERVER_TIME': '1486646092',
    'USER_TZ_OFFSET': '0',
    'USER_TZ_AUTO': 'Y',
    'bitrix_sessid': 'c35b6339bd7f8169d0fdde2ab8bae1b4'
});
BX.setJSList(['/bitrix/js/main/core/core.js?148544787170993','/bitrix/js/main/core/core_ajax.js?148544787120978','/bitrix/js/main/json/json2.min.js?14854478713467','/bitrix/js/main/core/core_ls.js?14854478717365','/bitrix/js/main/session.js?14854478712511','/bitrix/js/main/core/core_window.js?148544787174917','/bitrix/js/main/core/core_popup.js?148544787131170','/bitrix/js/main/core/core_date.js?148544787134276','/bitrix/js/main/utils.js?148544787119858','/bitrix/js/main/core/core_fx.js?14854478719592','/bitrix/templates/.default/components/bitrix/catalog.section/new_ceilings/script.js?148633168526997','/bitrix/templates/.default/components/bitrix/catalog.section/stretch_ceiling/script.js?148633168526997','/bitrix/templates/.default/js/swiper.min.js?148633168596824','/bitrix/templates/.default/js/common.js?14863316853050','/bitrix/templates/ceiling/fancy/lib/jquery-1.10.1.min.js?148544787493064','/bitrix/templates/ceiling/fancy/lib/jquery.mousewheel-3.0.6.pack.js?14854478741384','/bitrix/templates/ceiling/fancy/source/jquery.fancybox.js?148544787448706','/bitrix/templates/ceiling/fancy/source/helpers/jquery.fancybox-buttons.js?14854478743041','/bitrix/templates/ceiling/fancy/source/helpers/jquery.fancybox-thumbs.js?14854478743836','/bitrix/templates/ceiling/fancy/source/helpers/jquery.fancybox-media.js?14854478745305','/bitrix/templates/ceiling/slick/slick.js?148544787441953','/bitrix/templates/ceiling/js/masonry.pkgd.js?148544787462970','/bitrix/templates/ceiling/js/jquery.maskedinput.min.js?14854478744531','/bitrix/templates/ceiling/ui/jquery-ui.js?1485447874240422','/bitrix/templates/.default/components/bitrix/search.suggest.input/.default/script.js?148544787412503','/bitrix/templates/.default/components/bitrix/menu/main-menu/script.js?1485447874407','/bitrix/templates/.default/components/bitrix/menu/main-menu_mobil/script.js?1485447874470','/bitrix/templates/.default/components/bitrix/news.list/slider/script.js?14854478741008','/bitrix/templates/.default/components/bitrix/menu/footer/script.js?1485447874165']);
BX.setCSSList(['/bitrix/js/main/core/css/core.css?14854478712854','/bitrix/js/main/core/css/core_popup.css?148544787133075','/bitrix/js/main/core/css/core_date.css?14854478719689','/bitrix/templates/.default/components/bitrix/catalog.section/new_ceilings/style.css?14863316853764','/bitrix/templates/.default/components/bitrix/catalog.section/new_ceilings/themes/blue/style.css?14863316854634','/include/css/calc.css?148633168510257','/bitrix/templates/.default/components/bitrix/news.list/foto/style.css?14863316854033','/bitrix/templates/.default/components/bitrix/catalog.section/stretch_ceiling/style.css?148633168524522','/bitrix/templates/.default/components/bitrix/news.list/services/style.css?14863316854033','/bitrix/templates/.default/style.css?148655445928721','/bitrix/templates/.default/css/main.css?14863316852897','/bitrix/templates/.default/css/swiper.css?148544787420974','/bitrix/templates/ceiling/fancy/source/jquery.fancybox.css?14863316855753','/bitrix/templates/ceiling/fancy/source/helpers/jquery.fancybox-buttons.css?14854478742447','/bitrix/templates/ceiling/fancy/source/helpers/jquery.fancybox-thumbs.css?1485447874735','/bitrix/templates/ceiling/slick/slick.css?14854478741729','/bitrix/templates/ceiling/slick/slick-theme.css?14854478742985','/bitrix/templates/ceiling/ui/jquery-ui.css?148544787429273','/bitrix/templates/ceiling/template_styles.css?148656988272960','/bitrix/templates/.default/adap-max1279.css?14865620028138','/bitrix/templates/.default/adap-max959.css?14865702189149','/bitrix/templates/.default/adap-max669.css?14865706646957','/bitrix/templates/.default/components/bitrix/search.suggest.input/.default/style.css?1485447874501','/bitrix/templates/.default/components/bitrix/menu/main-menu/style.css?148633168518137','/bitrix/templates/.default/components/bitrix/menu/main-menu_mobil/style.css?148656876618509','/bitrix/templates/.default/components/bitrix/news.list/slider/style.css?14865634456072','/bitrix/templates/.default/components/bitrix/menu/footer/style.css?14854478741593','/bitrix/templates/ceiling/styles.css?148633168513327']);
(function () {
    "use strict";

    var counter = function ()
    {
        var cookie = (function (name) {
            var parts = ("; " + document.cookie).split("; " + name + "=");
            if (parts.length == 2) {
                try {return JSON.parse(decodeURIComponent(parts.pop().split(";").shift()));}
                catch (e) {}
            }
        })("BITRIX_CONVERSION_CONTEXT_s1");

        if (! cookie || cookie.EXPIRE < BX.message("SERVER_TIME"))
        {
            var request = new XMLHttpRequest();
            request.open("POST", "/bitrix/tools/conversion/ajax_counter.php", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(
                "SITE_ID="      + encodeURIComponent(BX.message("SITE_ID")) + "&" +
                "sessid="       + encodeURIComponent(BX.bitrix_sessid())    + "&" +
                "HTTP_REFERER=" + encodeURIComponent(document.referrer)
            );
        }
    };

    if (window.frameRequestStart === true)
        BX.addCustomEvent("onFrameDataReceived", counter);
    else
        BX.ready(counter);
})();
var _ba = _ba || []; _ba.push(["aid", "c35ef09489f479df8c1372f05161d559"]); _ba.push(["host", "potolki-ts.ru"]); (function() {var ba = document.createElement("script"); ba.type = "text/javascript"; ba.async = true;ba.src = (document.location.protocol == "https:" ? "https://" : "http://") + "bitrix.info/ba.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ba, s);})();
new Image().src='http://okna-ts.ru/bitrix/spread.php?s=QklUUklYX1NNX0FCVEVTVF9zMQEBMTUxNzc1MDA5MgEvAQEBAg%3D%3D&k=78d352c6c2f3463d290b4a8bf2694697';
new Image().src='http://1.tvoistil23.tmweb.ru/bitrix/spread.php?s=QklUUklYX1NNX0FCVEVTVF9zMQEBMTUxNzc1MDA5MgEvAQEBAg%3D%3D&k=78d352c6c2f3463d290b4a8bf2694697';
new Image().src='http://kuhni-ts.ru/bitrix/spread.php?s=QklUUklYX1NNX0FCVEVTVF9zMQEBMTUxNzc1MDA5MgEvAQEBAg%3D%3D&k=78d352c6c2f3463d290b4a8bf2694697';
new Image().src='http://climat-ts.ru/bitrix/spread.php?s=QklUUklYX1NNX0FCVEVTVF9zMQEBMTUxNzc1MDA5MgEvAQEBAg%3D%3D&k=78d352c6c2f3463d290b4a8bf2694697';
function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
$(document).ready(function() {
    var httpHost = 'potolki-ts.ru';
    var formOrderCall = '';
    var formId = '';
    $("input[name='form_text_8']").val(httpHost).css('display', 'none');
    if (formId == '3') {
        if (formOrderCall = 'addok') {
            $('.orderCallOk').fadeIn( "slow" );
            $('.orderCallOk').delay(3000).fadeOut();
        }
    }

    $('body').on('focus','.input input',function() {
        var val = $(this).parent('.input').children('.label').text();
        $(this).attr('placeholder', val);
        $(this).parent('.input').children('.label').css('display', 'none');
    });

    $('body').on('focus','.input textarea',function() {
        var val = $(this).parent('.input').children('.label').text();
        $(this).attr('placeholder', val);
        $(this).parent('.input').children('.label').css('display', 'none');
    });
    if($(window).width() < 900){
        var fancyboxLink = $('a.fbajax');
        fancyboxLink.removeClass("fancybox").addClass('nofancybox');
        fancyboxLink.on('click',function(){
            var phoneNumber = String($('.phone').eq(0).text());
            phoneNumber = phoneNumber.replace(/[^0-9]/g,'');
            location.href = 'tel:'+phoneNumber;
        });
    }
    $('.fancybox').fancybox();

    $('.fbajax').fancybox({
        'type': 'ajax',
        'href': $(this).attr('href')
    });

    $( ".selectmenu" ).selectmenu();
    $(".list span").click(function () {
        $(".list ul").toggle();
        $(".overlay").css('display', 'block');
    });
    $(".overlay").click(function () {
        $(".list ul").css('display', 'none');
        $(".overlay").css('display', 'none');
    });
// 			var widthContainer = $('.top .container').width();
// 			if(widthContainer<960){
// 				$('.reviews-list').masonry({
// 				  itemSelector: '.reviews-item',
// 				  columnWidth: 360
// 				});
// 			}else{
// 				$('.reviews-list').masonry({
// 				  itemSelector: '.reviews-item',
// 				  columnWidth: 400
// 				});
// 			}
    $(".menu-open").click(function () {
        $("#horizontal-multilevel-menu").toggle();
    });
    var str = "";
    str = $( "select option:selected" ).attr('atr');
    //$( ".count-ofis .blue" ).text(str + " " + declOfNum(str, ['офис', 'офиса', 'офисов']));
    /*$( "select" ).on('selectmenuchange', function (e,ui) {
     str = $( "select option:selected" ).attr('atr');
     $( ".count-ofis .blue" ).text(str + " " + declOfNum(str, ['офис', 'офиса', 'офисов']));
     })*/

    $(window).scroll(function(){
        var wind = $(this),
            scrollTop = wind.scrollTop();
        if(wind.width() < 960){
            if(scrollTop < 30){
                $('.header').css('top', (30-scrollTop) );
                $('.mobile-menu').css('top', (85-scrollTop)+ 'px' );
            }else{
                $('.header').css('top', 0 );
                $('.mobile-menu').css('top', 55 + 'px' );
            }
        }
    });

    // $('body').on('submit' , '.my_city',function(e) {
    //     e.preventDefault();
    //     var params = $(this).serialize();
    //     $.ajax({
    //             url:'',
    //             data:params,
    //             success: (data) => {
    //             $('.b-popup').fadeOut(300);
    // }
    // });
    // });

    $( ".selectcity" ).selectmenu({
        select: function( event, ui ) {
            $('.change_city').submit();
        }
    });

    BX.ready(function(){
        var input = BX("qplSKIW");
        if (input)
            new JsSuggest(input, 'pe:10,md5:,site:s1');
    });
});
