// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import * as jquery from "jquery"
import "semantic-ui"
import "channels" 

import { scroll_bottom } from "./scroll_bottom"
import { submit_message } from "./submit_message"

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

$(document).on("turbo:load", () => {
  submit_message();
  scroll_bottom();
})