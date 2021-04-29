

async function getDogs() {
    let url = "https://api.jsonbin.io/b/6087d126c7df3422f7fee228";
    

    try {
        let response = await fetch(url);
        let data = await response.json();

        
        return data;

        
        
    }
    catch(error) {
        console.log("error")
    }
}
export default getDogs;