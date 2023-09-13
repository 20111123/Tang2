function toggle(el) {
    var display = document.getElementById(el).stylecss.display;
    if (display == "none") {
        document.getElementById(el).stylecss.display = 'block';
    }
    else {
        document.getElementById(el).stylecss.display = 'none';
    }
}
