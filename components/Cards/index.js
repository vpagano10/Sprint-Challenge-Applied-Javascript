// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articlesArray = [];
let articlesObject = {};

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        articlesObject = response.data.articles;
        articlesArray.push(Object.values(articlesObject));
        // console.log(articlesArray);
        articlesArray.forEach(el => {
            el.forEach(element => {
                element.forEach(e => {
                    console.log(e);
                    entryPointThree.appendChild(CreateNews(e));
                    // CreateNews(e);

                })
            })
        })
        }
    )
    .catch(error => {
        console.log('The data was not returned', error);
    });





    // response.data.topics.forEach(item => {
    //     const newTopic = TabCreator(item);
    //     entryPoint.appendChild(newTopic);
    // })






const entryPointThree = document.querySelector('.cards-container')

function CreateNews(data) {
    const card = document.createElement('div');
    const articleTitle = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const imageContainer = document.createElement('div')
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    articleTitle.textContent = data.headline;
    image.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;

    card.classList.add('card');
    articleTitle.classList.add('headline');
    articleAuthor.classList.add('author');
    imageContainer.classList.add('img-container');

    imageContainer.appendChild(image);
    articleAuthor.appendChild(imageContainer);
    articleAuthor.appendChild(authorName);
    card.appendChild(articleTitle);
    card.appendChild(articleAuthor);

    return card;
}
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

