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
            { "attr": "font-family", "value": "Avenir" }
          ]
        },
        {
          "identify": "tag",
          "id_value": "body",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "height", "value": "100%" },
            { "attr": "margin", "value": "0px" }
          ]
        },
        {
          "identify": "id",
          "id_value": "root-node",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "height", "value": "100%" },
            //{ "attr": "position", "value": "relative" },
          ]
        },
        {
          "identify": "tag",
          "id_value": "p",
          "props": [
            { "attr": "display", "value": "inline-block" },
            { "attr": "margin-right", "value": "65px" },
            { "attr": "font-size", "value": "16px" }
          ]
        },
        {
          "identify": "class",
          "id_value": "page",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "height", "value": "100%" }
          ]
        },
        {
          "identify": "class",
          "id_value": "view",
          "props": [
            //{ "attr": "position", "value": "relative" },
            { "attr": "width", "value": "100%" },
            { "attr": "display", "value": "flex" },
            { "attr": "flex-direction", "value": "column" },
            //{ "attr": "height", "value": "auto" },
            { "attr": "min-height", "value": "100%" }
          ]
        },
        {
          "identify": "class",
          "id_value": "view-container",
          "props": [
            { "attr": "width", "value": "100%" },
            { "attr": "position", "value": "relative" },
            //{ "attr": "height", "value": "100%" },
            { "attr": "flex-grow", "value": "1" },
            //{ "attr": "height", "value": "auto" },
            //{ "attr": "min-height", "value": "100%" }
          ]
        }
      ]
    };//EOD: root CSS
    this.rootCSS = css;
    this.root.helper.log("Root Model: Root css config received.");
  }
  
  loadPage(id){
    //Request a page via its id from the backend
    
    //DUMMY: For now, we will only load the "standard_start" page
    return standardStart;
  }
}