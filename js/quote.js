const Hquote = document.querySelector("div span:first-child");
const Hauthor = document.querySelector("div span:last-child");

const quote = [
    {
        quote: "number 1",
        author: "auth 1"
    },
    {
        quote: "number 2",
        author: "auth 2"
    },
    {
        quote: "number 3",
        author: "auth 3"
    },
    {
        quote: "number 4",
        author: "auth 4"
    },
    {
        quote: "number 5",
        author: "auth 5"
    },
    {
        quote: "number 6",
        author: "auth 6"
    },
    {
        quote: "number 7",
        author: "auth 7"
    }
]

selectQuote = quote[Math.floor(Math.random()*quote.length)];
Hquote.innerText = selectQuote.quote;
Hauthor.innerText = selectQuote.author;