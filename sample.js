// Create an image in HTML with the ID "catimg"
// document.getElementById("catimg").style.display = "none";
function getcat() {
    console.log("getcat")
    let rURL = "http://aws.random.cat/meow";
    let r = new XMLHttpRequest();
    r.open("GET", rURL);

    r.responseType = "json";
    r.send();

    r.onload = function() {
        let jsonObj1 = r.response;
        let r2 = new XMLHttpRequest();
        console.log("get url", jsonObj1["file"])
        r2.open("GET", jsonObj1["file"]);
        r2.responseType = "json";
        r2.send();
    }

    r2.onload = function() {
        let jsonObj = r2.response;
        let img = document.getElementById("catimg");
        console.log(jsonObj)
        img.src = jsonObj["file"];
        img.style.display = "inline-block";
    }
    console.log("end getcat")
}
getcat();