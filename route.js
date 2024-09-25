import { handleEvent } from "./event.js";
import { middleware } from "@line/bot-sdk"
import express from "express";


var router = express.Router();

router.post("/", async (req, res) => {
  try {
    const events = req.body.events;
    await Promise.all(events.map((event) => handleEvent(req, event)));
    res.status(200).end();
  } catch (err) {
    console.error("Error handling event: ", err);
    res.status(500).end(); // Internal server error
  }
});


export default router;
