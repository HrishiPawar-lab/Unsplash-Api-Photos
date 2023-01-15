const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];
function loadingImages() {
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";
  let p1 = fetch(url);
  p1.then((response) => {
    return response.json();
  }).then((data) => {
    let results = data.results;
    for (let i = 0; i < results.length; i++) {
      let images = document.createElement("img");
      images.src = data.results[i].urls.small
      images.classList.add("img");  
      grid.appendChild(images);
      images.addEventListener("dblclick",function(){
        window.open(data.results[i].links.download,"_blank")
      })
    }
  });
  
}

document.addEventListener("keydown",function(event){
    if(event.key=='Enter'){
        loadingImages()
    }
})
daynight.addEventListener("click",function(){
       if(document.body.style.backgroundColor=="white" || document.body.style.color=="black"){
         document.body.style.backgroundColor="black"
          document.body.style.color=="whitesmoke"
       }
        else if(document.body.style.backgroundColor=="black" || document.body.style.color=="white"){
         document.body.style.backgroundColor="whitesmoke"
          document.body.style.color=="black"
       }
})//