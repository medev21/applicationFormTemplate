// $(document).ready(function() {
//     var max_fields      = 10; //maximum input boxes allowed
//     var wrapper         = $(".input_fields_wrap"); //Fields wrapper
//     var add_button      = $(".add_field_button"); //Add button ID
//
//     var x = 1; //initlal text box count
//     $(add_button).click(function(e){ //on add input button click
//         e.preventDefault();
//         if(x < max_fields){ //max input box allowed
//             x++; //text box increment
//             $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
//         }
//     });
//
//     $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
//         e.preventDefault(); $(this).parent('div').remove(); x--;
//     })
// });

// <div class="input-group">
//   <span class="input-group-addon" id="basic-addon1">@</span>
//   <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
// </div>

var mediaWrapper = $('.media-fields');
var addButton = $('.add-media');

$(addButton).click(function(){
  $("li").click(function(){
    console.log('button clicked!');
    $(mediaWrapper).append("<div class='input-group'><span class='input-group-addon' id='basic-addon1'>@</span><input type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>");
  });
});
