<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React from "react";

const MovieList = [
  // {
  //     "title": "Animal", "Actor": "Ranbir kapoor", "Director": "Sandip Vangga"
  // },
  // {
  //     "title": "Dangal", "Actor": "Amir khan", "Director": "Nitesh"
  // },
  // {
  //     "title": "3 iditos", "Actor": "Amir khan", "Director": "Rajkumar Hirani"
  // },
  // {
  //     "title": "jawan", "Actor": "Sharukh Khan", "Director": "Atlee"
  // },

  
      {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
    
 
]


const App = ()=>{

    
    const [categories, setCategories] = useState(MovieList);
   
  
    function filterItems (){
  
       setCategories(MovieList)
  
    };
    function breakfastItem(){
      setCategories(categories.filter((item) => item.category== "breakfast"));
    } 
  
    function lunchItem (){
      setCategories(categories.filter((item) => item.category== "lunch"));
    }
  
    function shakeItem(){
      setCategories(categories.filter((item) => item.category == "shakes"))
    }
  
    return(
      <div>
        <nav className="menu">
          <h1> OUR MENU</h1>
          <div>
            <h2 onClick={filterItems}>All</h2>
            <h2 onClick={breakfastItem}>Breakfast</h2>
            <h2 onClick={lunchItem} >Lunch </h2>
            <h2 onClick={shakeItem}>Shakes</h2>
  
          </div>
        </nav>
           
           {
            categories.map(item=>(
              <div>
               
                <h1>{item.title}</h1>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p>{item.desc}</p>
              </div>
            ))
           }
      
      </div>
    )
  }

  export default App
