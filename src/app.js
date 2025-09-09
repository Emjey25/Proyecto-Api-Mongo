import express from "express";
import { ShowErrorMessage } from "./config/envs.js";
import Routes from "./routes/index.js";

// Routes

(() => {
	connectDB();
	SeverApp();
})();

function SeverApp() {
	const app = express();

	// Public folder
	app.use(express.static("public"));

	// Middleware and route setup
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	// Valid environment variables
	ShowErrorMessage();

	// Routes
	app.use("/api", Routes); // http://localhost:3000/api/users or /api/posts

	app.listen(3000, () => {
		console.log("Server is running on http://localhost:3000");
	});
}
