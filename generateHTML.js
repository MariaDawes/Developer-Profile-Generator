const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "MediumSeaGreen",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "grey",
        headerBackground: "lightblue",
        headerColor: "grey",
        photoBorderColor: "black"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "grey",
        headerBackground: "crimson",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTML(data) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[data.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           align-text: center;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           text-align: center;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[data.color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, 
           .photo-header h3,
           .photo-header h5 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
           .row {
             display: flex;
             flex-wrap: nowrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[data.color].headerBackground};
             color: ${colors[data.color].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
           @media print { 
            body { 
              zoom: .75; 
            } 
            img {
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 50%;
            }
           }
        </style>
     </head>
     <body>
        <div class="wrapper">
           <div class="photo-header">
              <img src= "${data.avatar_url}" alt="Avatar"/>
              <h1>Hi!</h1>
              <h2>My name is ${data.name}!</h2> 
              <br>
              <h5>${data.company ? `Currently @ ${data.company}` : ""}</h5>
              
              <nav class="links-nav">
                    ${
                    data.location
                        ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/${
                        data.location
                        }"><i class="fas fa-location-arrow"></i> ${
                        data.location
                        }</a>`
                        : ""
                    }
                        <a class="nav-link" target="_blank" rel="noopener noreferrer" href="${
                    data.html_url
                    }"><i class="fab fa-github-alt"></i> GitHub</a>
                            ${
                    data.blog
                        ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="${
                        data.blog
                        }"><i class="fas fa-rss"></i> LinkedIn</a>`
                        : ""
                    }
              </nav>
           </div>
           <main>
            <div class="container">
              <div class="row">
                 <div class="col">
                    <h3>${data.bio ? `${data.bio}` : ""}</h3>
                 </div>
               </div>
                          
              <div class="row">
                    <div class="col card">
                             <h3>Public Repositories</h3>
                             <h5>${data.public_repos}</h5>
                    </div>
                        
                   <div class="col card">
                             <h3>Followers</h3>
                             <h5>${data.followers}</h5>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col card">
                            <h3>GitHub Stars</h3>
                            <h5>${data.public_gists}</h5>
                    </div>
                 
                     <div class="col card">
                            <h3>Following</h3>
                            <h5>${data.following}</h5>
                     </div>
                </div>
              
            </div>
           </main>
        </div>
     </body>
  </html>`;
}

module.exports = generateHTML;