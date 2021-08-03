function searchAnime(){
  const textSearch = document.querySelector(".search-anime").value;
  console.log(textSearch);
//https://cors-anywhere.herokuapp.com/
  fetch(`https://api.jikan.moe/v3/search/anime?q=Grand Blue`)
  .then((response) => {
      let data=response.json();       
      console.log(data)
    return data;
  }).then((res)=>{
   console.log(res);
  }).catch(()=>console.log("error"))
}