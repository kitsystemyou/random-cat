function getcat() {
    console.log("getcat");
    let rURL = "https://aws.random.cat/meow";
    let r = new XMLHttpRequest();
    r.open("GET", rURL);

    r.responseType = "json";
    r.send();

    // let r2 = new XMLHttpRequest();
    // r.onload = function() {
    //     let jsonObj1 = r.response;
    //     console.log("get url", jsonObj1["file"]);
    //     // r2.responseType = "json";
    //     r2.open("GET", jsonObj1["file"]);
    //     r2.setRequestHeader("Access-Control-Allow-Origin", "*");
    //     // r2.setRequestHeader("Accept", "*/*");
    //     r2.send();
    // };

    r.onload = function() {
        let jsonObj = r.response;
        let img = document.getElementById("catimg");
        console.log("link", jsonObj["file"]);
        img.src = jsonObj["file"];
        // img.style.display = "inline-block";
    };
    console.log("end getcat");
}
// getcat();