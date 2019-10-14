// JavaScript Document
"use strict";
class Helper{
  constructor(root, debugMode){
    //Set root class
    this.root = root;
    
    //Set debugging mode
    this.debug = debugMode;
  }
    
  
  
  

  /*  OBJECT SPECIFIC METHODS       */
  
  
  log(msg){
    if(this.debug === true){
      console.log(msg);
    }
  }
}