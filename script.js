const imageConatainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
    imagesNum = 10;
    addNewImages();
});

function addNewImages(){

    for (let index = 0; index < imagesNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageConatainerEl.appendChild(newImgEl);
    }
}
