
    function collapseNavbar() {
      var navbarCollapse = document.getElementById('navbarSupportedContent');
      navbarCollapse.classList.remove('show');
    }

// COLLAPSE

    function showBio() {
      document.getElementById("bio-section").style.display = "block";
      document.getElementById("hobbies-section").style.display = "none";
      document.getElementById("photos-section").style.display = "none";
      document.getElementById("videos-section").style.display = "none";
    }

    function showHobbies() {
      document.getElementById("bio-section").style.display = "none";
      document.getElementById("hobbies-section").style.display = "block";
      document.getElementById("photos-section").style.display = "none";
      document.getElementById("videos-section").style.display = "none";
    }

    function showPhotos() {
      document.getElementById("bio-section").style.display = "none";
      document.getElementById("hobbies-section").style.display = "none";
      document.getElementById("photos-section").style.display = "block";
      document.getElementById("videos-section").style.display = "none";
    }

    function showVideos() {
      document.getElementById("bio-section").style.display = "none";
      document.getElementById("hobbies-section").style.display = "none";
      document.getElementById("photos-section").style.display = "none";
      document.getElementById("videos-section").style.display = "block";
    }

    // HOME
function showHome() {
  document.getElementById("bio-section").style.display = "none";
  document.getElementById("hobbies-section").style.display = "none";
  document.getElementById("photos-section").style.display = "none";
  document.getElementById("videos-section").style.display = "none";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



