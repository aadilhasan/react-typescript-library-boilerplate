import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";
export default class App extends React.Component {
    render() {
        return <h2 className={styles.heading}> Welcome React+TS </h2>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("example")
);