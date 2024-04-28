import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = ({ textRST, authorRST }) => {
  return (
    <div className={classes.highlighted}>
      <figure>
        <p> {textRST} </p>
        <figcaption> {authorRST} </figcaption>
      </figure>
    </div>
  );
};

export default HighlightedQuote;
