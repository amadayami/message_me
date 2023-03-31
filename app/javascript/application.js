// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import * as jquery from "jquery"
import "semantic-ui" 

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

$('.ui.menu .ui.dropdown').dropdown({
  on: 'hover'
});
$('.ui.menu a.item').on('click', function() {   
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active'); 
})