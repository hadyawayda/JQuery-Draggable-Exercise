$(function () {
  let count = 0;

  $(".draggable").draggable({
    revert: true,
  });

  $(".right").droppable({
    drop: function () {
      $(".output").append(`<div class="box new">BOX #${++count}</div>`);
    },
  });

  $(".left").droppable({
    drop: function () {
      $(".output").prepend(`<div class="box new">BOX #${++count}</div>`);
    },
  });
});
