// alert("HELLO");



$(".changeStatus").on("click", function (event) {
  const id = $(this).data("id");

  const newEat = $(this).data("neweats");

  const newEatStatus = {
    devoured: newEat
  };


  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newEatStatus
  }).then(_ => {
    console.log("Changed burger status to", newEat);

    location.reload();
  });
});

$("#addForm").on("submit", function (event) {

  event.preventDefault();

  const newBurger = {
    burgerName: $("#burger").val().trim(),
    devoured: $("[name=eaten]:checked").val().trim()
  };

  console.log(newBurger);

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(_ => {
    console.log("Created a burger!");

    location.reload();
  });
});



$(".deleteButton").on("click", function (event) {


  const id = $(this).data("burgerid")

  $.ajax("/api/burgers/" + id, {
    type: "DELETE",
  }).then(_ => {
    console.log("Deleted the burger with the id of " + id);
    location.reload(true);
  })
});