import fetchData from "./fetch.js";
import { Data } from "./types.js";
async function Data() {
    const data: Data = await fetchData();
    const d: Data = data
    console.log(data)
    console.log(data.participants)
}
Data()