import React, {useState} from "react";


const MagicButton = ({blend}: any | VoidFunction) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
    console.log(typeof blend)
    blend();
  };

  return (
    <button id="button"
        style={{
          backgroundColor: isActive ? 'blue' : 'yellow',
          color: isActive ? 'white' : 'black',
        }}
        onClick={handleClick}
      >
        Make Magic
    </button> 
  )
}

export default MagicButton;
