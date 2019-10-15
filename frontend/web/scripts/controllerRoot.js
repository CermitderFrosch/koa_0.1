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
    this.setElement({"type": "root-node"});
    this.setPage("standard_start");
  }
  
  setCSS(desc){
    let style = this.root.renderEngine.render(
                                              {"type": "css",
                                               "content": desc.content
                                              });
    document.getElementsByTagName("head")[0].appendChild(style);
    
  }
  
  setElement(description){
    var element = this.root.renderEngine.render(description);
    element.parent.appendChild(element.node);
  }
  
  setPage(id){
    //Set a page and its content as child to the html root-node
    var page = this.root.renderEngine.render(this.root.rootModel.loadPage(id));
    //Set CSS
    document.getElementsByTagName("head")[0].appendChild(page[1]);
    //Set html node
    document.getElementById("root-node").appendChild(page[0]);
  }
}