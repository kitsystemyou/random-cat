function getcat() {
    let rURL = "https://aws.random.cat/meow";
    let r = new XMLHttpRequest();
    r.open("GET", rURL);
    r.responseType = "json";
    r.send();
    var img = document.getElementById("catimg");
    img.style.display = "none";
    let ldg = document.getElementById("loading");
    ldg.style.display = "block";

    r.onload = function() {
        let jsonObj = r.response;
        let img = document.getElementById("catimg");
        img.style.display ="block";
        img.src = jsonObj["file"];
        };
}

window.onload = function (){
    let img = document.getElementById("catimg");
    console.log(img)
    img.addEventListener('load', () => {
        let ldg = document.getElementById("loading");
        if (!ldg){return false}
        ldg.style.display = "none";
    }, false);
}
