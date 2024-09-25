function flexDefault(flex) {
    return {
      type: 'flex',
      altText: 'Custom Bubble',
      contents: flex,
    } ;
}
export const mainMenu = () =>{
    return flexDefault({
        "type": "bubble",
        "size": "giga",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/sakeeztdev-637dd.appspot.com/o/sit%2F%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%20%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99%20%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B8%A5%E0%B8%B2%E0%B8%88%20%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%20Menu%20%E0%B8%A3%E0%B8%B4%E0%B8%8A%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%82%E0%B8%AD%E0%B8%87%20LINE.png?alt=media&token=d0eacb75-9b7c-4372-aaa4-775cf7d4a790",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "1:1",
              "gravity": "center"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ตัวอย่าง",
                          "size": "xl",
                          "color": "#ffffff"
                        },
                        {
                          "type": "text",
                          "text": "Message Type",
                          "size": "xl",
                          "color": "#ffffff"
                        }
                      ],
                      "alignItems": "center",
                      "justifyContent": "center"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "message",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#812929",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "message type",
                                "data": "message type",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Sticker",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#451414",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Sticker type",
                                "data": "Sticker type",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "image",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#391212",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Image type",
                                "data": "Image type",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            }
                          ],
                          "spacing": "8px"
                        },
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "location",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#812929",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "line://nv/location"
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Quick reply",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#451414",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Quick reply Type",
                                "data": "Quick reply Type",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Carousel",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#391212",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Carousel Type",
                                "data": "Carousel Type",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            }
                          ],
                          "spacing": "8px"
                        },
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "flex A",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#812929",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Flex A",
                                "data": "Flex A",
                               "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "flex B",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#451414",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Flex B",
                                "data": "Flex B",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "flex C",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#391212",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "action": {
                                "type": "postback",
                                "label": "Flex C",
                                "data": "Flex C",
                               "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            }
                          ],
                          "spacing": "8px"
                        },
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "อื่นๆ",
                                  "color": "#ffffff"
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "center",
                              "height": "50px",
                              "borderColor": "#391212",
                              "borderWidth": "3px",
                              "cornerRadius": "15px",
                              "width": "50%",
                              "action": {
                                "type": "postback",
                                "label": "anothor",
                                "data": "anothor",
                                "displayText": " "
                              },
                              "background": {
                                "type": "linearGradient",
                                "angle": "8deg",
                                "startColor": "#812929",
                                "centerColor": "#451414",
                                "endColor": "#391212"
                              }
                            }
                          ],
                          "spacing": "8px",
                          "alignItems": "center",
                          "justifyContent": "center"
                        }
                      ],
                      "spacing": "20px",
                      "offsetTop": "10px"
                    }
                  ],
                  "spacing": "none"
                }
              ],
              "position": "absolute",
              "paddingAll": "20px",
              "offsetEnd": "0px",
              "offsetBottom": "0px",
              "offsetStart": "0px",
              "offsetTop": "10px"
            }
          ],
          "paddingAll": "0px"
        }
      })
}

export const flex1 = () => {
    return flexDefault({
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/sakeeztdev-637dd.appspot.com/o/sit%2FS__29941767.jpg?alt=media&token=19f48b46-0925-4907-a5ee-c415ee808319",
          "size": "full",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "https://line.me/"
          },
          "aspectRatio": "20:18"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Sakeezt cafe",
              "weight": "bold",
              "size": "xl"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "md",
              "contents": [
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                },
                {
                  "type": "text",
                  "text": "5.0",
                  "size": "sm",
                  "color": "#999999",
                  "margin": "md",
                  "flex": 0
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Place",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "345 Tower , Bankok",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Time",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "10:00 - 23:00",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "CALL",
                  "size": "md",
                  "weight": "bold"
                }
              ],
              "backgroundColor": "#f4e0b2",
              "cornerRadius": "lg",
              "justifyContent": "center",
              "alignItems": "center",
              "height": "40px"
            }
          ],
          "flex": 0
        }
      })

}

export const flex2 = () => {
    return flexDefault({
        "type": "bubble",
        "size": "mega",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "FROM",
                  "color": "#ffffff66",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": "Sakeezt A Place",
                  "color": "#ffffff",
                  "size": "xl",
                  "flex": 4,
                  "weight": "bold"
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "TO",
                  "color": "#ffffff66",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": "Sakeezt B place",
                  "color": "#ffffff",
                  "size": "xl",
                  "flex": 4,
                  "weight": "bold"
                }
              ]
            }
          ],
          "paddingAll": "20px",
          "backgroundColor": "#0c3abe",
          "spacing": "md",
          "height": "154px",
          "paddingTop": "22px"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Total: 1 hour",
              "color": "#b7b7b7",
              "size": "xs"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "20:30",
                  "size": "sm",
                  "gravity": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "filler"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [],
                      "cornerRadius": "30px",
                      "height": "12px",
                      "width": "12px",
                      "borderColor": "#EF454D",
                      "borderWidth": "2px"
                    },
                    {
                      "type": "filler"
                    }
                  ],
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "Sakeezt A Place",
                  "gravity": "center",
                  "flex": 4,
                  "size": "sm"
                }
              ],
              "spacing": "lg",
              "cornerRadius": "30px",
              "margin": "xl"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ],
                  "flex": 1
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [],
                          "width": "2px",
                          "backgroundColor": "#B7B7B7"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 1
                    }
                  ],
                  "width": "12px"
                },
                {
                  "type": "text",
                  "text": "Walk 4min",
                  "gravity": "center",
                  "flex": 4,
                  "size": "xs",
                  "color": "#8c8c8c"
                }
              ],
              "spacing": "lg",
              "height": "64px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "20:34",
                      "gravity": "center",
                      "size": "sm"
                    }
                  ],
                  "flex": 1
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "filler"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [],
                      "cornerRadius": "30px",
                      "width": "12px",
                      "height": "12px",
                      "borderWidth": "2px",
                      "borderColor": "#6486E3"
                    },
                    {
                      "type": "filler"
                    }
                  ],
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "Sakeezt AB Place",
                  "gravity": "center",
                  "flex": 4,
                  "size": "sm"
                }
              ],
              "spacing": "lg",
              "cornerRadius": "30px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ],
                  "flex": 1
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [],
                          "width": "2px",
                          "backgroundColor": "#6486E3"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 1
                    }
                  ],
                  "width": "12px"
                },
                {
                  "type": "text",
                  "text": "Metro 1hr",
                  "gravity": "center",
                  "flex": 4,
                  "size": "xs",
                  "color": "#8c8c8c"
                }
              ],
              "spacing": "lg",
              "height": "64px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "20:40",
                  "gravity": "center",
                  "size": "sm"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "filler"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [],
                      "cornerRadius": "30px",
                      "width": "12px",
                      "height": "12px",
                      "borderColor": "#6486E3",
                      "borderWidth": "2px"
                    },
                    {
                      "type": "filler"
                    }
                  ],
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "Sakeezt B Place",
                  "gravity": "center",
                  "flex": 4,
                  "size": "sm"
                }
              ],
              "spacing": "lg",
              "cornerRadius": "30px"
            }
          ]
        }
      })

}
export const carousel1 = () => {
    return flexDefault({
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/sakeeztdev-637dd.appspot.com/o/sit%2FS__29941764.jpg?alt=media&token=3658338d-1c32-42cf-8ee2-c200aa1c5392",
                  "size": "full",
                  "aspectMode": "cover",
                  "aspectRatio": "2:3",
                  "gravity": "top"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Sakeezt SET 1",
                          "size": "xl",
                          "color": "#ffffff",
                          "weight": "bold"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "฿ 1000",
                          "color": "#ebebeb",
                          "size": "sm",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": "฿ 1500",
                          "color": "#ffffffcc",
                          "decoration": "line-through",
                          "gravity": "bottom",
                          "flex": 0,
                          "size": "sm"
                        }
                      ],
                      "spacing": "lg"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "baseline",
                          "contents": [
                            {
                              "type": "filler"
                            },
                            {
                              "type": "icon",
                              "url": "https://developers-resource.landpress.line.me/fx/clip/clip14.png"
                            },
                            {
                              "type": "text",
                              "text": "Add to cart",
                              "color": "#ffffff",
                              "flex": 0,
                              "offsetTop": "-2px"
                            },
                            {
                              "type": "filler"
                            }
                          ],
                          "spacing": "sm"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "borderWidth": "1px",
                      "cornerRadius": "4px",
                      "spacing": "sm",
                      "borderColor": "#ffffff",
                      "margin": "xxl",
                      "height": "40px"
                    }
                  ],
                  "position": "absolute",
                  "offsetBottom": "0px",
                  "offsetStart": "0px",
                  "offsetEnd": "0px",
                  "backgroundColor": "#03303Acc",
                  "paddingAll": "20px",
                  "paddingTop": "18px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "PROMOTION",
                      "color": "#ffffff",
                      "align": "center",
                      "size": "xs",
                      "offsetTop": "3px"
                    }
                  ],
                  "position": "absolute",
                  "cornerRadius": "20px",
                  "offsetTop": "18px",
                  "backgroundColor": "#ff334b",
                  "offsetStart": "18px",
                  "height": "25px",
                  "width": "53px"
                }
              ],
              "paddingAll": "0px"
            }
          },
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/sakeeztdev-637dd.appspot.com/o/sit%2FS__29941766.jpg?alt=media&token=79c87fdc-2404-4d7a-8a68-a874fb3c4280",
                  "size": "full",
                  "aspectMode": "cover",
                  "aspectRatio": "2:3",
                  "gravity": "top"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Sakeezt SET 2",
                          "size": "xl",
                          "color": "#ffffff",
                          "weight": "bold"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "฿ 800",
                          "color": "#ebebeb",
                          "size": "sm",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": "฿ 1000",
                          "color": "#ffffffcc",
                          "decoration": "line-through",
                          "gravity": "bottom",
                          "flex": 0,
                          "size": "sm"
                        }
                      ],
                      "spacing": "lg"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "baseline",
                          "contents": [
                            {
                              "type": "filler"
                            },
                            {
                              "type": "icon",
                              "url": "https://developers-resource.landpress.line.me/fx/clip/clip14.png"
                            },
                            {
                              "type": "text",
                              "text": "Add to cart",
                              "color": "#ffffff",
                              "flex": 0,
                              "offsetTop": "-2px"
                            },
                            {
                              "type": "filler"
                            }
                          ],
                          "spacing": "sm"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "borderWidth": "1px",
                      "cornerRadius": "4px",
                      "spacing": "sm",
                      "borderColor": "#ffffff",
                      "margin": "xxl",
                      "height": "40px"
                    }
                  ],
                  "position": "absolute",
                  "offsetBottom": "0px",
                  "offsetStart": "0px",
                  "offsetEnd": "0px",
                  "backgroundColor": "#9C8E7Ecc",
                  "paddingAll": "20px",
                  "paddingTop": "18px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "PROMOTION",
                      "color": "#ffffff",
                      "align": "center",
                      "size": "xs",
                      "offsetTop": "3px"
                    }
                  ],
                  "position": "absolute",
                  "cornerRadius": "20px",
                  "offsetTop": "18px",
                  "backgroundColor": "#ff334b",
                  "offsetStart": "18px",
                  "height": "25px",
                  "width": "53px"
                }
              ],
              "paddingAll": "0px"
            }
          }
        ]
      })

}

export const flex3 = () => {
    return flexDefault({
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://developers-resource.landpress.line.me/fx/clip/clip3.jpg",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "1:1",
              "gravity": "center"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "position": "absolute",
              "background": {
                "type": "linearGradient",
                "angle": "0deg",
                "endColor": "#00000000",
                "startColor": "#00000099"
              },
              "width": "100%",
              "height": "40%",
              "offsetBottom": "0px",
              "offsetStart": "0px",
              "offsetEnd": "0px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "A Hotel",
                          "size": "xl",
                          "color": "#ffffff"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "icon",
                          "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "url": "https://developers-resource.landpress.line.me/fx/img/review_gray_star_28.png"
                        },
                        {
                          "type": "text",
                          "text": "4.0",
                          "color": "#a9a9a9"
                        }
                      ],
                      "spacing": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "baseline",
                          "contents": [
                            {
                              "type": "text",
                              "text": "฿ 12,000",
                              "color": "#ffffff",
                              "size": "md",
                              "flex": 0,
                              "align": "end"
                            },
                            {
                              "type": "text",
                              "text": "฿ 22,000",
                              "color": "#a9a9a9",
                              "decoration": "line-through",
                              "size": "sm",
                              "align": "end"
                            }
                          ],
                          "flex": 0,
                          "spacing": "lg"
                        }
                      ]
                    }
                  ],
                  "spacing": "xs"
                }
              ],
              "position": "absolute",
              "offsetBottom": "0px",
              "offsetStart": "0px",
              "offsetEnd": "0px",
              "paddingAll": "20px"
            }
          ],
          "paddingAll": "0px"
        }
      })

}
export const message = () => {
    return {
        type: "text",
        text: `🙏 สวัสดีครับ Sakkezt Dev 
ยินดีต้อนรับครับ 

หากลูกค้าสนใจเพิ่มเติมส่วนไหนสามารถติดต่อได้ที่ไลน์นี้ได้เลยครับ`,
    }

}
export const follow = () => {
    return {
        type: "text",
        text: `🙏 สวัสดีครับ Sakkezt Dev 
ยินดีต้อนรับครับ

  ลูกค้าสามารถกดดูตัวอย่างรูปเเบบต่างๆของ Line OA ได้ที่ "เมนู" ข้างล่างได้เลยครับ
`,
    }

}
export const messageanothor = () => {
    return {
        type: "text",
        text: `☝️ จากตัวอย่างข้างต้น
   หากลูกค้าสนใจส่วนไหนเพิ่มเติมที่นอกเหนือจากตัวอย่างข้างต้น

   ลูกค้าสามารถติดต่อสอบถามเพิ่มเติมได้เลยครับ`,
    }

}
export const sticker = () => {
    return {
        "type": "sticker",
        "packageId": "446",
        "stickerId": "1988"
      }

}
export const image = () => {
    return {
        "type": "image",
        "originalContentUrl": "https://firebasestorage.googleapis.com/v0/b/sakeeztdev-637dd.appspot.com/o/sit%2F%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%20%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99%20%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B8%A5%E0%B8%B2%E0%B8%88%20%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%20Menu%20%E0%B8%A3%E0%B8%B4%E0%B8%8A%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%82%E0%B8%AD%E0%B8%87%20LINE%20(1).png?alt=media&token=9377dd3f-bb15-4ef7-91a0-fb3df4d580f5",
        "previewImageUrl": "https://firebasestorage.googleapis.com/v0/b/sakeeztdev-637dd.appspot.com/o/sit%2F%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87%20%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%20%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99%20%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B8%A5%E0%B8%B2%E0%B8%88%20%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%20Menu%20%E0%B8%A3%E0%B8%B4%E0%B8%8A%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%82%E0%B8%AD%E0%B8%87%20LINE%20(1).png?alt=media&token=9377dd3f-bb15-4ef7-91a0-fb3df4d580f5"
      }

}
export const quickreply = () => {
    return {
        "text": "ท่านมีข้อเสนอแนะอื่นๆ เพิ่มเติมหรือไม่",
        "type": "text",
        "quickReply": {
          "items": [
            {
              "type": "action",
              "action": {
                "text": "มีข้อเสนอแนะเพิ่มเติม",
                "label": "มีข้อเสนอแนะเพิ่มเติม",
                "type": "message"
              }
            },
            {
              "type": "action",
              "action": {
                "text": "ไม่มีข้อเสนอแนะ",
                "label": "ไม่มีข้อเสนอแนะ",
                "type": "message"
              }
            }
    
          ]
    
        }
      }

}