$(function() {
    $(".change-vegetarian").on("click", function(event) {
        var id = $(this).data("id");
        var newVegetarian = $(this).data("newvegetarian");

        var newVegetarianState = {
            vegetarian: newVegetarian
        };

        $.ajax("/api/tacos/" + id, {
            type: "PUT",
            data: newVegetarianState
        }).then(
            function() {
                console.log("changed vegetarian to", newVegetarian);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {

        event.preventDefault();

        var newTaco = {
            taco_name: $("#ca").val().trim(),
            vegetarian: $("[name=vegetarian]:checked").val().trim()
        };

        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then(
            function() {
                console.log("created new taco");
                location.reload();
            }
        );
    });

    $(".delete-taco").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/tacos" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted taco", id);
                location.reload();
            }
        );
    });
});