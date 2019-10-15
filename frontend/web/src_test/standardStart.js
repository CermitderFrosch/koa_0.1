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
      }]
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
              "type": "p",
              "content": "Test"
            },
            ]
          }
        ]
      }]
  }],
}