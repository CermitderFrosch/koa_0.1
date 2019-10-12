// JavaScript Document
"use strict"
$(document).ready(function(){
  var root = new Root();
  
  //Initialize loading of necessary classes
  root.init();
})

class Root{
  constructor(){
    //objectsList will keep track of active object instances
    var objectsList = {};
  }
  
  //Load necessary classes and start tracking active objects
  init(){
    //Initialize helper object and set debug mode to "true"
    var helper = new Helper(true);
    this.objectsList.push({"object": helper, "status": true});
    console.log(objectsList);
  }
}