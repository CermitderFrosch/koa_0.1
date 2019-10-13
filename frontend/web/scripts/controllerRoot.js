// JavaScript Document
"use strict";
class RootController{
  constructor(root){
    //Set root class
    this.root = root;
  }
  
  
  
  
  
  /*  CENTRAL COMMUNICATION METHODS */
  
  
  /*  Only these methods should be used for any communication between instances */
  receive(func, param = {}){
    switch(func){
      case "init":
        this.init();
    }
  }
  
  request(target, func, param = {}){
    var result;
    switch(target){
      case "root":
        result = this.root.receive(func, param);
        if(result != undefined){
          return result;
        }
        break;
        
      case "renderEngine":
        var renderEngine = this.request("root", "getRenderEngine");
        result = renderEngine.receive(func, param);
        if(result != undefined){
          return result;
        }
        break;
    }
  }
  
  
  
  
  
  /*  OBJECT SPECIFIC METHODS       */
  
  
  init(){
    //Set root element for all further content
    this.request("root", "log", {"msg": "Root Controller: Initialization started"});
    let element = this.request("renderEngine", "render", {"elem": "root"});
    this.setElement(element);
  }
  
  setElement(element){
    element.parent.appendChild(element.node);
  }
}