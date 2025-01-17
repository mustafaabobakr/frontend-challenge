const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

let userBalance = 0;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Tap Payment Server!");
});

app.get("/api/balance", (req, res) => {
	res.status(200).send({ balance: userBalance });
});

app.post("/api/balance", (req, res) => {
	const { amount } = req.body;
	if (typeof amount !== "number" && amount > 0) return res.status(400).send({ status: "failed", error: "Invalid amount!" });
	userBalance += amount;
	res.status(200).send({ status: "success" });
});

app.listen(port, () => {
	console.log(`server app listening at http://localhost:${port}`);
});
