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
    this.helper         = {};
    this.renderEngine   = {};
    this.rootModel      = {};
    this.rootController = {};
  }
  
  
  
  
  
  /*  OBJECT SPECIFIC METHODS       */
  
  
  //Load necessary classes and start tracking active objects
  init(){
    //Initialize helper object and set debug mode to "true"
    this.helper = new Helper(this, true);
    
    //Initialize rendering engine 
    this.renderEngine = new RenderEngine(this);;
    
    //Initialize root model
    this.rootModel = new RootModel(this);
    this.rootModel.init();
    
    //Initialize root controller
    this.rootController = new RootController(this);
    
    this.helper.log("Root: Initialized helper, rendering engine, root model and root controller.");
    
    //Set an html root element
    this.helper.log("Initialize view via root controller.");
    this.rootController.init();
  }
}