// import { Children, React} from "react";
import React from "react";
import styles from "./RowLayout.module.scss";
import ReactDOMServer from "react-dom/server";
import parse from "html-react-parser";

function RowLayout({setBorderRadius, setWidth, children }) {
    var childrenElement = [];
    React.Children.toArray(children).forEach((child, index) => {
        if (React.isValidElement(child)) {
            // var div = `<div className = ${styles.line}></div>`;
            // childrenElement = [...childrenElement, ReactDOMServer.renderToStaticMarkup(child), div];
            childrenElement = [...childrenElement, ReactDOMServer.renderToStaticMarkup(child)];
        }
    });
    return (
        <div className={styles.wrapper} style={{width: `${setWidth}`, borderRadius: `${setBorderRadius}`}}>
            {
            parse(childrenElement.join(""))
            }
        </div>
    );
}

export default RowLayout;
