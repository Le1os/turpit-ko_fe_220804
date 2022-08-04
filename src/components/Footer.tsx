import React from "react";

type image = String | any;

const Footer = ({image} :image) => {
  let style = {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <footer id="pageFooter" style={style}>
      {/* footer */}
    </footer>
  )
}

export default Footer