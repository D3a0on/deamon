const key = document.getElementById('key')
const run = document.getElementById('run')

const server_link = ``


run.addEventListener('click', ()=> {
    fetch(server_link).then(response => response.Json()).then(data, ()=> {
    
    if(data["login"] == false){
    
        alert('Chave Invalida')
        
    }
    if(data["login"] == true){
    
        window.location.replace('https://painel.d3a0on.vercel.app/')
    }
    })


})
