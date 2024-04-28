import classes from "./QuoteList.module.css";
import QuoteItems from "./QuoteItems";

const QuoteList = ({dummyData}) => {
  return (
    <ul className={classes.quote_list__div}>
      {dummyData.map((arr)=>{
        return <QuoteItems key={arr}
        idABC={arr.id}
        authorABC={arr.author}
        textABC={arr.text}
        ></QuoteItems>
      })}
    </ul> 
  )
}

export default QuoteList;