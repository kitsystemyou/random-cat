function getcat() {
    let rURL = "https://aws.random.cat/meow";
    let r = new XMLHttpRequest();
    r.open("GET", rURL);
    r.responseType = "json";
    r.send();
    var img = document.getElementById("catimg");
    img.style.display = "block";
    let ldg = document.getElementById("loading");
    ldg.style.display = "block";

    r.onload = function() {
        let jsonObj = r.response;        

        let ldg = document.getElementById("loading");
        ldg.style.display = "none";

        let img = document.getElementById("catimg");
        img.style.display ="block";
        img.src = jsonObj["file"];
        };
}