// select button by id

// create an array of images
const myImages = [
    {
    name:"image1",
    src: "https://images.unsplash.com/photo-1691493254643-1855ea6a342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
     {
    name: "image2",
    src: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
     },
     
     {
        name: "image3",
        src:"https://images.unsplash.com/photo-1691435664714-3a8def4491a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

     },
     {
        name:"image4",
        src: "https://images.unsplash.com/photo-1691319843283-24e1d9eeacab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
     }

];
let currentImageIndex = 0;

const clickButton= document.getElementById('btn');
const body = document.body;
body.style.backgroundImage =`url(${myImages[currentImageIndex].src})`;


clickButton.addEventListener('click', ()=>{
    currentImageIndex = getRandomImage();
   
    body.style.backgroundImage =`url(${myImages[currentImageIndex].src})`;
})



let getRandomImage = () =>{
    return Math.floor(Math.random() * myImages.length);

}
    




