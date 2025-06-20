import { useParams } from "react-router-dom"

export default function MoviesDetailPage (
 
) 

{   const {id} = useParams();
 return ( <h2 className="text-center">movie details</h2> )
}