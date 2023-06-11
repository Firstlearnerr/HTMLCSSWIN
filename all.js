const checkboxes = document.querySelectorAll('.custom-radio');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(cb => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
  });
});
$("#button0").click(function(){
 $(".idea").css("right","100%") 
  });
$("#button1").click(function(){
 $(".idea").css("right","200%") 
  });
$("#button").click(function(){
 $(".idea").css("right","0%") 
  });




