<<<<<<< HEAD
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let loader = document.getElementById("loader");
let size = document.getElementById("size");
let downloadBtn = document.getElementById("downloadBtn");
let themeBtn = document.getElementById("themeBtn");

function generateQR(){

    if(qrText.value.trim() === ""){
        alert("Please enter text or URL");
        return;
    }

    loader.style.display = "block";

    let qrURL =
    `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}x${size.value}&data=${encodeURIComponent(qrText.value)}`;

    qrImage.src = qrURL;

    qrImage.onload = function(){

        loader.style.display = "none";

        qrImage.style.display = "block";

        downloadBtn.href = qrURL;
        downloadBtn.style.display = "inline-block";
    };
}

function copyText(){

    if(qrText.value.trim() === ""){
        alert("Nothing to copy!");
        return;
    }

    navigator.clipboard.writeText(qrText.value);

    alert("Text copied!");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
    else{
        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }
});

qrText.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        generateQR();
    }
});
=======
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {

    if(qrText.value.length > 0){

        qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + encodeURIComponent(qrText.value);

    }
    else{
        alert("Please enter text");
    }
}
>>>>>>> 7b9564659127bce8469a65fc79de89b593ccccb1
