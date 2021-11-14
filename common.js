
    var scroll_distance_fromtop;                                       // distance scrolled from top of page used for nav position function

    if ( document.title == "Guiding Light School"){
      var header_slideshow_pics_array =
      ["url(assets/banner_title.png)", "url(assets/banner_hiring.png)", "url(assets/banner_adhs.png)", "url(assets/banner_donate.png)", "url(assets/banner_enroll.png)", "url(assets/banner_facebook.png)"];
      var header_slideshow_links_array =
      ["index.html", "https://www.facebook.com/GuidingLightChristianEducationalCenter/posts/448300146573901", "https://hsapps.azdhs.gov/ls/sod/Provider.aspx?ProviderName=guiding%20light", "pages/donation.html", "pages/enroll.html", "https://www.facebook.com/GuidingLightChristianEducationalCenter/"];
    }
    else{
      var header_slideshow_pics_array =
      ["url(../assets/banner_title.png)", "url(../assets/banner_hiring.png)", "url(../assets/banner_adhs.png)", "url(../assets/banner_donate.png)", "url(../assets/banner_enroll.png)", "url(../assets/banner_facebook.png)"];
      var header_slideshow_links_array =
      ["../index.html", "https://www.facebook.com/GuidingLightChristianEducationalCenter/posts/448300146573901", "https://hsapps.azdhs.gov/ls/sod/Provider.aspx?ProviderName=guiding%20light", "donation.html", "enroll.html", "https://www.facebook.com/GuidingLightChristianEducationalCenter/"];
    }
  
    var header_slideshow_counter = 0;
    var bool_header_slideshow_autoscroll = true;

    var testimony_slideshow_array =
      ["'Guiding Light has a staff that is nice and caring!! They go above and beyond!! Thank you Guiding Light staff!!!'", "'It's great to see such wonderful people providing such a great and important service ... to ensure that the little folks of Havasu are able to get a loving and guided education!'", "'We love Guiding Light! My son has learned and grown so much since attending.'", "'Thank you so much for making my girls feel at home.'", "'Wonderful staff that genuinely cares about their students and families! My daughter loves this school!'", "'25 years ago my children went to GLCEC and now my grandchildren go there and you have been one of the biggest blessigs in our lives ... for many years.'"];
    var testimony_slideshow_caption_array =
      [" - Tina V", " - Mo S.", " - Melanie N.", " - Al L.", " - Jodie C.", " - Rhonda F."];
    var testimony_slideshow_counter = 0;
    var bool_testimony_slideshow_autoscroll = true;

    var bool_mobile_nav_display = false;
    var bool_mobile_nav_more_display = false;

    function header_slideshow_counter_decrease() {                     // scroll left on header slideshow
      header_slideshow_counter--;
      if (header_slideshow_counter < 0) {
        header_slideshow_counter = (header_slideshow_pics_array.length - 1);
      }
      sync_slideshows();
    }

    function header_slideshow_counter_increase() {                     // scroll right on header slideshow
      header_slideshow_counter++;
      if (header_slideshow_counter >= header_slideshow_pics_array.length) {
        header_slideshow_counter = 0;
      }
      sync_slideshows();
    }

    function header_slideshow_counter_auto_increase() {                // scroll right on header slideshow
      header_slideshow_counter++;
      if (header_slideshow_counter >= header_slideshow_pics_array.length) {
        header_slideshow_counter = 0;
      }
      sync_slideshows();
    }

    if (bool_header_slideshow_autoscroll == true) {                    // autoscroll header slideshow
      setInterval(header_slideshow_counter_auto_increase, 8000);
    }
    else {
    }

    function testimony_slideshow_counter_auto_increase() {             // scroll right on testimony slideshow
      testimony_slideshow_counter++;
      if (testimony_slideshow_counter >= testimony_slideshow_array.length) {
        testimony_slideshow_counter = 0;
      }
      sync_slideshows();
    }

    if (bool_testimony_slideshow_autoscroll == true) {                 // autoscroll testimony slideshow
      setInterval(testimony_slideshow_counter_auto_increase, 8000);
    }
    else {
    }

    function sync_slideshows() {
      document.getElementById('header_slideshow_pics').style.backgroundImage = header_slideshow_pics_array[header_slideshow_counter];
      document.getElementById('header_slideshow_links').href = header_slideshow_links_array[header_slideshow_counter];
      document.getElementById('testimony_slideshow').textContent = testimony_slideshow_array[testimony_slideshow_counter];
      document.getElementById('testimony_slideshow_caption').textContent = testimony_slideshow_caption_array[testimony_slideshow_counter];
      document.getElementById('testimony_slideshow').style.animation = "footer_fadeOutthenIn ease 2s forwards";
      document.getElementById('testimony_slideshow_caption').style.animation = "footer_fadeOutthenIn ease 2s forwards";
    }

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

    function openForm_private() {
      document.getElementById("privateForm").style.display = "block";
      document.getElementById("backgroundForm").style.display = "block";
    }

    function openForm_enroll() {
      document.getElementById("enrollForm").style.display = "block";
      document.getElementById("backgroundForm").style.display = "block";
    }

    function closeForms() {
      document.getElementById("privateForm").style.display = "none !important";
      document.getElementById("enrollForm").style.display = "none !important";
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

    function validateForm_enroll() {
        var k = document.forms["enrollcontactform"]["child_name"].value;
        if (k == "") {
          alert("Please provide your child's name.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["child_birthdate"].value;
        if (k == "") {
          alert("Please provide a birthdate for your child.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["child_gender"].value;
        if (k == "") {
          alert("Please provide a gender for your child.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["child_pt"].value;
        if (k == "") {
          alert("Please indicate if your child is potty trained or not.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["name"].value;
        if (k == "") {
          alert("Please include your name.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["phone"].value;
        if (k == "") {
          alert("Please provide your phone number.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["email"].value;
        if (k == "") {
          alert("Please provide your email address.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["program"].value;
        if (k == "") {
          alert("Please include the program you are interested in for the child.");
          return false;
        }
        var k = document.forms["enrollcontactform"]["date_needed"].value;
        if (k == "") {
          alert("Please include the date you will need this by.");
          return false;
        }
      }

      function private_validateForm() {
        var k = document.forms["privatecontactform"]["private_name"].value;
        if (k == "") {
          alert("Please provide a name or alias.");
          return false;
        }
        var k = document.forms["privatecontactform"]["private_message"].value;
        if (k == "") {
          alert("Please include your desired comment.");
          return false;
        }
      }
  
