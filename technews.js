const key = '098b6c2e88014ed2a7bfd6b9d81e304a'
const url =  `https://newsapi.org/v2/everything?q=gadget OR startup OR psychology OR personal app&sources=wired,buzzfeed,techcrunch&language=en&sortBy=publishedAt&apiKey=${key}`
const url2 = `https://newsapi.org/v2/everything?sources=buzzfeed&q=gadget&apiKey=${key}`
const travelurl = `https://newsapi.org/v2/everything?q="abandoned places"&apiKey=${key}`
const articlesDiv = document.querySelector(".articles")
const largeArticlesDiv = document.querySelector(".largeArticle")
const techLinkDiv = document.querySelector(".tech");
const travelLinkDiv = document.querySelector(".travel");

const recievedNews = (newsdata) => {
    articlesDiv.innerHTML = null;
    newsdata.articles.forEach((article, index) => {

    const enlargeArticle = () => {
        largeArticlesDiv.className = "large-news";
        largeArticlesDiv.innerHTML =`
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}"/>
        <p>${article.description}</p>
        `
}
      /*  if(index === 0) {
          largeArticlesDiv.className = "large-news";
		      largeArticlesDiv.innerHTML = `
			  <h2>${article.title}</h2>
			  <img src="${article.urlToImage}"/>
        `
      }*/


if (index < 9 && index > 0) {
			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `
			   <h2>${article.title}</h2>
			      <img src="${article.urlToImage}"/>
			         <p>${article.description}</p>
               <a href=${article.url}> Go to article! </a>`
      div.onclick = enlargeArticle;
      articlesDiv.appendChild(div)
      }
    })
}

const fetchTechNews = () => {
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
}
const fetchTravelNews = () => {
fetch(travelurl)
  .then(response => response.json())
  .then(recievedNews)
}


techLinkDiv.onclick = fetchTechNews;
travelLinkDiv.onclick = fetchTravelNews;

fetchTravelNews()

/*
const gadgetNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articlesSub")
    newsdata.articles.forEach((article, index) => {
      if (index < 9) {
        //Here we create and add html elements to our html file
        const div = document.createElement("div")
        div.className = "news"
        div.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.publishedAt}</p>
        <img src="${article.urlToImage}"/>
        <p>${article.description}</p>
        <a href="${article.url}"> Click to go to article </a>`
        articlesDiv.appendChild(div)
      }

    })
}
*/


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.


/*fetch(url2)
    .then(response => response.json())
    .then(gadgetNews)

*/
    ///*<p href="${article.url}"> Read more! </p>
