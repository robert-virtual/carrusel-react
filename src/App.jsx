import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import "./App.css";
import { Carrusel } from "./components/Carrusel";

function App() {
  return (
    <>
      <h1>Componente padre</h1>
      <Carrusel pictures={[img1, img2, img3, img4, img5]} />
    </>
  );
}

export default App;
