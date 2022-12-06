fs = require('fs');
const fetch = require('node-fetch')

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
//import fetch from 'node-fetch';
async function mehet(){

        app.use(
            "/", 
            express.static(__dirname) 
        );
    app.use(bodyParser.urlencoded({ extended: true }))
    
    await app.get("/", async (req, res) => {
        const response_img = "";
        const name = "Santa Maria";
        async function aha() {
            this.response_img = await fetch('https://picsum.photos/1920/1080');
            this.name_src = await fetch('https://randomuser.me/api/');
            $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: function(data) {
                  console.log(data);
                }
              });
                    
            this.name = this.name_src.body
            console.log(this.name)

            //const body = await response.text();

            console.log(this.response_img.url);
            // server css as static
            
            // get our app to use body parser 
        }
        await aha()
        res.write(`<!doctype html>
        <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
        <title>RolePlay Game</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"><script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"crossorigin="anonymous"></script><script defer src="script.js"></script>
        <link rel="stylesheet" href="style.css"></head><body style="background: url('${this.response_img.url}');"><div class="container"><div class="row"><div class="col-md-4"><div id="profile-pic"><img style="display: block;-webkit-user-select: none;margin: auto;width: 200px; height: 200px background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://esports.eldesmarque.com/wp-content/uploads/2019/12/Braum-LoL.jpg"></div><h1>Santa Maria</h1></div><div class="col-md-4"><h2>Stats:</h2><table><tr><th>Strength</th><td id="strength">5</td><td><button onclick="Add('strength')">+</button></td><td><button onclick="Remove('strength')">-</button></td></tr><tr><th>Agility</th><td id="agility">5</td><td><button onclick="Add('agility')">+</button></td><td><button onclick="Remove('agility')">-</button></td></tr><tr><th>Endurance</th><td id="endurance">5</td><td><button onclick="Add('endurance')">+</button></td><td><button onclick="Remove('endurance')">-</button></td></tr><tr><th>Intellect</th><td id="intellect">5</td><td><button onclick="Add('intellect')">+</button></td><td><button onclick="Remove('intellect')">-</button></td></tr><tr><th>Speed</th><td id="speed">5</td><td><button onclick="Add('speed')">+</button></td><td><button onclick="Remove('speed')">-</button></td></tr><tr><th>Unused</th><td id="unused">5</td><td></td><td></td></tr></table></div><div class="col-md-4"><h2>Data</h2><p>Damage:<spanid="damage">3-8</span></p><p>Dodge:<spanid="doge">5</span>%doge</p><p>HP:200+<spanid="hp">50</span></p><p>Smart:200+<spanid="smart">50</span>IQ</p><p>IShowSped:200+<spanid="sped">50kmph</span></p></div></div></div></body></html>`);
        res.end();
    })
    app.listen(8000, (req, res) => {
        console.log("http://127.0.0.1:8000/")
    })


}
mehet()