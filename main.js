
// $('#sect1').on('click', function(){
//   $('#box1').toggle('#box1');
// });
// $('#sect2').on('click', function(){
//   $('#box2').toggle('#box2');
// });
// $('#sect3').on('click', function(){
//   $('#box3').toggle('#box3');
// });

$('section').on('click', function(){
  $('section').removeClass('sect1');
  $(this).addClass('sect1');
});
