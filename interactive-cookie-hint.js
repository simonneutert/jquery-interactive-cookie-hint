class InteractiveCookieHint {
  constructor(settings) {
    this.settings = { ...this._defaultSettings(), ...settings };
    this._autoInit();
  }

  _defaultSettings() {
    return {
      bottom: true, // position of cookie hint
      html: "<strong>About Cookies on this site</strong> - This site uses Cookies to improve your online experience. By continuing to use this site without changing your cookie preferences we will assume that you are agreeing to our use of cookies. For more information, or to change your cookie preferences, visit our cookie policy.",
      button: true, // false
      buttonHtml: "<strong>close</strong>",
      backgroundColor: "#4286f4",
      color: "#ffffff",
      rowPadding: "0.5em",
      leftCellPadding: "0.5em 2em 0.5em 2em",
      rightCellPadding: "1em 2em",
    };
  }

  _autoInit() {
    const self = this;
    if (self._getCookie("acceptCookies") == 1) {
      // checks for a cookie named "acceptCookies"
      // if it was previously clicked the script ends here
      return;
    }

    if (self.settings.bottom === true || self.settings.bottom === false) {
      let html = document.createElement('div');
      html.id = 'cookie-hint'
      let innerContent = ''
      innerContent += '<div id="cookie-hint">';
      innerContent += '<div id="cookie-hint-left">';
      innerContent += String(self.settings.html);
      innerContent += "</div>";
      innerContent += '<div id="cookie-hint-right">';
      innerContent += self.settings.buttonHtml;
      innerContent += "</div>";
      html.innerHTML = innerContent
      document.querySelector("body").appendChild(html);
      
      const cookieHintElement = document.getElementById("cookie-hint");
      cookieHintElement.style.cursor = "default";
      cookieHintElement.style.position = "fixed";
      cookieHintElement.style.padding = self.settings.rowPadding;
      cookieHintElement.style.color = self.settings.color;
      cookieHintElement.style.backgroundColor = self.settings.backgroundColor;
      cookieHintElement.style.display = "table";
      cookieHintElement.style.zIndex = "999";

      if (self.settings.bottom === true) {
        cookieHintElement.style.bottom = 0;
      } else {
        cookieHintElement.style.position = "relative";
        cookieHintElement.style.top = 0;
      }

      const cookieHintLeft = document.getElementById("cookie-hint-left");
      cookieHintLeft.style.display = "table-cell";
      cookieHintLeft.style.padding = self.settings.leftCellPadding;

      const cookieHintRight = document.getElementById("cookie-hint-right");
      cookieHintRight.style.display = "table-cell";
      cookieHintRight.style.padding = self.settings.rightCellPadding;

      document.getElementById("cookie-hint").addEventListener("click", (e) => {
        document.getElementById('cookie-hint').style.display = 'none'; //or
        // set the cookie "acceptCookies" with value 1 expiring in 14 days
        self._setCookie("acceptCookies", 1, 14);
      });

      return;
    } else {
      console.error('set position to either "top" or "bottom"!');
      return;
    }
  }

  _setCookie(cookiename, cookievalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookiename + "=" + cookievalue + "; " + expires;
  }

  _getCookie(cookiename) {
    var name = cookiename + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
