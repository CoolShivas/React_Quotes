import {useHistory} from "react-router-dom" ;
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {

  const newHistory = useHistory();

  const additionOfQuotes = (authText)=>{
    console.log(authText);
    newHistory.push(`/quotes`);
  };

  

  return (
    <center>
      <h2> You are on New Quotes Page. </h2>
      <QuoteForm additionOfQuotesABC={additionOfQuotes}></QuoteForm>
    </center>
  )
}

export default NewQuotes;