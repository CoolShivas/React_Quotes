import MainNavigation from "../navigation/MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
    <MainNavigation></MainNavigation>
    <main className={classes.main}>
      {props.children}
    </main>
    </>
  )
}

export default Layout;