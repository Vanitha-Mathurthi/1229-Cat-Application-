let a = document.getElementById("cat")
let b = document.getElementById("dark")
let c = document.getElementById("on")
let d = document.getElementById("off")
function Off() {
    b.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    c.style.backgroundColor = "red"
    d.style.backgroundColor = "green"
}
function on() {
    b.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    c.style.backgroundColor = "green"
    d.style.backgroundColor = "red"

}


