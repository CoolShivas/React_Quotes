import classes from "./QuoteForm.module.css";
import { useRef } from "react";


const QuoteForm = ({additionOfQuotesABC}) => {

    const authorInputRef = useRef();
    const textInputRef = useRef();

    

    const handlerOnSubmitForm = (event) =>{
        event.preventDefault();
        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;
        additionOfQuotesABC({
            author : enteredAuthor,
            text : enteredText,
        });
    };

  return (
    <form className={classes.quote_form} onSubmit={handlerOnSubmitForm}>
        <div className={classes.quoteForm_loading}>
            Loading...
        </div>

        <div className={classes.control}>
            <label htmlFor="author"> Author </label>
            <input type="text" id="author" 
            ref={authorInputRef}/>
        </div>

        <div className={classes.control}>
            <label htmlFor="text"> Text </label>
            <textarea name="text" id="text" cols="30" rows="5" ref={textInputRef}
            ></textarea>
        </div>

        <div className={classes.control}>
           <button className={classes.add_quote__btn} type="submit"> Add Quote </button>
        </div>
    </form>
  )
}

export default QuoteForm;