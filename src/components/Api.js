import {v4 as uuidv4} from 'uuid';


async function getDogs() {
    //let url = "https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6"
    

    try {
        // let response = await fetch(url);
        // let apiData = await response.json();

        let data = [];
        data.push({name: "Molly", age: 4, present: true, uuid:uuidv4()});
        data.push({name: "Örjan", age: 10, present: true, uuid:uuidv4()});
        data.push({name: "Berit", age: 14, present: true, uuid:uuidv4()});
        data.push({name: "Jesus", age: 4, present: false, uuid:uuidv4()});
        data.push({name: "Bullen", age: 9, present: true, uuid:uuidv4()});
        data.push({name: "Korven", age: 7, present: false, uuid:uuidv4()});
        data.push({name: "Strumpan", age: 8, present: true, uuid:uuidv4()});
        data.push({name: "Apan", age: 11, present: false, uuid:uuidv4()});
        data.push({name: "Hunden", age: 15, present: false, uuid:uuidv4()});
        data.push({name: "Görel", age: 2, present: true, uuid:uuidv4()});
        data.push({name: "Erik", age: 3, present: false, uuid:uuidv4()});
        data.push({name: "Bosse", age: 1, present: true, uuid:uuidv4()});
        data.push({name: "Henke", age: 4, present: false, uuid:uuidv4()});
        data.push({name: "Biffen", age: 10, present: false, uuid:uuidv4()});
        data.push({name: "Bananen", age: 12, present: false, uuid:uuidv4()});
        data.push({name: "Bullen", age: 13, present: true, uuid:uuidv4()});
        data.push({name: "Harry", age: 15, present: false, uuid:uuidv4()});
        data.push({name: "Nanna", age: 3, present: false, uuid:uuidv4()});
        data.push({name: "Maja", age: 5, present: false, uuid:uuidv4()});
        data.push({name: "Sylle", age: 7, present: false, uuid:uuidv4()});
        data.push({name: "Pålle", age: 6, present: true, uuid:uuidv4()});
        data.push({name: "Torsten", age: 8, present: false, uuid:uuidv4()});
        data.push({name: "Jan", age: 7, present: true, uuid:uuidv4()});
        data.push({name: "Rocky", age: 9, present: true, uuid:uuidv4()});
        data.push({name: "Reagan", age: 4, present: true, uuid:uuidv4()});
        data.push({name: "Billy", age: 3, present: false, uuid:uuidv4()});
        data.push({name: "Bo", age: 11, present: false, uuid:uuidv4()});
        console.log("dogs downloaded, returning list")

        return data;

        // if (apiData !== undefined) {
        //     return apiData;
        // } else {
        //     return data;
        // }
        
    }
    catch(error) {
        console.log("error")
    }
}
export default getDogs;