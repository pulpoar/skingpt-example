import "dotenv/config";
import express from "express";
import ViteExpress from "vite-express";


ViteExpress.config({ mode: "production" });

const app = express();
app.enable("trust proxy");


ViteExpress.listen(app, 5173, () => {
    console.info("Server is listening on port 4100");
});

