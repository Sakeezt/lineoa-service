import request from "request";
import zlib from "zlib";
import {
  AI,
  mainMenu,
  flex1,
  flex2,
  flex3,
  carousel1,
  quickreply,
  message,
  sticker,
  image,
  messageanothor,
  follow,
  contract,
} from "./config.js";
import { Client } from "@line/bot-sdk";

const configuser = {
  channelAccessToken:
    "73S6IbSnjEopruF+31/8+iSXdKJraFgdaFhccHtri7iLosSdt89hyr3ixsRiikagIlFgAjBZOpyOzNgzT5TpDCeS7U/LKJ4u4I9ODrIrlrdxgzAuKvhennD5EAkTbObVBFbuoSfUNX/D6bRJ07PwUgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "118ddec1543a6f809896a6f477eef7f3",
  integrations_id: "68d30d6e-40ac-4807-9bfa-4f50648ad8b1",
};
const client = new Client(configuser);

export async function handleEvent(req, event) {
  switch (event.type) {
    case "message":
      switch (event.message.type) {
        case "text":
          return await handleText(req, event);
        case "location":
          return handleLocation(req, event);
        case "image":
          return getImageORvideo(req, event);
        case "video":
          return getImageORvideo(req, event);
      }
    case "postback":
      return handlePostback(req, event);
    case "follow":
      return handleFollow(req, event);
    case "unfollow":
      return false;
    default:
      console.log(`Unknown event: ${JSON.stringify(event)}`);
      return false;
  }
}
function handlePostback(req, event) {
  const { replyToken } = event;
  const messagepostback = String(event.postback.data);
  switch (messagepostback) {
    case "Sticker type":
      return client.replyMessage(replyToken, [mainMenu(), sticker()]);
    case "message type":
      return client.replyMessage(replyToken, [mainMenu(), message()]);
    case "Image type":
      return client.replyMessage(replyToken, [mainMenu(), image()]);
    case "Quick reply Type":
      return client.replyMessage(replyToken, [mainMenu(), quickreply()]);
    case "Carousel Type":
      return client.replyMessage(replyToken, [mainMenu(), carousel1()]);
    case "Flex A":
      return client.replyMessage(replyToken, [mainMenu(), flex1()]);
    case "Flex B":
      return client.replyMessage(replyToken, [mainMenu(), flex2()]);
    case "Flex C":
      return client.replyMessage(replyToken, [mainMenu(), flex3()]);
    case "anothor":
      return client.replyMessage(replyToken, [mainMenu(), messageanothor()]);
    default:
      return;
  }
}

async function handleText(req, event) {
  const textinput = event.message.text;
  const { replyToken } = event;

  switch (textinput) {
    case "Message Type":
      const msg = mainMenu();
      client.replyMessage(replyToken, msg);
      break;
    case "เมนู > ติดต่อ":
      const msg1 = contract();
      client.replyMessage(replyToken, msg1);
      break;
    case "AI":
      const msg2 = AI();
      client.replyMessage(replyToken, msg2);
      break;
    default: {
      // Check if the textinput is not any of the known commands
      if (
        ![
          "AI",
          "Message Type",
          "เมนู > ติดต่อ",
          "Sticker type",
          "message type",
          "Image type",
          "Quick reply Type",
          "Carousel Type",
          "Flex A",
          "Flex B",
          "Flex C",
          "anothor",
        ].includes(textinput)
      ) {
        const option = { req: req, headers: req.headers, body: req.body };
        try {
          const resp = await postToDialogflow(
            option,
            configuser.integrations_id
          );
        } catch (error) {
          console.error("Error calling Dialogflow:", error);
        }
      }
      break;
    }
  }
}
function handleLocation(req, event) {}
function getImageORvideo(req, event) {}

function handleFollow(req, event) {
  console.log("event", event);
  const { replyToken } = event;
  let msg = follow();
  console.log("msg", msg);
  client.replyMessage(replyToken, msg);
}

async function postToDialogflow(option, clientConfig) {
  const { req, headers, body } = option;
  req.headers.host = "dialogflow.cloud.google.com";
  try {
    const response = await new Promise((resolve, reject) => {
      request.post(
        {
          uri: `https://dialogflow.cloud.google.com/v1/integrations/line/webhook/${clientConfig}`,
          headers: headers,
          body: JSON.stringify(body),
          encoding: null,
        },
        (error, httpResponse, data) => {
          if (error) {
            console.error("Error in postToDialogflow:", error);
            reject(error);
          } else {
            if (error) {
              reject(error);
          } else {
              resolve(data);
          }
        }
        }
      );
    });
  } catch (error) {
    console.error("Error in postToDialogflow:", error);
  }
}
