//Inclusion d'image étape 1
// import img1 from './img/img1.jpeg';
// import img2 from './img/img2.jpeg';
// import img3 from './img/img3.jpeg';

//Objet servant au style étape1
let monStyle= {
  color: "red",
  border: "2px solid black",
  borderRadius: "10px"
}

function App() {
  return (
    <div>
      {/* Inclusion d'image étape2 */}
      {/* <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" /> */}

      {/* inclusion de l'objet dans le style */}
      <h1 style={monStyle}>Bonjour tout le monde</h1>
      {/* Attribut dans balise JSX */}
      <h2 style= {{border: '1px solid'}}>Comment allez vous</h2>
    </div>
  );
}

export default App;
