// JavaScript Document
"use strict";
class RootModel{
  constructor(root){
    //Set root class
    this.root = root;
    //Root css configuration
    this.rootCSS = {};
  }
    
  
  
  

  /*  OBJECT SPECIFIC METHODS       */
  
  
  init(){
    //Set root element for all further content
    this.root.helper.log("Root Model: Initialization started.");
    this.buildRootCSS();
  }
  
  buildRootCSS(){
    //Receive the main css configuration for our site
    this.root.helper.log("Root Model: Receiving root css config.");
    
    //DUMMY!!! -> Will be replaced later by a backend request
    let css = {
      "id": "rootCSS",
      "content":[
        {
          "identify": "tag",
          "id_value": "html",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "height", "value": "100%" },
          ]
        },
        {
          "identify": "tag",
          "id_value": "body",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "height", "value": "100%" },
            { "attr": "margin", "value": "0px" },
          ]
        },
        {
          "identify": "id",
          "id_value": "root-node",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "height", "value": "100%" },
          ]
        }
      ]
    };//EOD: root CSS
    this.rootCSS = css;
    this.root.helper.log("Root Model: Root css config received.");
  }
}