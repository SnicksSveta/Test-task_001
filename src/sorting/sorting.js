import jQuery from "jquery";

const sortItems = () => {
  // code for sorting
};

jQuery(".all-filter-results__tabs").each((i, elem) => {
  const buttons = jQuery("button", elem);

  buttons.on("click", e => {
    const clickedButton = jQuery(e.target);

    sortItems();

    buttons.removeClass("active");
    clickedButton.addClass("active");
  });
});
