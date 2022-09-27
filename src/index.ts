require("dotenv").config({ path: __dirname + "/.env" });
import router from "./router";
import server from "./server";

router(server);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server running on 127.0.0.1:${port}`);
});
