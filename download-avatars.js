 var request = require("request");
 var fs = require( "fs");


function getRepoContributors(repoOwner, repoName, cb){
  var GITHUB_USER = "Nosmohta";
  var GITHUB_TOKEN = "614ba4b68f00f8095735e872add3368d9072a0cb";
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  const requestOptions = {
    url: requestURL,
    headers: {
      "user-agent": "GitHub Avatar Downloader - Student Project"
    }
  };

  request.get(requestOptions, (error, response, body) => {
    if (error) {
      console.log( "Error: ", err);
      return
    }
    let contributors = JSON.parse(body);
    let avatarURLs = [];
    contributors = contributors.map( (x) => avatarURLs.push( x.avatar_url))
    //console.log(avatarURLs)
    avatarURLs.map( ( x, i) => {
      //console.log( "avatars[x]:" , x , "i: ", i)
      downloadImageByURL( x , "./images/avatar" + i + ".jpg");
    })
  })
}


function downloadImageByURL(url, filePath) {
  request.get(url)
    .on( "error", (err) => {
      if (err) {
        console.log( "error :", err)
      }
    })
    .pipe(fs.createWriteStream(filePath));
}






getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});