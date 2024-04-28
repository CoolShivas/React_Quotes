import classes from "./QuotesDetail.module.css";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comment from "../components/Header/Comment";
import { useParams, Route } from "react-router-dom";



const DUMMY_QUOTES = [
  {id:'q1', author:"Max", text:"Learning React is fun!"},
  {id:'q2', author:"John", text:"Learning React + Vite is fun!"},
];


const QuotesDetail = () => {

   const arr = useParams();

   const dataDummy = DUMMY_QUOTES.find((brr)=>brr.id === arr.quotesId);

   if(!dataDummy)
   {
    return (<center> 
      <div className={classes.span_conditional}>
      No quotes found !
      </div> 
      </center>);
   }

  return (
    <center>
        <h2> You are on Quotes Details Page. </h2>
        {/* <p> {arr.quotesId} </p> */}
        <HighlightedQuote 
        textRST={dataDummy.text} 
        authorRST={dataDummy.author}
        ></HighlightedQuote>
        <Route path={`/quotes/${arr.quotesId}/comment`}>
          <Comment></Comment>
        </Route>
    </center>
  )
}

export default QuotesDetail;