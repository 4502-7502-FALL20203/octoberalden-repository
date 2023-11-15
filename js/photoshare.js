document.addEventListener('DOMContentLoaded', function () {
    if (navigator.share) {
        const shareButton = document.getElementById('shareButton');
        const sharedPhoto = document.getElementById('sharedPhoto');

        shareButton.addEventListener('click', function () {

            navigator.share({
                title: 'Shared Photo',
                text: 'Check out this photo!',
                url: sharedPhoto.src
            })
            .then(() => console.log('Successfully shared'))
            .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        console.warn('Web Share API not supported');
    }
});
