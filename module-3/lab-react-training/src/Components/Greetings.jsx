import React from "react";
import "../styles/Greetings.css";

const langs = {
  de: "Hallo",
  en: "Hello",
  fr: "Bonjour",
  es: "Ola",
  cn: "你好",
};
                  // "de"
function Greetings({ lang, children }) {
  return (
    <div className="Greetings">
      {/* // langs["de"]// */}
      {langs[lang]} {children}
    </div>
  );
}

export default Greetings;
