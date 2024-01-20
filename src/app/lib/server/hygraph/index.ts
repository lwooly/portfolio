import { allProjectsQuery } from "./queries"

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT as string;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN as string;

export const fetchProjectsFromHygraph = async () => {

    try {
        const response = await fetch(HYGRAPH_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', charset: 'utf-8', Authorization: `Bearer ${HYGRAPH_TOKEN}`, },
      
            body: JSON.stringify({query: allProjectsQuery})
        })
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const {data} = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching data', error)
    }
}