$(document).ready(function(){
  $('[data-fn="delete"]').click(function(){
    $(this).parents('tr').hide(3000,()=>{alert(2)})
  })
  $('[data-fn="pay"]').click(function(){
    $(this).parents('main *').hide()
    $("<div class='thanks'><p></p><h3></h3></div>")
    .find('p').html('&times;')
    .end()
    .find('h3').html("Thank you for shopping with us <span role='image'>🎉</span>")
    .end()
    .appendTo('main')
  })
})