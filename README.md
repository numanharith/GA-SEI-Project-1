# LEMONADE STAND
## Technologies used
### Google Books API
Using it for this project was simple. The parameters I used in its URL were volumes (i.e. required) and subject (optional). Both parameters were set to search for the keyword "lemonade". This was because I wanted to append a list of book titles into the game, for the imaginative purpose of semantically relevant book recommendations.
#### AJAX
```javascript
$.ajax({
    url:'https://www.googleapis.com/books/v1/volumes?q=lemonade+subject:lemonade&key=AIzaSyBJFvXiEFoq49wCcpJ2TxL64hQbLF_Ibhs',
    success: function(json) {
        var booksArr = "";
        for (i = 0; i < json.items.length; i++) {
                booksArr += "<li>Title: " + json.items[i].volumeInfo.title + ", Author: " + json.items[i].volumeInfo.authors[0] + "<br>";
        }
        document.getElementById("book-article").innerHTML = "<ol>" + booksArr + "</ol><br>";
    }
});
```
