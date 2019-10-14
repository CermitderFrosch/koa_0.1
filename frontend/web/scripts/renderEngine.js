// JavaScript Document
"use strict";
class RenderEngine{
  constructor(root){
    //Set root class
    this.root = root;
  }

  
  
  
    
  /*  OBJECT SPECIFIC METHODS       */
  
  
  render(node){
    switch(node.elem){
      case "root":
        return this.createRootNode();
      case "css":
        return this.createStyleNode(node.content);
    }
  }
  
  createRootNode(){
    this.root.helper.log("Render Engine: Rendering root node");
    let root = document.createElement("div");
    root.setAttribute("id", "root-node");
    
    let parent = document.getElementsByTagName("body");
    return {"parent": parent[0], "node": root};
  }
  
  createStyleNode(desc){
    this.root.helper.log("Render Engine: Rendering style node for: " + desc.id_value );
    var node = document.createElement("style");
    node.setAttribute("type", "text/css");
    
    var content = '';
    
    //Identify type of html element (class, id, tag, etc.)
    switch(desc.identify){
      case "tag":
        content += desc.id_value + '{';
        break;
      case "id":
        content += '#' + desc.id_value + '{';
        break;
    }
    //Assign style properties
    for(let i = 0; i < desc.props.length; i++){
      content += desc.props[i].attr + ': ' + desc.props[i].value + '; ';
    }
    
    content += '}';
    
    let style = document.createTextNode(content);
    node.append(style);
    return node;
  }
  
}