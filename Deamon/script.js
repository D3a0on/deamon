const key = document.getElementById('key')
const run = document.getElementById('run')



run.addEventListener('click', ()=> {
    
    fetch("https://api-rho-swart.vercel.app/api", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        "key":key.value
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json",
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => {

        if(json.login == true) {
            open(json.redirect)
        }
        else{
            alert('Key Invavida')
        }


})
})
