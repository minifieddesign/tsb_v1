// navOverlay
  function openNav() {
      document.getElementById("navOverlay").style.width = "100%";
      $('#footer').css('display', 'none');
  }
  function closeNav() {
      document.getElementById("navOverlay").style.width = "0%";
      $('#footer').css('display', 'block');
  }