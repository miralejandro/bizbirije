function updateCanvas(img) {
    // Template

    // Canva
    var c = document.getElementById("credential");
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, 502, 738);
};

function updateName(){
    text = document.getElementById("nameInput").value;
    ctx.font = "30px consolas";
    ctx.fillText(text,80,620);
}