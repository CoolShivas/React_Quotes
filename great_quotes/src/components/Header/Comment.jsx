import { useState } from "react";
import InputComment from "./InputComment";
import classes from "./Comment.module.css";

const Comment = () => {

  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommenthandler = () =>{
    setIsAddingComment(true);
  };

  return (
    <div className={classes.comment_div}>
       <div className={classes.comment_section}>
       <h2> User Comments </h2>
        
        {!isAddingComment && <button className={classes.comment_btn} onClick={startAddCommenthandler}> Add a Comment </button>}

        {isAddingComment && <InputComment/> }

        <p> Comments... </p>

       </div>
    </div>
  )
}

export default Comment;