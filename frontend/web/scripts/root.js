// JavaScript Document
"use strict"
$(document).ready(function(){
  var root = new Root();
  
  //Initialize loading of necessary classes
  root.init();
})

class Root{
  //This classes' purpose is to bootstrap all js-scripts and to hold
  //a central reference to them
  constructor(){
    //objectsList will keep track of active object instances
    this.objectsList    = [];
    this.helper         = {};
    this.renderEngine   = {};
    this.rootController = {};
  }
  
  
  
  
  
  /*  CENTRAL COMMUNICATION METHODS */
  
  
  /*  Only these methods should be used for any communication between instances */
  receive(func, param = {}){
    switch(func){
      case "log":
        var msg = param.msg;
        this.helper.log(msg);
        break;
      case "getRenderEngine":
        return this.renderEngine;
    }
  }
  
  request(target, func, param = {}){
    switch(target){
      case "rootController":
        this.rootController.receive(func, param);
    }
  }
  
  
  
  
  
  /*  OBJECT SPECIFIC METHODS       */
  
  
  //Load necessary classes and start tracking active objects
  init(){
    //Initialize helper object and set debug mode to "true"
    this.helper = new Helper(this, true);
    this.objectsList.push({"object": this.helper, "status": "active"});
    
    //Initialize rendering engine 
    this.renderEngine = new RenderEngine(this);
    this.objectsList.push({"object": this.renderEngine, "status": "active"});
    
    //Initialize main controller
    this.rootController = new RootController(this);
    this.objectsList.push({"object": this.controllerMain, "status": "active"});
    
    this.helper.log("Initialized helper, rendering engine and root controller");
    this.helper.log(this.objectsList);
    
    //Set an html root element
    this.helper.log("Initialize view via root controller");
    this.request("rootController", "init");
  }
}