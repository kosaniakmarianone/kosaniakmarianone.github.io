const spiner   = document.getElementById('spiner');
const list     = document.getElementById('list');
const articles = [];

db.collection("articles").get().then( function(res) {
    
    spiner.style.display = "none";

    res.forEach( function(doc) {
        const article = doc.data();
        articles.push(article);
        drawArticle(article);
    });

    console.log(articles);
});


function drawArticle(data){
    const article = document.createElement('article');

    const title = document.createElement('h2');
    const text = document.createElement('div');
    const author = document.createElement('a');

    title.innerHTML  = data.title;
    text.innerHTML   = data.article;
    author.innerHTML = "Оригінал";
    author.href      = data.author;

    article.appendChild(title);
    article.appendChild(text);
    article.appendChild(author);

    list.appendChild(article);
}