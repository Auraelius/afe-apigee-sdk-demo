// The function to be tested
function saveWord(entry){

  var client = new Usergrid.Client({
    orgName:"azimmerman",
    appName:"sandbox",
    logging: true,
    buildCurl: true
  });

  var options = {
    type:"entry",
    word: entry.word,
    def: entry.def
  };

  client.createEntity(options, function(error, result){
    if(error) {
      $("#response").append("There was an error!");
    } else {
      $("#response").append(
        "Word saved! Its uuid on our server is: " + result.entities[0].uuid
        + "<br/>The word you saved was: "         + result.entities[0].word
        + "<br/>It's definition is: "             + result.entities[0].def
      );
    }
  });
}

// Shorthand for $( document ).ready()
$(function() {
  // The test
  var entry = {};
  entry.word = "Foo";
  entry.def = "See 'Bar'.";
  saveWord(entry);
});
