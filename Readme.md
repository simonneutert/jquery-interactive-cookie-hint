# A Cookie Based Interactive Cookie Hint Generator

Comes in two flavors: vanilla and jQuery

## Vanilla JS

``` html
<script>
  const cookieHintSettings = {
      bottom: true, // position of cookie hint
      html: "<strong>About Cookies on this site</strong> - This site uses Cookies to improve your online experience. By continuing to use this site without changing your cookie preferences we will assume that you are agreeing to our use of cookies. For more information, or to change your cookie preferences, visit our cookie policy.",
      button: true, // false
      buttonHtml: "<strong>close</strong>",
      backgroundColor: "#4286f4",
      color: "#ffffff",
      rowPadding: "0.5em",
      leftCellPadding: "0.5em 2em 0.5em 2em",
      rightCellPadding: "1em 2em",
    }
  new InteractiveCookieHint(cookieHintSettings)
</script>
```

## With jQuery

I know, it sounds crazy :wink:

* needs jQuery >= 2.x

**CSS Framework independent!**

### Use it. Use it, like there's no tomorrow!

``` html
<script>
  jQuery(document).ready(function($) {
    $.interactiveCookieHint({
      bottom: true, // position of cookie hint
      html: "<strong>About Cookies on this site</strong> - This site uses Cookies, you guessed it.",
      button: true, // false
      buttonHtml: "<strong>shut it!</strong>",
      backgroundColor: "#4286f4",
      color: "#ffffff",
      rowPadding: "0.5em",
      leftCellPadding: "0.5em 2em 0.5em 2em",
      rightCellPadding: "0.5em"
    });
  });
</script>
```

## Pull Requests / Enhancements

**yes, please :octocat:**
