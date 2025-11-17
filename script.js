document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'video-poster'
    const videoPosters = document.querySelectorAll('.video-poster');

    // Add a click event listener to each video poster
    videoPosters.forEach(poster => {
        poster.addEventListener('click', function () {
            // Get the video ID from the 'data-video-id' attribute
            const videoId = this.getAttribute('data-video-id');

            if (videoId) {
                // Construct the YouTube iframe HTML
                const iframeHtml = `
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                `;

                // Replace the content of the clicked poster with the iframe
                this.innerHTML = iframeHtml;

                // Optionally, add a class to the poster to ensure the iframe takes up the full space
                this.classList.add('video-playing');
            }
        });
    });
});