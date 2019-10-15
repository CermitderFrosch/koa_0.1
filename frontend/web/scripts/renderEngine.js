// JavaScript Document
"use strict";
class RenderEngine{
  constructor(root){
    //Set root class
    this.root = root;
  }

  
  
  
    
  /*  OBJECT SPECIFIC METHODS       */
  
  
  render(desc){
    switch(desc.type){
      case "root-node":
        return this.createRootNode();
      case "css":
        return this.createStyleNode(desc.content);
      case "page":
        return [this.createPage(desc.id, desc.views), this.createStyleNode(desc.css.content)];
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
    
    var node = document.createElement("style");
    node.setAttribute("type", "text/css");
    var content = '';
    
    for(let i = 0; i < desc.length; i++){
      this.root.helper.log("Render Engine: Rendering style for: " + desc[i].id_value );
      //Identify type of html element (class, id, tag, etc.)
      switch(desc[i].identify){
        case "tag":
          content += desc[i].id_value + '{';
          break;
        case "id":
          content += '#' + desc[i].id_value + '{';
          break;
        case "class":
          content += '.' + desc[i].id_value + '{';
      }
      //Assign style properties
      for(let j = 0; j < desc[i].props.length; j++){
        content += desc[i].props[j].attr + ': ' + desc[i].props[j].value + '; ';
      }
      content += '}';
    }
    let style = document.createTextNode(content);
    node.append(style);
    return node;
  }
  
  createPage(id, views){
    var page = document.createElement("div");
    page.classList.add("page");
    page.setAttribute("id", id);
    for(let i = 0; i < views.length; i++){
      var view = document.createElement("div");
      view.classList.add("view");
      view.setAttribute("order", views[i].order);
      for(let j = 0; j < views[i].elements.length; j++){
        var node = this.createNode(views[i].elements[j]);
        view.append(node);
      }
      page.append(view);
    }
    return page;
  }
  
  createNode(desc){
    var node = document.createElement("div");
    switch(desc.type){
      case "div":
        node = document.createElement("div");
        node.classList.add(desc.class);
        node.setAttribute("id", desc.id);
        for(let i = 0; i < desc.children.length; i++){
          let childNode = this.createNode(desc.children[i]);
          node.appendChild(childNode);
        }
        return node;
      case "p":
        node = document.createElement("p");
        node.innerHTML = desc.content;
        return node;
    }
  }
  
}