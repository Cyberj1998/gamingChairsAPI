let URL = "https://gamingchairsapi.onrender.com/gamingChairs"

fetch(URL).then(res => res.json()).then(data=>{
    console.log(data)
})