import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([img1, img2, img3, img4, img5]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageIndex == 4) {
        setImageIndex(() => 0);
        return;
      }
      setImageIndex(() => imageIndex + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);
  useEffect(() => {
    console.log(imageIndex);
  }, [imageIndex]);

  return (
    <>
      <div className="d-flex">
        <button onClick={() => setImageIndex(imageIndex - 1)} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <img src={images[imageIndex]} width={800} />
        <button onClick={() => setImageIndex(imageIndex + 1)} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
