import { useHistory, useLocation } from "react-router-dom";
import classes from "./QuoteList.module.css";
import QuoteItems from "./QuoteItems";


const QuoteList = ({dummyData}) => {

  const oldHistory = useHistory();
  const currLocation = useLocation();



  const handlerOnSorting = () =>{
    console.log("location",currLocation);
    oldHistory.push(`/quotes?arrange=asc`)
  };

  return (
    <>
    <div className={classes.quote_list__sorting}>
      <button onClick={handlerOnSorting}>
        Sort Ascending 
      </button>
    </div>
    <ul className={classes.quote_list__div}>
      {dummyData.map((arr)=>{
        return <QuoteItems key={arr.id}
        idABC={arr.id}
        authorABC={arr.author}
        textABC={arr.text}
        ></QuoteItems>
      })}
    </ul> 
    </>
  )
}

export default QuoteList;