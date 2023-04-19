// var charactersContainer = document.querySelector('.characters');
      var charactersBtn = document.querySelector(".characters a");
      var charactersScroll = document.querySelector("section.characters-scroll");

      // Click to view individual characters
      charactersBtn.addEventListener("click", function (e) {
        // charactersContainer.style.transform = 'translateX(-100vw)';
        var allSections = document.querySelectorAll("section").forEach((item) => (item.style.transform = "translateX(-100vw)"));
        charactersScroll.style.transform = "translateX(0vw)";
        charactersScroll.classList.add("active");
        e.preventDefault();

        // Code for horizontal scrolling
        const horizontalScrollingMediaQuery = window.matchMedia("(min-width: 768px)");
        if (horizontalScrollingMediaQuery.matches) {
          var scrollContainerActive = document.querySelector(".active .row");
          if (scrollContainerActive) {
            scrollContainerActive.addEventListener("scroll", (event) => {
              scrollContainerActive.classList.add("active");
              let windowScroll = scrollContainerActive.scrollLeft;
              let windowWidth = scrollContainerActive.scrollWidth - scrollContainerActive.clientWidth;
              let scrollAmount = (windowScroll / windowWidth) * 100;
              document.querySelector(".h-progress").style.width = scrollAmount + "%";
            });

            scrollContainerActive.addEventListener("wheel", (evt) => {
              evt.preventDefault();
              scrollContainerActive.scrollLeft += evt.deltaY;
              scrollContainerActive.scrollLeft += evt.deltaX;
              console.log("working");
            });
          }
        }
      });

      // Click to go back to main page
      var charactersScrollCloseBtn = document.querySelector(".characters-scroll .close-button");

      charactersScrollCloseBtn.addEventListener("click", function (e) {
        // charactersContainer.style.transform = 'translateX(0vw)';
        var allSections = document.querySelectorAll("section").forEach((item) => (item.style.transform = "translateX(0vw)"));
        charactersScroll.style.transform = "translateX(100vw)";
        charactersScroll.classList.remove("active");
        e.preventDefault();
      });
