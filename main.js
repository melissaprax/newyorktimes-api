
//var key = "a230ab5c808142b0b95c37142d8beda4";
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + searchTerm + numberOfRecords + beginDate + endDate  +  key;

let searchTerm = "cats";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ec20b4968d3c466f96ff77fe3f2c70d8&q=" + searchTerm;

// var searchTerm = '&q=' + $('.js-search').val();
//var numberOfRecords = '&fl' + $('.js_number').val();
// var beginDate = '&begin_date' + $('.js_start').val();
// var endDate = '&end_date' + $('.js_end').val();

$('.search').on('click', function(){ 
$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function(result) {
  console.log(result);
  for (let i = 0; i < 5; i++) {
    let contentDiv = $('<div>');
    let p = $('<p>').text(result[i] + "-" + response.docs[i].headline.main);
    contentDiv.append(p);
    $('.articles').append(contentDiv);

  }

});
});
//Headline

//response.docs[i].headline.main

//Author

//Date

//Url

//response.docs[i].snippet