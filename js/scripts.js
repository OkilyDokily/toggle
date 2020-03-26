$(document).ready(function(){

  $("#showthesidebar").click(
    function(){
      $(".sidebar").show();
      $("#hidethesidebar").show();
      $("#showthesidebar").hide();
    });

  $("#hidethesidebar").click(
    function(){
      $(".sidebar").hide();
      $("#hidethesidebar").hide();
      $("#showthesidebar").show();
    });

  $("#warthogs").click(function(){
    $(".warthogs").show();
    $("#warthogs").hide();
    $("#stopwarthogs").show();

  })

  $("#stopwarthogs").click(function(){
    $(".warthogs").hide();
    $("#warthogs").show();
    $("#stopwarthogs").hide();
  })

  $("#vervetmonkeys").click(function(){
    $(".vervetmonkeys").show();
    $("#vervetmonkeys").hide();
    $("#stopvervetmonkeys").show();

  })

  $("#stopvervetmonkeys").click(function(){
    $(".vervetmonkeys").hide();
    $("#vervetmonkeys").show();
    $("#stopvervetmonkeys").hide();
  })

  $("#honeybadgers").click(function(){
    $(".honeybadgers").show();
    $("#honeybadgers").hide();
    $("#stophoneybadgers").show();

  })

  $("#stophoneybadgers").click(function(){
    $(".honeybadgers").hide();
    $("#honeybadgers").show();
    $("#stophoneybadgers").hide();
  })







});