import { useParams } from "react-router-dom"
import MovieDetailsCardList from "../components/cardsList/MovieDetailsCardslist";

export default function MoviesDetailPage (
 
) 

{   const {id} = useParams();
 return ( <><h2 className="text-center">Movie review</h2> 
 <MovieDetailsCardList /> </>)
}