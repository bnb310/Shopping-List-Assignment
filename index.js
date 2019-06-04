$(function addItem() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      const newItem = $('#shopping-list-entry').val();
      $('li').first().clone().html(function() {
        return '<span class=\"shopping-item\">' + newItem + '</span><div class=\"shopping-item-controls\"><button class=\"shopping-item-toggle\"><span class=\"button-label\">check</span></button><button class=\"shopping-item-delete\"><span class=\"button-label\">delete</span></button></div>'
      }).appendTo('.shopping-list');
    });  
  });

$(function checkItem() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
    });
});

$(function deleteItem() {
    $('ul').on('click', '.shopping-item-delete',  function(event) {
        this.closest('li').remove();
    })
});