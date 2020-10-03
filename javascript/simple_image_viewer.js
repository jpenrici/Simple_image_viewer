update = function() {
    // URL
    var url = document.getElementById("url").value;
    if (url === "" || url === null || url === undefined) {
        console.log("Nothing to do ...");
        return
    }
    
    // SVG
    var svg = document.getElementById("svg_viewer");
    var svgDoc = svg.contentDocument;

    var original = svgDoc.getElementById("original");
    var mini = svgDoc.getElementById("mini");

    // Alterar URL
    var link = "xlink:href";
    original.setAttribute(link, url);
    mini.setAttribute(link, url);

    var arr = url.split("/");
    svgDoc.getElementById("label1").textContent = arr[arr.length - 1];
}

clear = function() {
    // Input
    document.getElementById('url').value = "";

    // SVG
    var svg = document.getElementById("svg_viewer");
    var svgDoc = svg.contentDocument;
    svgDoc.getElementById("label1").textContent = "";
    svgDoc.getElementById("label2").textContent = "";
    svgDoc.getElementById("label3").textContent = "";
}