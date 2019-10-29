// JavaScript Document
/* DUMMY DESCRIPTION: Standard startpage */
var standardStart = {
  "id": "standard_start",
  "type": "page",
  "navSrc": [],
  "navDest": [],
  "css": {
    "id": "standard_start_css",
    "content":[
      {
        "identify": "id",
        //Individual view ID!
        "id_value": "standard_start_v0",
        "props": [
          { "attr": "background", "value": "rgba(185, 188, 195, 0.6)" },
        ]
      },
      {
        "identify": "class",
        "id_value": "standard-nav",
        "props": [
          { "attr": "position", "value": "absolute" },
          { "attr": "left", "value": "10%" },
          { "attr": "top", "value": "5%" }
        ]
      },
      {
        "identify": "class",
        "id_value": "standard-nav > p:hover",
        "props": [
          { "attr": "border-bottom", "value": "1px solid black" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container",
        "props": [
          { "attr": "position", "value": "relative" },
          { "attr": "left", "value": "15%" },
          { "attr": "top", "value": "30%" },
          { "attr": "width", "value": "80%" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > .headline-sub > p",
        "props": [
          { "attr": "color", "value": "#0057FF" },
          { "attr": "line-height", "value": "32px" },
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > .headline",
        "props": [
          { "attr": "height", "value": "144px" },
          { "attr": "width", "value": "845px" },
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > .headline > p",
        "props": [
          { "attr": "line-height", "value": "72px" },
          { "attr": "font-size", "value": "58px" },
          { "attr": "margin", "value": "0px" },
          { "attr": "color", "value": "#414141" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > .text",
        "props": [
          { "attr": "width", "value": "520px" },
          { "attr": "margin-top", "value": "20px" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > .text > p",
        "props": [
          { "attr": "line-height", "value": "32px" },
          { "attr": "font-size", "value": "18px" },
          { "attr": "margin", "value": "0px" },
          { "attr": "color", "value": "#414141" },
          { "attr": "opacity", "value": "0.7" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > button",
        "props": [
          { "attr": "width", "value": "300px" },
          { "attr": "height", "value": "50px" },
          { "attr": "border", "value": "2px solid #414141" },
          { "attr": "box-sizing", "value": "border-box" },
          { "attr": "border-radius", "value": "200px" },
          { "attr": "margin-top", "value": "40px" },
          { "attr": "background-color", "value": "rgba(0,0,0,0)" },
          { "attr": "letter-spacing", "value": "0.02em" },
          { "attr": "font-size", "value": "16px" },
          { "attr": "text-align", "value": "left" },
          { "attr": "position", "value": "relative" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > button:hover",
        "props": [
          { "attr": "color", "value": "white" },
          { "attr": "background-color", "value": "#414141" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > button > p",
        "props": [
          { "attr": "position", "value": "absolute" },
          { "attr": "top", "value": "-2px" },
          { "attr": "left", "value": "25px" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container > button > p:nth-child(2)",
        "props": [
          { "attr": "left", "value": "230px" },
          { "attr": "top", "value": "-25px" },
          { "attr": "font-size", "value": "30px" },
          { "attr": "margin-right", "value": "0px" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container_v1",
        "props": [
          { "attr": "position", "value": "relative" },
          { "attr": "left", "value": "10%" },
          { "attr": "top", "value": "10%" },
          { "attr": "width", "value": "80%" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container_v1 > .text-main",
        "props": [
          { "attr": "position", "value": "relative"},
          { "attr": "width", "value": "50%" },
          { "attr": "left", "value": "25%" }
        ]
      },
      {
        "identify": "class",
        "id_value": "main-content-container_v1 > .text-main > p",
        "props": [
          { "attr": "font-size", "value": "42px" },
        ]
      }
    ]
  },
  "views": [{
    //Individual view ID!
    "view_id": 0,
    "order": 0,
    "elements": [{
        "type": "div",
        "class": "view-container",
        //Individual view ID!
        "id": "standard_start_v0",
        "children":[
          {
            "type": "div",
            "class": "standard-nav",
            "id": "",
            "children":[{
              "type": "p",
              "content": "Welcome"
            },
            {
              "type": "p",
              "content": "Our Mission"
            },
            {
              "type": "p",
              "content": "Donation"
            },
            {
              "type": "p",
              "content": "Contact"
            }]
          },
          {
            "type": "div",
            "class": "main-content-container",
            "id": "",
            "children":[{
              "type": "div",
              "class": "headline-sub",
              "id": "",
              children:[{
                "type": "p",
                "content": "Kids of Asahan"
              }]
            },
            {
              "type": "div",
              "class": "headline",
              "id": "",
              children:[{
                "type": "p",
                "content": "Give a gift that empowers."
              },
              {
                "type": "p",
                "content": "Give education."
              }]
            },
            {
              "type": "div",
              "class": "text",
              "id": "",
              children:[{
                "type": "p",
                "content": "Join us in our efforts to cultivate and advance the education program and school facilities of Gili Asahans public school. Every child has the right to an education."
              }]
            },
            {
              "type": "button",
              "class": "",
              "id": "",
              "content":[{
                "type": "p",
                "content": "Support us"
              },
              {
                "type": "p",
                "content": "&#8594;"
              }]
            }]
          }
        ]
      }]
    },
    {
      "view_id": 1,
      "order": 1,
      "elements": [{
        "type": "div",
        "class": "view-container",
        //Individual view ID!
        "id": "standard_start_v1",
        "children":[{
            "type": "div",
            "class": "main-content-container_v1",
            "id": "",
            "children":[{
              "type": "div",
              "class": "text-main",
              "id": "",
              children:[{
                "type": "p",
                "content": "Due to its remote location the school and instructors suffered serious neglect over the years since it was founded, leaving the kids of the 36 inhabitant families of Gili Asahan with very poor educational conditions."
              }]
          }]
        }]
      }]
    }],
}