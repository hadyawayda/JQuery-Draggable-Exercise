$(function () {
  let position = { x: undefined, y: undefined };
  let count = 0;

  window.addEventListener("mousemove", (e) => {
    position.x = e.clientX;
    position.y = e.clientY;
  });
  // $(".left").on( "mouseenter", function() {
  //   $(".left").toggle( "highlight" );
  // });
  rect = document.querySelector(".default").getBoundingClientRect();

  $(".draggable").draggable({
    revert: true,
  });

  $(".draggable").on("mouseup", function () {
    if (rect.y < position.y && rect.y + 150 > position.y) {
      if (rect.x < position.x && rect.x + 75 > position.x) {
        $(".output").prepend(`<div class="box new">BOX #${++count}</div>`);
        rect = document.querySelector(".default").getBoundingClientRect();
      }
      if (rect.x + 75 < position.x && rect.x + 150 > position.x) {
        $(".output").append(`<div class="box new">BOX #${++count}</div>`);
        rect = document.querySelector(".default").getBoundingClientRect();
      }
    }
  });
});
