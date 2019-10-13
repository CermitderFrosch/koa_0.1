// JavaScript Document
"use strict";
class RenderEngine{
  constructor(root){
    //Set root class
    this.root = root;
  }
  
  
  
  
  
  /*  CENTRAL COMMUNICATION METHODS */
  
  
  /*  Only these methods should be used for any communication between instances */
  receive(func, param = {}){
    switch(func){
      case "render":
        return this.render(param);
    }
  }
  
  request(target, func, param = {}){
   
  }
  
  
  
  
  
  /*  OBJECT SPECIFIC METHODS       */
  
  
  render(node){
    switch(node.elem){
      case "root":
        return this.createRootNode();
    }
  }
  
  createRootNode(){
    let root = document.createElement("div");
    root.setAttribute("id", "root-node");
    
    let parent = document.getElementsByTagName("body");
    return {"parent": parent[0], "node": root};
  }
  
}