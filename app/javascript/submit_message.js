export function submit_message() {
  $('#message_body').on('keydown', function(e) {
    if (e.keycode == 13){
      $('button').click();
    }
  })
}