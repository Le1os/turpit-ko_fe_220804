import React from "react";

type image = String | any;

const LeftPanel = ({image} :image) => {
  let style = {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <nav id="mainNav" style={style}>
      {/* left */}
    </nav>
  )
}

export default LeftPanel