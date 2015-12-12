Scrolling needs:
- as the page is scrolled down, the background colour of .nav-bar needs to fade in, and then change from gradient to solid white when it is below the hero image.
- as the page is scrolled down the opacity of .hero-content needs to reduce to 0 (by the time the nav bar hits the outlined box)
- as the page scrolls to the same point as the .nav-bar requirement, the value of .hero-backgound 'background-position-y' needs to change from -108 to -158

Should implement a smooth-scrolling option (https://github.com/cferdinandi/smooth-scroll?) for navigation to anchors on the page due to the single-page nature of the site.

When search icon is clicked, the search sidebar should be shown.
When :focus is lost from the search sidebar, the sidebar should close.
