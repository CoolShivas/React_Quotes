import classes from "./InputComment.module.css";
// import { useState } from "react";

// const InputComment = () => {
//   const [visible, setVisible] = useState(false);
//   const showTextArea = () => {
//     setVisible(true);
//   };
//   const hideTextArea = () => {
//     setVisible(false);
//   };

//   return (
//     <section className={classes.input_comment__div}>
//       <div className={classes.comment_container}>
//         <label htmlFor="usercomment"> User Comments </label>
//         {visible && (
//           <textarea
//             name="usercomment"
//             id="usercomment"
//             cols="30"
//             rows="10"
//           ></textarea>
//         )}
//         <button onClick={showTextArea} className={classes.comment_add__btn}> Add a Comment </button>
//         <button onClick={hideTextArea} className={classes.comment_hide__btn}> Close a Comment </button>
//         <p> Comments... </p>
//       </div>
//     </section>
//   );
// };

// export default InputComment;

const InputComment = () => {
  return (
    <section className={classes.comment_input__div}>
      <label htmlFor="yourcomment"> Your Comments </label>
      <textarea name="yourcomment" id="yourcomment" cols="30" rows="10"></textarea>
      <button className={classes.add_comment__btn}> Add Comment </button>
    </section>
  );
};

export default InputComment;
