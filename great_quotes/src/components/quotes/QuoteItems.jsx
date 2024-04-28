import classes from "./QuoteItems.module.css";
import {Link} from "react-router-dom";

const QuoteItems = ({textABC, authorABC, idABC}) => {
  return (
    <li className={classes.quote_items__div}>
        <figure>
            <blockquote>
                <p> {textABC} </p>
            </blockquote>
            <figcaption> {authorABC} </figcaption>
        </figure>
    <Link className={classes.btn_link__quoteItems} to={`/quotes/${idABC}`}>
        View Full Screen
    </Link>
    </li>
  )
}

export default QuoteItems;