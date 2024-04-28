import {Prompt} from "react-router-dom";
import classes from "./QuoteForm.module.css";
import { useRef, useState } from "react";


const QuoteForm = ({additionOfQuotesABC}) => {

    const [isWriting, setIsWriting] = useState(false);

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

    const handlerOnFormFocus = () =>{
        console.log('Focus here');
        setIsWriting(true);
    };

  return (
    <>
    <Prompt 
    when={isWriting} 
    message={(location)=>"Are you sure you want to leave ? All your entered data will be lost ! "}
    ></Prompt>
    <form className={classes.quote_form} onSubmit={handlerOnSubmitForm} onFocus={handlerOnFormFocus}>
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
            {/* Here, onClick={()=>setIsWriting(false)} is added because the prompt is throwing the error while clicking on the back button that's good but also on Add Quote button also, that's why we have added the onClick here. */}
           <button className={classes.add_quote__btn} type="submit" onClick={()=>setIsWriting(false)}> Add Quote </button>
        </div>
    </form>
    </>
  )
}

export default QuoteForm;