const key = document.getElementById('key')
const run = document.getElementById('run')

run.addEventListener('click', ()=> {
    
    fetch("https://api-git-main.d3a0on.vercel.app/api", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        title: "foo", 
        body: `${key.value}`, 
        userId: 1 
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json));
