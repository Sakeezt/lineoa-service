import express from "express"; // ES module import
import linewebhookRoutes from './route.js'
import { middleware } from "@line/bot-sdk";

const app = express();
const configuser = {
  channelAccessToken: '73S6IbSnjEopruF+31/8+iSXdKJraFgdaFhccHtri7iLosSdt89hyr3ixsRiikagIlFgAjBZOpyOzNgzT5TpDCeS7U/LKJ4u4I9ODrIrlrdxgzAuKvhennD5EAkTbObVBFbuoSfUNX/D6bRJ07PwUgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '118ddec1543a6f809896a6f477eef7f3',
};
app.use("/webhook", middleware(configuser), linewebhookRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
