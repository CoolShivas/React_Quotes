import Comment from "../components/Header/Comment";
import { useParams, Route } from "react-router-dom";


const QuotesDetail = () => {

   const arr = useParams();

  return (
    <center>
        <h2> You are on Quotes Details Page. </h2>
        <p> {arr.quotesId} </p>
        <Route path={`/quotes/${arr.quotesId}/comment`}>
          <Comment></Comment>
        </Route>
    </center>
  )
}

export default QuotesDetail;