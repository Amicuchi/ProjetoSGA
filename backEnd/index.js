import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

const port = 8800;

// app.listen(8800);
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});