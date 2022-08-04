import React from "react";

type image = String | any;

const Header = ({image} :image) => {
  let style = {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <header id="pageHeader" style={style}>
      {/* header */}
    </header>
  )
}

export default Header