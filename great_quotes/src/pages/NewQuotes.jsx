import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {

  const additionOfQuotes = (authText)=>{
    console.log(authText);
  };

  return (
    <center>
      <h2> You are on New Quotes Page. </h2>
      <QuoteForm additionOfQuotesABC={additionOfQuotes}></QuoteForm>
    </center>
  )
}

export default NewQuotes;