$(function(){
    $('body').on('click', '.btn btn-outline-success me-2', function(){
      $('.btn btn-outline-success me-2').removeClass('active');
      $(this).closest('.btn btn-outline-success me-2').addClass('active');
    });
  });