function shoppingList() {
  $("#js-shopping-list-form").submit((event) => {
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

  $("ul").on("click", ".shopping-item-toggle", function (event) {
    event.stopPropagation();
    let itemSpan = $(this).closest("li").children("span");
    itemSpan.toggleClass("shopping-item shopping-item__checked shopping-item");
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    $(this).closest("li").remove();
  });
}

$(shoppingList);
