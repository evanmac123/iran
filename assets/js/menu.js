  $(function(){
  var menuwidth  = 240; // pixel value for sliding menu width
  var menuspeed  = 400; // milliseconds for sliding menu animation time
  
  var $bdy       = $('body');
  var $second    = $('#second-menu'); 
  var $container = $('#pgcontainer');
  var $burger    = $('#hamburgermenu');
  var negwidth   = "-"+menuwidth+"px";
  var poswidth   = menuwidth+"px";
  var negheight  = 0;
  var posheight  = 100;
  
  $('.menubtn').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
      secondmenuhide();
          } else {
      jsAnimateMenu('open');
    }
  });

  $('.overlay').on('click', function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
      secondmenuhide();
    }
  });

   $('.menu-title').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateSecondMenu(this.id);
    } else {
      jsAnimateSecondMenu('open');
    }
 });

  $('a[href$="#"]').on('click', function(e){
    e.preventDefault();
  });

  $('.menu-title').on('click',function(e){
     //$('#second-menu').hide();

      //jsAnimateSecondMenu('open');
  });
function jsAnimateSecondMenu(tog) {
    if(tog == '1') {
       secondmenuhide();
       $("#oil-menu").show();  
    }
    else if(tog == '2') {
       
       $("#coup-menu").show();
    }
    else if(tog == '3') {
       secondmenuhide();
       $("#rev-menu").show();
    }
    else if(tog == '4') {
       secondmenuhide();
       $("#modern-menu").show();
    }
    else{
   }
  }
function secondmenuhide () {
    $("#oil-menu").hide();
    $("#coup-menu").hide();
    $("#rev-menu").hide();
    $("#modern-menu").hide();
  }

  function jsAnimateMenu(tog) {
    if(tog == 'open') {
      $bdy.addClass('openmenu');
      
      $container.animate({marginRight: negwidth, marginLeft: poswidth}, menuspeed);
      $burger.animate({width: poswidth}, menuspeed);
      $('.overlay').animate({left: poswidth}, menuspeed);
    }
    
    if(tog == 'close') {
      $bdy.removeClass('openmenu');
      
      $container.animate({marginRight: "0", marginLeft: "0"}, menuspeed);
      $burger.animate({width: "0"}, menuspeed);
      $('.overlay').animate({left: "0"}, menuspeed);
    }
  }
});