
var key = "?key=a230ab5c808142b0b95c37142d8beda4";
//var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + searchTerm + numberOfRecords + beginDate + endDate  +  key;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + 'cats' +  key;


//var searchTerm = '?q' + $('.js-search').val();
//var numberOfRecords = '?fl' + $('').val();
//var beginDate = '?begin_date' + $('').val();
//var endDate = '?end_date' + $('').val();

$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

//Headline

//response.docs[i].headline.main

//Author

//Date

//Url

//response.docs[i].snippet