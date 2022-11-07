import 'reflect-metadata';
import 'express-async-errors';
import {routes} from "../routes";
import {NextFunction, Request, request, Response, response} from "express";

const express = require("express");
const app = express();
app.use(express.json())
app.use(routes)

app.use((
    err: Error, request: Request, response: Response, next: NextFunction
) => {
    if (err){
        return response.status(400).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

    next(err)
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});