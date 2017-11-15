(function($) {

  function init(options) {
    // This is the easiest way to have default options.
    // This is the easiest way to have default options.
    var settings = $.extend({
      // These are the defaults.
      bottom: true, // position of cookie hint
      html: "<strong>About Cookies on this site</strong> - This site uses Cookies to improve your online experience. By continuing to use this site without changing your cookie preferences we will assume that you are agreeing to our use of cookies. For more information, or to change your cookie preferences, visit our cookie policy.",
      button: true, // false
      buttonHtml: "<strong>close</strong>",
      backgroundColor: "#4286f4",
      color: "#ffffff",
      rowPadding: "0.5em",
      leftCellPadding: "0.5em 2em 0.5em 2em",
      rightCellPadding: "0.5em"
    }, options);

    function setCookie(cookiename, cookievalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cookiename + "=" + cookievalue + "; " + expires;
    }

    function getCookie(cookiename) {
      var name = cookiename + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    if (getCookie("acceptCookies") == 1) {
      // checks for a cookie named "acceptCookies"
      // if it was previously clicked the script ends here
      return;
    }

    if (settings.bottom === true || settings.bottom === false) {
      let html = "";
      html += '<div id="cookie-hint">';
      html += '<div id="cookie-hint-left">';
      html += String(settings.html);
      html += '</div>';
      html += '<div id="cookie-hint-right">';
      html += settings.buttonHtml;
      html += '</div>';
      html += '</div>';
      $("body").prepend(html);
      $("#cookie-hint").css({
        cursor: "default",
        position: "fixed",
        padding: settings.rowPadding,
        color: settings.color,
        backgroundColor: settings.backgroundColor,
        display: "table"
      });
      if (settings.bottom === true) {
        $("#cookie-hint").css({
          bottom: 0
        });
      } else {
        $("#cookie-hint").css({
          position: "relative",
          top: 0
        });
      };

      $("#cookie-hint-left").css({
        display: "table-cell",
        padding: settings.leftCellPadding
      });

      $("#cookie-hint-right").css({
        display: "table-cell",
        padding: settings.rightCellPadding
      });

      $("#cookie-hint").on('click', function() {
        $(this).hide();
        // set the cookie "acceptCookies" with value 1 expiring in 14 days
        setCookie("acceptCookies", 1, 14);
      })

    } else {
      console.error("set position to either \"top\" or \"bottom\"!");
      return;
    };

    return;
  };

  $.interactiveCookieHint = function(options) {
    init(options);
  }

}(jQuery));
