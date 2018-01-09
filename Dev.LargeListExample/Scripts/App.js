'use strict';

// Wait for the core JS file to be loaded
ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");
function initializePage() {
    // Get the list
    $REST.List("Dev")
        // Get the list items
        .Items()
        // Query for the top 5000 items
        .query({ Top: 5000, GetAllItems: true })
        // Execute the request
        .execute(function (items) {
            document.querySelector("#dev").innerHTML =
                "<p>Total # of items returned: " + items.results.length + "</p>" +
                "<p>First Item: " + items.results[0].Title + "</p>" +
                "<p>Last Item: " + items.results[items.results.length - 1].Title + "</p>";
        });
}
