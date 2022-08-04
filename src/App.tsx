import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header';
import Main  from './components/Main';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';

function App() {
  let [images, setImages] = useState({
     a: `url('/img/planets.jpg')`,
     b: `url('/img/cats.jpg')`,
     c: `url('/img/dogs.jpg')`,
     d: `url('/img/chubaka.jpg')`,
     e: `url('/img/dyno.jpg')`
  });
  

  const blend = (obj: Object) => {
      const values = Object.values(images).sort(() => Math.random()-0.9);
      const keys = Object.keys(images);  
      let res = Object.assign({}, ...keys.map((n, i) => ({ [n]: values[i] })));

      setImages(res);
  }
  // useEffect(() => console.log('###', images), [images])
  
  return (
    <div className="appGrid">
      <Header     image={images.a}/>
      <Main       image={images.b} blend={blend}/>
      <LeftPanel  image={images.c}/>
      <RightPanel image={images.d}/>
      <Footer     image={images.e}/>
    </div>
  );
}

export default App;
