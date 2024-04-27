import QuoteList from "../components/quotes/QuoteList";


const DUMMY_QUOTES = [
  {id:'q1', author:"Max", text:"Learning React is fun!"},
  {id:'q2', author:"John", text:"Learning React + Vite is fun!"},
];

const AllQuotes = () => {
  return (
    <center>
      <h2> You are on All Quotes Page. </h2>
      <QuoteList dummyData={DUMMY_QUOTES}></QuoteList>
    </center>
  )
}

export default AllQuotes;