function scrollToElement(id) {
    const el = document.getElementById(id);
    const top = el.offsetTop;
    window.scrollTo(0, top);
}