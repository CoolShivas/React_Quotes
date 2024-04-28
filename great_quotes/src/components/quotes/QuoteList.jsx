import { useHistory, useLocation } from "react-router-dom";
import classes from "./QuoteList.module.css";
import QuoteItems from "./QuoteItems";


const QuoteList = ({dummyData}) => {

  const oldHistory = useHistory();
  // What is useHistory hook? The useHistory hook is a React Router hook that provides access to the history object that manages the browser history stack. This hook allows us to navigate between routes within the component of the React application, unlocking a world of possibilities for dynamic navigation experiences.

  const currLocation = useLocation();
  // The useLocation React Router Hook allows you to access the location object that represents the active URL. The value of the location object changes whenever the user navigates to a new URL. The useLocation Hook can be convenient when you have to trigger any event whenever the URL changes.

  const queryParams = new URLSearchParams(currLocation.search);
  // // URLSearchParams is a built-in JavaScript object that allows you to work with the query string of a URL. It provides methods for appending, deleting, getting, and setting key-value pairs in the query string. You can use it to easily modify and manipulate the URL in your web applications.

  const isSortingAscending = queryParams.get('arrange') === 'asc' ;

  const handlerOnSorting = () =>{
    console.log("location",currLocation);
    oldHistory.push(`/quotes?arrange=` + (isSortingAscending ? 'desc' : 'asc'));
    // // oldHistory.push() allow us to use the back button to go back to the previous url whereas replace provide only the new url and doesn't allow us to go back;
  };

  return (
    <>
    <div className={classes.quote_list__sorting}>
      <button onClick={handlerOnSorting}>
        {/* Sort Ascending  */}
        Sort {isSortingAscending ? 'Descending' : 'Ascending'}
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