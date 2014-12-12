 function a() {
     $('#navbar').affix();
     $('#navbar').scrollspy();
     $("#step2").hide();
 }
 window.onload = a;
 $(document).ready(function() {
     $(".btn1").click(function() {
         $("#step3").slideUp();
         $("#step1").animate({
             bottom: '700px'
         }, 700).hide(500);
         $("#step2").show(500);
         $('.nav li').removeClass('active');
     });
 });
 $(function() {
     $('#btntop').click(function(e) {
         $('.nav li').removeClass('active');
         $('#firstli').addClass('active');
     });
 });
 $(function() {
     $('#lastli').click(function(e) {
         $('#lastli').addClass('active');
     });
 });
