import { useEffect, useState } from "react";

export function Carrusel({ pictures = [] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(pictures);
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
      <div className="d-flex justify-center">
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
        <img src={images[imageIndex]} style={{ width: "100%", height: 700 }} />
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
      <div className=" d-flex flex-row justify-center">
        {pictures.map((img, idx) => (
          <div
            key={img}
            className={
              "point cursor-pointer " + (imageIndex == idx ? " current" : " ")
            }
            onClick={() => setImageIndex(idx)}
          ></div>
        ))}
      </div>
    </>
  );
}
