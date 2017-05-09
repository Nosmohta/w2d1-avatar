const request = require("request");
const fs = require( "fs");
const args = process.argv.slice(2);


function getRepoContributors(repoOwner, repoName) {
  const GITHUB_USER = "Nosmohta";
  const GITHUB_TOKEN = "614ba4b68f00f8095735e872add3368d9072a0cb";
  const requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  const requestOptions = {
    url: requestURL,
    headers: { "user-agent": "GitHub Avatar Downloader - Student Project"}
  };

  if(!(repoOwner||repoName)) {
   console.log("Please provide two valid arguments.");
   console.log("Eg. : node downloaded-avatars.js jquery jquery");
   return;
  }

  request.get(requestOptions, (error, response, body) => {
    if (error) {
      console.log( "Error: ", err);
      return;
    }
    let avatarURLs = [];
    let contributors = JSON.parse(body).map( (x) => avatarURLs.push( x.avatar_url))
    avatarURLs.map( ( x, i) => {
      downloadImageByURL( x , "./images/avatar" + i + ".jpg");
    })
  });
}


function downloadImageByURL(url, filePath) {
  request.get(url)
    .on( "error", (err) => {
      if (err) {
        console.log( "error :", err);
        return;
      }
    })
    .pipe(fs.createWriteStream(filePath));
}


getRepoContributors(...args);


