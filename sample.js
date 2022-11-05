function getcat() {
    let rURL = "https://aws.random.cat/meow";
    let r = new XMLHttpRequest();
    r.open("GET", rURL);
    r.responseType = "json";
    r.send();

    r.onload = function() {
        let jsonObj = r.response;
        let img = document.getElementById("catimg");
        img.src = jsonObj["file"];
    };
}