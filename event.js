import {mainMenu,flex1,flex2,flex3,carousel1,quickreply,message,sticker,image,messageanothor,follow} from './config.js'
import { Client } from "@line/bot-sdk";
const configuser = {
  channelAccessToken: '73S6IbSnjEopruF+31/8+iSXdKJraFgdaFhccHtri7iLosSdt89hyr3ixsRiikagIlFgAjBZOpyOzNgzT5TpDCeS7U/LKJ4u4I9ODrIrlrdxgzAuKvhennD5EAkTbObVBFbuoSfUNX/D6bRJ07PwUgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '118ddec1543a6f809896a6f477eef7f3',
};
const client = new Client(configuser);

export function handleEvent(req, event) {
  // console.log('event', event)
    switch (event.type) {
      case "message":
        switch (event.message.type) {
          case "text":
            return  handleText(req, event);
          case "location":
            return  handleLocation(req, event);
          case "image":
            return  getImageORvideo(req, event);
          case "video":
            return  getImageORvideo(req, event);
        }
      case "postback":
        return  handlePostback(req, event);
      case "follow":
        return  handleFollow(event);
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
    switch(messagepostback){
      case 'Sticker type':
        return client.replyMessage(replyToken, [mainMenu(),sticker()]);
      case 'message type':
        return client.replyMessage(replyToken, [mainMenu(),message()]);
      case 'Image type':
        return client.replyMessage(replyToken, [mainMenu(),image()]);
      case 'Quick reply Type':
        return client.replyMessage(replyToken, [mainMenu(),quickreply()]);
      case 'Carousel Type':
        return client.replyMessage(replyToken, [mainMenu(),carousel1()]);
      case 'Flex A':
        return client.replyMessage(replyToken, [mainMenu(),flex1()]);
      case 'Flex B':
        return client.replyMessage(replyToken,[mainMenu(),flex2()]);
      case 'Flex C':
        return client.replyMessage(replyToken, [mainMenu(),flex3()]);
      case 'anothor':
        return client.replyMessage(replyToken, [mainMenu(),messageanothor()]);
      default:
        return
    }
  }

   function handleText(req, event) {
    const textinput = event.message.text;
    const { replyToken } = event;

    if(textinput == 'Message Type'){
      const msg = mainMenu()
      client.replyMessage(replyToken, msg);
    }
  }
   function handleLocation(req, event) {
    
  }
   function getImageORvideo(req, event) {
    
  }
 
   function handleFollow(req, event) {
    const { replyToken } = event;
    let msg = follow()
    client.replyMessage(replyToken, msg);

  }
