import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const QuotesDetail = () => {

   const {quotesId} = useParams();
   console.log(quotesId);

  return (
    <section>
        <h2> You are on Quotes Details Page. </h2>
        <p> {quotesId} </p>
    </section>
  )
}

export default QuotesDetail;