$('document').ready(function(){
     $('.js-services-section').waypoint(function(direction){
       if(direction == 'down'){
         $('nav').addClass('sticky');
       }else{
         $('nav').removeClass('sticky')
       }
     });

     $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  


     $('a').on('click', function(event) {
      if(this.hash !== ""){
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function(){
             window.location.hash = hash;
          });//end of html and body tag

      }//end of condition



  });//end of a ares

})

function openNave(){

  document.getElementById('overlay-head').style.width = '100%';

}
function closeNav(){
  document.getElementById('overlay-head').style.width = '0'
}
