import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../css/GalleryComponent.css";
import Title from "./Title";

export default function GalleryComponent() {
  const [state, setstate] = React.useState({ photoIndex: 0, isOpen: false });
  const [loadedImages, setloadedImages] = React.useState([]);
  const changeState = (newValue) => {
    setstate(newValue);
  };
  const loadedImage = (image) => {
    if (!loadedImages.includes(image))
      setloadedImages([...loadedImages, image]);
  };
  let images = [
    "https://drive.google.com/uc?id=1sPjABvsS83lFrg6OCEwdeLkLPQEiYaBb",
    "https://drive.google.com/uc?id=165JFN6V8nFV7i4bROjp4MJejrR2clVOh",
    "https://drive.google.com/uc?id=13z6GJjclHYJthdeicMGCXjsTYSnQYtma",
    "https://drive.google.com/uc?id=12QjB3nbYl42nHc2j-RUYMz1ssaYfExoM",
    "https://drive.google.com/uc?id=13nFjX5x_SOH0qGC5Ro4S4kC8zUY73YEK",
    "https://drive.google.com/uc?id=1_0sbCde-TNyIllIwEnAwJMGwFV3Jdfgq",
    "https://drive.google.com/uc?id=1gYIarET1Cd4BiXO_ANPRAnZ2viKFBmXt",
    "https://drive.google.com/uc?id=145b_7o90jvS4bBYRT0oP13RMjFIZ2Bda",
    "https://drive.google.com/uc?id=1g5rMmTcTksv2DvLpCZQmn7NJUXWPHXp_",
    "https://drive.google.com/uc?id=1my8me2tmZ-HUOEQme1d6cc7TavHL-JzS",
    "https://drive.google.com/uc?id=1Y99dpJUsvu-bh11vBsOtutgyFiGORGyU",
    "https://drive.google.com/uc?id=16Hbp7E3loTQHEZneT9EqE0HdYf7xSzxe",
    "https://drive.google.com/uc?id=13mtkAFG-OEeCsCeLlVjgZ1FDKwCelG1Y",
    "https://drive.google.com/uc?id=111AbFkK4Be5wh-sPGoV-L6Zs6QKasEa6",
    "https://drive.google.com/uc?id=1WWuaF5SqqStpJ55O3KSWPS4Ig9-9-B97"
  ];

  const { photoIndex, isOpen } = state;
  return (
      <>
    <div style={{height: "2rem"}}></div>
    <Title title="Our Gallery" />
    <div className="gallery-component">
      {images.map((image) => (
        <div key={image}>
          {loadedImages.includes(image) ? (
            <></>
          ) : (
            <img
              src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
              width="100%"
              height="100%"
              alt="Loader"
            />
          )}
          <img
            onLoad={() => loadedImage(image)}
            className={loadedImages.includes(image) ? "" : "d-none"}
            src={image}
            alt="Gallery"
            onClick={() => changeState({ photoIndex, isOpen: true })}
            onError={(e) => {
              e.target.src =
                "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
            }}
          ></img>
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => changeState({ isOpen: false })}
          onMovePrevRequest={() =>
            changeState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
              isOpen: true
            })
          }
          onMoveNextRequest={() =>
            changeState({
              photoIndex: (photoIndex + 1) % images.length,
              isOpen: true
            })
          }
        />
      )}
    </div>
    </>
  );
}
