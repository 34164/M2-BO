document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('loading');

    setTimeout(function () {
        document.body.classList.remove('loading');
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1000);
});
