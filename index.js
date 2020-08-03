function shoppingList {
    $("#js-shopping-list-form").submit((event) {
    event.preventDefault();
    const newItem = $("#shopping-list-entry").val();
    $(".shopping-list").append(
      `<li>
          <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
    );
  });

    $('.shopping-item-toggle').on('click', function(event) {
        $(this).closest('.shopping-item').toggleClass('.shopping-item__checked');
    });
  
    $('.shopping-item-delete').on('click', function(event) {
        $(this).closest('li').remove();
    });
};

$(shoppingList);
