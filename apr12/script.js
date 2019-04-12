function changeColor() {
    console.log(document.children);

    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000";

    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var json = JSON.parse(xmlhttp.responseText);
            console.log(json);
        }
    };
    xmlhttp.send();

    // function handles:
    // changeAfterPause() vs changeAfterPause?
    // setTimeout(changeAfterPause, 5000); 
    
    document.children[0].children[1].children[1].style.color = "#ff0000"

}

function changeAfterPause() {
    document.getElementById("awesome").innerHTML = "Yes!"
}

function foo() {
    console.log("called foo");
}

function bar(fh) {
    console.log("called bar");
    fh();
}

