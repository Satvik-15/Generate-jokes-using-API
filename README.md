This is a joke generator application. It uses the [JokeAPI](https://v2.jokeapi.dev/) to get jokes and renders them on the page.

## index.js

This is the main file of the application. It imports the express and axios modules and sets up the routes.

The `get` method is used to get the jokes from the API and render them on the page. The `try` block tries to get the joke from the API. If the request is successful, the `res.render` method is used to render the joke on the page. If the request fails, the `console.error` method is used to log the error.

```
app.get("/dark", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Dark?type=twopart");
    res.render("index.ejs", {
      category: JSON.stringify(result.data.category),
      set_up: JSON.stringify(result.data.setup),
      delivery: JSON.stringify(result.data.delivery),
    });
  } catch (error) {
    console.error("ERROR 404");
  }
});
```