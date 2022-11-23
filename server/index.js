import express from "express";
import dotenv from 'dotenv';

//database connection
import ConnectDB from "./database/connection";


dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get("/", (req, res) => {
    res.json({
        message: "server is running",
    });
});

zomato.listen(4000, () => {

    // ConnectDB()
    //     .then(() => {
    //         console.log("server is running!!!");
    //     })
    //     .catch((error) => {
    //         console.log("server is running .but database connection failed");
    //         console.log(error);
    //     });

    console.log("server is running!!!");
});
