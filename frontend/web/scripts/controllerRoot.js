// JavaScript Document
"use strict";
class RootController{
  constructor(root){
    //Set root class
    this.root = root;
  }
    
  
  
  

  /*  OBJECT SPECIFIC METHODS       */
  
  
  init(){
    //Set root element for all further content
    this.root.helper.log("Root Controller: Initialization started");
    this.root.helper.log("Root Controller: Setting root css");
    this.setCSS(this.root.rootModel.rootCSS);
    this.root.helper.log("Root Controller: Setting root node");
    this.setElement({"elem": "root"});
  }
  
  setCSS(description){
    for(let i = 0; i < description.content.length; i++){
      let style = this.root.renderEngine.render(
                                                {"elem": "css",
                                                 "content": description.content[i]
                                                });
      document.getElementsByTagName("head")[0].appendChild(style);
    }
  }
  
  setElement(description){
    let element = this.root.renderEngine.render(description);
    element.parent.appendChild(element.node);
  }
}