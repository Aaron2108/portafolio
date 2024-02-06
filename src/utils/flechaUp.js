const flechaUp = () => {
    const up = document.getElementById('up')
    
        function scrollUp() {
            var currentScroll = document.documentElement.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(scrollUp);
                window.scrollTo(0, currentScroll - (currentScroll / 30));
            }
        }
        up.addEventListener("click", scrollUp());

    
}
export default flechaUp