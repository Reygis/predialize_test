const app = require("express")();
const cors = require("cors");
const routes = require("./routes/routes.js");

app.use(cors());
routes.load(app);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Api running at ::${PORT}`);
});
