let APIURL = ""

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1" : 
     APIURL = "http://localhost:3002"
     break 
    case "bookiesbookclubclient.herokuapp.com" :
        APIURL = "https://bookiesbookclub.herokuapp.com"
        break
}

export default APIURL;