const { server } = require("./configs/server-config");

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
