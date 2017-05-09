 var request = require("request");
 var fs = require( "fs");


let args = process.argv.slice(2)
if(!(args[0]&&args[1])) {
   console.log("Please provide two valid arguments.");
   console.log("Eg. : node downloaded-avatars.js jquery jquery");
   return;
  }

console.log(args);

function getRepoContributors(repoOwner, repoName){

  const GITHUB_USER = "Nosmohta";
  const GITHUB_TOKEN = "614ba4b68f00f8095735e872add3368d9072a0cb";
  const requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + args[0] + '/' + args[1] + '/contributors';

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
    avatarURLs.map( ( x, i) => {
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

getRepoContributors(...args);


