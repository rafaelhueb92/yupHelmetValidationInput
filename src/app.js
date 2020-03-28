const express = require("express");
const helmet = require("helmet");
const app = express();
const personMiddleware = require("./middlewares/person.middleware");
const PORT = 4000 || process.env.PORT;

app.use(helmet());
app.use(express.json({ limit: "30kb" }));

app.use("/person", personMiddleware);

app.post("/person", ({ body }, res) => res.status(200).json(body));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
