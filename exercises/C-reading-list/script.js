
function readingList(books) {
const content=document.querySelector("#content");
const ul = document.createElement("ul");
books.forEach(element => {
  const li=document.createElement("li");
  const p=document.createElement("p");
  const p2 = document.createElement("p");
  const img = document.createElement("img");
  if(element.alreadyRead){
    li.style.backgroundColor = "green"
  }else{
   li.style.backgroundColor = "red"
  }
  p.innerText=element.title ;
  p2.innerText = element.author;
  img.setAttribute("src",element.cover);
  li.appendChild(p);
  li.appendChild(p2);
  li.appendChild(img);
  ul.appendChild(li);
  content.appendChild(ul);

});
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg"
  }
];

readingList(books);