
    var scroll_distance_fromtop;                                       // distance scrolled from top of page used for nav position function

    window.onbeforeunload = function () {                              // scroll to top of page on load
      window.scrollTo(0, 0);
    }

    $(document).ready(function () {
      var scrollTop = $(window).scrollTop();                           // find distance from top of page
      var navmenu = document.getElementById("link_menu");              // put link menu element in a variable
      var navelementOffset = navmenu.offsetTop;                        // find offset of link menu element

      scroll_distance_fromtop = (navelementOffset - scrollTop);        // calculate link menu from top of page
    });

    $(window).scroll(function () {                                     // change nav position state based on scroll distance
      if ($(window).width() <= 1099) { }                               // do nothing on mobile
      else {
        var activeTop = $(window).scrollTop();                         // find distance from top of page & store it 
        if (activeTop <= (scroll_distance_fromtop)) {                  // release link menu on adequate scroll distance
          $('.link_menu').css("position", "relative");
          $('.link_menu').css("left", "0%");
          $('.link_menu').css("transform", "unset");
        }
        else {
          $('.link_menu').css("position", "fixed");                    // anchored link menu to page
          $('.link_menu').css("top", "0");
          $('.link_menu').css("left", "50%");
          $('.link_menu').css("transform", "translate(-50%, 0)");
        }
      }
    });

    function toggleNavBar() {
      if (bool_mobile_nav_display == false) {
        document.getElementById("link_menu").style.display = "flex";
        document.getElementById("mobile_nav_button_iconify").innerHTML = "<span class='iconify' data-icon='oi:x' align='center' alt='Close Menu' data-inline='false'> </span>";
        bool_mobile_nav_display = true;
      }
      else {
        document.getElementById("link_menu").style.display = "none";
        document.getElementById("mobile_nav_button_iconify").innerHTML = "<span class='iconify' data-icon='oi:menu' alt='Navigation Menu' data-inline='false'> </span>";
        bool_mobile_nav_display = false;
      }
    }

    function toggleNavMoreLinks() {
      if (bool_mobile_nav_more_display == false) {
        document.getElementById("nav_drop_menu").style.display = "flex";
        document.getElementById("nav_drop_html").innerHTML = "Close";
        document.getElementById("nav_drop_iconify").innerHTML = "<span class='iconify' width='15px' data-icon='oi:caret-top' data-inline='false'> </span>";
        bool_mobile_nav_more_display = true;
      }
      else {
        document.getElementById("nav_drop_menu").style.display = "none";
        document.getElementById("nav_drop_html").innerHTML = "Useful Links";
        document.getElementById("nav_drop_iconify").innerHTML = "<span class='iconify' width='15px' data-icon='oi:caret-bottom' data-inline='false'> </span>";
        bool_mobile_nav_more_display = false;
      }
    }

    $(window).resize(function () {                                     // multiple nav state display issue fixes
      if ($(window).width() <= 1099) {
        document.getElementById("link_menu").style.display = "none";
        document.getElementById("nav_drop_menu").style.display = "none";
        $('.link_menu').css("position", "fixed");
        bool_mobile_nav_display = false;
        bool_mobile_nav_more_display = false;
        $('.link_menu').css("left", "50%");
        $('.link_menu').css("transform", "translate(-50%, 0)");
      }
      else {
        document.getElementById("link_menu").style.display = "flex";
        document.getElementById("nav_drop_menu").style.display = "none";
        bool_mobile_nav_more_display = false;
      }
      document.getElementById("mobile_nav_button_iconify").innerHTML = "<span class='iconify' data-icon='oi:menu' alt='Navigation Menu' data-inline='false'> </span>";
      document.getElementById("nav_drop_html").innerHTML = "Useful Links";
      document.getElementById("nav_drop_iconify").innerHTML = "<span class='iconify' width='15px' data-icon='oi:caret-bottom' data-inline='false'> </span>";
    });

    function openForm_contact() {
      document.getElementById("contactForm").style.display = "block";
      document.getElementById("backgroundForm").style.display = "block";
    }

    function closeForms() {
      document.getElementById("contactForm").style.display = "none !important";
      document.getElementById("backgroundForm").style.display = "none !important";
    }

    function validateForm() {
      var k = document.forms["generalcontactform"]["name"].value;
      if (k == "") {
        alert("Please provide your name.");
        return false;
      }
      var k = document.forms["generalcontactform"]["phone"].value;
      if (k == "") {
        alert("Please provide your phone number.");
        return false;
      }
      var k = document.forms["generalcontactform"]["email"].value;
      if (k == "") {
        alert("Please provide your email address.");
        return false;
      }
      var k = document.forms["generalcontactform"]["message"].value;
      if (k == "") {
        alert("Please include your desired comment.");
        return false;
      }
    }
