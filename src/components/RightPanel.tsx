import React from "react";

type image = String | any;

const RightPanel = ({image} :image) => {
  let style = {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <aside id="siteAds" style={style}>
      {/* right */}
    </aside>
  )
}

export default RightPanel