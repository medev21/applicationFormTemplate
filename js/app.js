var mediaWrapper = $('.media-fields');
var addButton = $('.add-media');

$(addButton).click(function(event){

  $("li").unbind().click(function(){
    // unbind() -> To make sure a click only actions once use this
    var className = $(this).attr('class');
    switch (className) {
      case 'linkedin-link':
        console.log('linkedin clicked');
        $(mediaWrapper).append("<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fa fa-linkedin-square'></i></span><input type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'><a href='#' class='remove-media-input'>X</a></div>");
        break;
      case 'github-link':
        console.log('github cliked');
        break;
      default:
        console.log('default clicked');
    }
  });

});

$(mediaWrapper).on("click", ".remove-media-input", function(e){
  e.preventDefault();
  $(this).parent('div').remove();
});
