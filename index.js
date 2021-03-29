const http = require('http');

function newsFetch(req,res) {
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('aae16687a89e4d709a45f167ff2da824');
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  newsapi.v2.topHeadlines({
    sources: 'bbc-news,the-verge',
    category: 'business',
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
  // To query /v2/everything
  // You must include at least one q, source, or domain
  newsapi.v2.everything({
    q: 'technology',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2021-02-27',
    to: '2021-03-27',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
  // To query sources
  // All options are optional
  newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});
res.write("server running");

res.end();
}

http.createServer(newsFetch).listen(8080);

