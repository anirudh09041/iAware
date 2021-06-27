let newsAccordion = document.getElementById('newsAccordion');   //news container

fetch('https://gnews.io/api/v4/search?q=health&lang=en&token=09f9da2dd17c9a57e04160587fc5b4ca')
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let newsHtml = "";

        for (i = 0; i <= 9; i++) {
            // document.write(data.articles[i].description);                       
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${i + 1}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i + 1}"
                    aria-expanded="true" aria-controls="collapse${i + 1}">
                   ${i + 1 + ". "} ${data.articles[i].title}
                </button>   
            </h2>
            <div id="collapse${i + 1}" class="accordion-collapse collapse" aria-labelledby="heading${i + 1}"
                data-bs-parent="#accordionExample">
                <div class="accordion-body"> ${data.articles[i].content}. <a href = '${data.articles[i].url}' target = "_blank">Read more</a></div>
            </div>
           </div>`

            newsHtml += news;
        }
        newsAccordion.innerHTML = newsHtml;
    });







