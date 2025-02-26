container = $(".parallax");
containrOffset = $(".parallax").offset().top


//Header Offsets Need to be added before the scroll
var headerIds = [];
var headerOffset = [];

///Get each offset and push it to an arry
$('.parallax__group').each(function(){
  headerIds.push(this.id)
  headerOffset.push($(this).offset().top)
})

///Set scrolling params
$(".iconlat").click(function(e) {
  data_target = $(e.target).attr("data-target");
  container.animate({
    scrollTop: $("#" + data_target).offset().top - container.offset().top + container.scrollTop() 
  }, 2000);
});


$(container).on("scroll", function(e) {
  headerIds.forEach(function(el, i){
    if ($(container).scrollTop() > (headerOffset[i]-20)) {
      $('.iconlat').removeClass('active');
      $('.iconlat:nth-of-type(' + (i + 1) + ')').addClass('active'); //adds class to the next item.
      var id = $(this).attr('id');
    }
  });
});
