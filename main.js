document.getElementById('search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const text = document.getElementById('search-text').value
console.log(text)


const API_KEY="AIzaSyBw6rBlsUhqQVVyOiYFk-5iSYEBo2EAooo";
const url = `https://itunes.apple.com/search?country=us&term=${text}&media=ebook&entity=ebook`

const xhr = new XMLHttpRequest()
xhr.open('GET', url)

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
    const response = JSON.parse(xhr.responseText)
    console.log(response)
    
    let output = " "
            for(let i=0; i < response.results.length; i++) {
                output += `
                
                <div style="background-color: white; width: 20%; margin: 15px; border: 2px solid black; padding: 10px;">
                        
                            <div>
                                <img style="width:100%; height:250px; " src="${response.results[i].artworkUrl100}" />
                                
                                <p style="font-family: ariana ; "><b>TITLE: </b>${response.results[i].trackName}</p>
                                <p><b>Author: </b>${response.results[i].artistName}</p>
                               
                                <a target="_blank" href = "${response.results[i].trackViewUrl}" ><button>READ MORE ... </button> </a>
                            </div>       
                        
                    </div>  
                    
                `
            }
            document.getElementById('my-div').innerHTML = output
            
            
        }
    }
xhr.send()
})