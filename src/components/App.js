<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React from "react";


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
