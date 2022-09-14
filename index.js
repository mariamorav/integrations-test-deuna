const http = require("http");
const fs = require("fs").promises;

const host = 'localhost';
const port = 8000;

const initialMessage = {
	company: "DEUNA",
	title: "Integration Engineer test",
	test: "nodejs server"
}

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end(JSON.stringify(initialMessage));
            break
        case "/pokemon":
            fs.readFile("./index.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});