import http from "http";

const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.end(`hello, 你好主機, ${process.argv[2]}`);
});

server.listen(9000, () => {
  console.log("哥哥 加油喔 趕快來找我 @ http://localhost:9000");
});
