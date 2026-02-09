export default async function fetchProducts(){
    const url = '/api/products';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}