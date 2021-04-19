
async function getDogs() {
    let url = "https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6"
    

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