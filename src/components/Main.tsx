import React from "react";
import MagicButton from "./MagicButton";


const Main = ({image, blend}: any | VoidFunction ) => {
  let style = {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <main id="mainArticle" style={style}>
      <MagicButton blend={blend}/>
    </main>
  )
}

export default Main