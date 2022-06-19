const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1 
    class Cat{
    complain(){
      console.log("Meow!");
    }
  }
  const cat = new Cat();
  cat.complain();
//Question 2 
  const heading = document.querySelector('h3');
  heading.innerHTML = "Updated heading";
//Question 3
  heading.style.fontSize="2em";
//Question 4
  heading.classList.add('subheading');
//Question 5
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => paragraph.style.color='red')
//Question 6 
  const resultsContainer = document.querySelector('.results');
  resultsContainer.innerHTML = `<p> New paragraph </p>`;
  resultsContainer.style.backgroundColor = 'yellow';
//Question 7
  const iterateOverSomethingFunction = (list)=>{
    list.forEach(ele => console.log(ele.name));
  }
  
  iterateOverSomethingFunction(cats);
//Question 8
  const createCats = (cats)=>{
    let html = ``;
    cats.forEach(cat =>{
      html += `<div>
      <h5>${cat.name}</h5>
      <p>${cat.age? cat.age : "Age unknown"}</p>
      </div>`
    })
  
    return html;
  }
  const catContainer = document.querySelector('.cat-container');
  catContainer.innerHTML = createCats(cats);
  