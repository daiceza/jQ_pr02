(function($,window){
  $(function(){
    $('h2').remove();
    $('h3').hide();
    var t =$('#index').text();
    var h =$('#index').html();
    alert(t);
    alert(h);
    $('#index').append('<li>メソッド</li>');
    $('#index').find('li').each(function(){
      alert($(this).text().length+'文字');
      var i= $(this).text().length;
      $(this).append('['+i+'文字]');
    });
  });
})(jQuery,window);
