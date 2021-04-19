$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            dvoured: newDevoured
        };

        // SEnd out POUT Request 
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }

            event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        };

        // Sent out the POST REQUEST
        $.ajax("/api/burgers", {
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Use Page Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Send out the DELETE request.
    $.ajax("/api/cats/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted cat", id);
            // Reload the page again to get the updated list
            location.reload();
        }
    );
});
});
