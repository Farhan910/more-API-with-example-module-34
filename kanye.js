const loadKanye = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>loadQuotes(data))
}

const loadQuotes = quotes => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quotes.quote
}

fetch("https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});