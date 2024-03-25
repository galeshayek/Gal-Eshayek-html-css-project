const url = 'http://www.boredapi.com/api/activity'
export default async function fetchData() {
    try {
        const response = await fetch(url);
        const data: JSON = await response.json();
        return data;
    } catch (error) {
        console.error('error fetching data', error);
    }
}
