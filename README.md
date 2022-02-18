# HTTP

In this assignment we will grab some data from the publicapis and manipulate it to show a certain way

## Where to start:

Fork repository
Clone the forked repository
In terminal:
`npm init -y`
`npm i axios`
`touch index.js`

## Instructions:

1.  Use the api.publicapis.org/entries endpoint
2.  Use Axios to get the data (const axios = require('axios'))
3.  Parse the data so that the output renders 3 items per category
4.  Only log the api, description, link and category
5.  Follow the example below for the final output

## Recommendation:

1.  Get the axios call to work and output all the data
2.  Then refactor and use array methods if you can
3.  Also use destructuring if you can
4.  Refer to the video instructions

```
OUTPUT SHOULD LOG:

SUMMARY:
API Data from https://api.publicapis.org/entries:
3 Options listed per Category.

ANIMALS
------------------
Api: Cats
Description: Pictures of cats from Tumblr
Link: https://docs.thecatapi.com/
Category: Animals

Api: Dogs
Description: Based on the Stanford Dogs Dataset
Link: https://dog.ceo/dog-api/
Category: Animals

Api: HTTPCat
Description: Cat for every HTTP Status
Link: https://http.cat/
Category: Animals



ANIME
------------------
Api: Cats
Description: Pictures of cats from Tumblr
Link: https://docs.thecatapi.com/
Category: Anime

Api: Dogs
Description: Based on the Stanford Dogs Dataset
Link: https://dog.ceo/dog-api/
Category: Anime

Api: HTTPCat
Description: Cat for every HTTP Status
Link: https://http.cat/
Category: Anime


ANTI-MALWARE
------------------
Api: Cats
Description: Pictures of cats from Tumblr
Link: https://docs.thecatapi.com/
Category: Anti-Malware

Api: Dogs
Description: Based on the Stanford Dogs Dataset
Link: https://dog.ceo/dog-api/
Category: Anti-Malware

Api: HTTPCat
Description: Cat for every HTTP Status
Link: https://http.cat/
Category: Anti-Malware

....and so on for each of the 45 categories
```
