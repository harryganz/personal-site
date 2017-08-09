(function(window, document) {
  var smScreen = 16 * 24; // Small screen in 24em where 1em is 16px

  // Navbar should be visible when screen width greater than
  // smScreen or when expand is true
  function setNavBarVisibility(width, expand, elements) {
    if (elements.navBar) {
      if (width > smScreen) {
        elements.navBar.style.display = 'block';
      } else {
          if (expand) {
            elements.navBar.style.display = 'block';
          } else {
            elements.navBar.style.display = 'none';
          }
      }
    }
  }

  // Icon should always be visible when screen is smaller than smScreen
  // and never be visible when screen width greater than smScreen
  function setNavIconVisibility(width, elements) {
    if (width < smScreen && elements.navIcon) {
      elements.navIcon.style.display = 'block';
    } else if (elements.navIcon){
      elements.navIcon.style.display = 'none';
    }
  }

  window.onload = function() {
    var expand = false; // Initially not expanded
    var elements = {
      navBar: document.getElementById('nav-bar'),
      navIcon: document.getElementById('nav-icon')
    };

    // Set initial visibility
    var width = window.innerWidth;
    setNavBarVisibility(width, expand, elements);
    setNavIconVisibility(width, elements);

    // Set visibility for navbar and icon on resize
    window.addEventListener('resize', function() {
      var width = window.innerWidth;
      setNavBarVisibility(width, expand, elements);
      setNavIconVisibility(width, elements);
    });

    // Set visibility for navbar and icon on icon click
    elements.navIcon.addEventListener('click', function() {
      expand = !expand;
      var width = window.innerWidth;
      setNavBarVisibility(width, expand, elements);
    });
  }
})(window, document)
