let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let nothinButton = document.getElementById("nothin-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let nothinDiv = document.getElementById("nothin-div");
let pCount = 0;
let imgCount = 0;
let nothinCount = 0;

pButton.onclick = function () {
    imgDiv.style.display = "none"; 
    pDiv.style.display = "block";
    
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Yes Yeat";
    newParagraph.style.backgroundColor = "blue";
    newParagraph.style.color = "red"; 
    pDiv.appendChild(newParagraph);
    pCount++;
    document.getElementById("pCount").textContent = pCount;
};

imgButton.onclick = function () {
    pDiv.style.display = "none";
    imgDiv.style.display = "block";

    let newImage = document.createElement("img");
    newImage.src = "https://th.bing.com/th/id/R.094ef6eac4ff43422958b549db9fbf49?rik=F1tm5ft8%2fZZu7A&pid=ImgRaw&r=0"; 
    newImage.style.width = "100px"; 
    newImage.style.height = "100px"; 
    imgDiv.appendChild(newImage);
    imgCount++;
    document.getElementById("imgCount").textContent = imgCount;
};

nothinButton.onclick = function () {
    nothinCount++;
    document.getElementById("nothinCount").textContent = nothinCount;
};
