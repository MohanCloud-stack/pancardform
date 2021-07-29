function searchAnime(){
    const textSearch = document.querySelector(".search-anime").value;
    console.log(textSearch);
  //https://cors-anywhere.herokuapp.com/
    fetch(`https://api.jikan.moe/v3/anime/1/${textSearch}`)
    .then((response) => {
        let data  ;       
        if(response.status === 200) {
             data = response.json();
            }
        console.info(data)
      return data;
    }).then((res)=>{
     console.log(res);
    })
    .catch(()=> console.log("Error"));
  }