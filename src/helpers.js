// Local storage
export const fetchData = (key) => {
  console.log("fetch data", key)
  console.log(JSON.parse(localStorage.getItem(key)))
  
    return JSON.parse(localStorage.getItem(key));
    
  };