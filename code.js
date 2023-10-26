        const scrollSpeed = 1; // shange this to adjust the speed
        let scrollPosition = 0;

        function autoScroll() {
            window.scrollBy(0, scrollSpeed);
            scrollPosition += scrollSpeed;

            // u can adjust the scroll distance or conditions here
            if (scrollPosition < 2000) {
                requestAnimationFrame(autoScroll);
            }
        }

        // start auto-scrolling when the page loads
        window.onload = () => {
            autoScroll();
        };
