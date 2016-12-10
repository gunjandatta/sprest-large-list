# SharePoint Large List Example
This add-in is an example of using the gd-sprest framework to query >5000 items from a SharePoint List.

## Dev List
The "Dev" list instance will create 6000 items. Refer to the elements.xml file for details on this.

## App.js
Below is the code to query the "Dev" list for all of the items.
```
// Get the list
(new $REST.List("Dev"))
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
```

### Top 5000
If you do not specify "TOP 5000" results, the default number of items returned will be 100. It will still work, but 60 request will be executed against the server, instead of 2.

### GetAllItems Flag
The "GetAllItems" flag will check the results for the __next property. This property contains the url to the next batch of results. If this property exists, the framework will recursively execute requests to the server, until all items are retrieved.

### Demo
Below is a screen show of the landing page. After querying the results, it displays the # of results and outputs the first and last item "Title" values.

![Demo](https://raw.githubusercontent.com/gunjandatta/sprest-large-list/master/images/demo.png)