import React, { useEffect, useRef, useState } from "react";
import images from "../../constants/Assets";
import "./ImageSelection.css";
import Options from "../options/Options";
import html2canvas from "html2canvas";

export default function ImageSection() {
  const imageContainerRef = useRef(null);

  const handleDownload = () => {
    const node = imageContainerRef.current;

    // Create a canvas with a fixed size (you can adjust these dimensions as needed)
    const canvas = document.createElement("canvas");
    canvas.width = 540;
    canvas.height = 540;

    const canvasContext = canvas.getContext("2d");

    // Render the content of the container onto the canvas
    html2canvas(node, { canvas })
      .then((canvas) => {
        // Adjust canvas size to fit the content if needed
        const dataUrl = canvas.toDataURL();
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  };

  const accessorieItems = [
    { name: "earings", image: images.earings },
    { name: "flower", image: images.flower },
    { name: "glasses", image: images.glasses },
    { name: "headphone", image: images.headphone },
  ];
  const backgroundItems = [
    { name: "blue1", image: images.blue50 },
    { name: "blue2", image: images.blue60 },
    { name: "blue3", image: images.blue70 },
    { name: "darkBlue1", image: images.darkblue30 },
    { name: "darkBlue2", image: images.darkblue50 },
    { name: "darkBlue3", image: images.darkblue70 },
    { name: "green1", image: images.green50 },
    { name: "green2", image: images.green60 },
    { name: "green3", image: images.green70 },
    { name: "grey1", image: images.grey40 },
    { name: "grey2", image: images.grey70 },
    { name: "grey3", image: images.grey80 },
    { name: "red1", image: images.red50 },
    { name: "red2", image: images.red60 },
    { name: "red3", image: images.red70 },
    { name: "yellow1", image: images.yellow50 },
    { name: "yellow2", image: images.yellow60 },
    { name: "yellow3", image: images.yellow70 },
  ];
  const earItems = [
    { name: "default", image: images.defEar },
    { name: "forward", image: images.forwardEar },
    { name: "backward", image: images.backwardEar },
  ];
  const eyeItems = [
    { name: "default", image: images.defEye },
    { name: "angry", image: images.angry },
    { name: "naughty", image: images.naughty },
    { name: "panda", image: images.panda },
    { name: "smart", image: images.smart },
    { name: "star", image: images.star },
  ];
  const hairItems = [
    { name: "default", image: images.defHair },
    { name: "curls", image: images.curl },
    { name: "bangs", image: images.bang },
    { name: "elegant", image: images.elegant },
    { name: "fancy", image: images.fancy },
    { name: "short", image: images.short },
  ];
  const legItems = [
    { name: "default", image: images.defLeg },
    { name: "cookie", image: images.cookie },
    { name: "tea", image: images.bubbleTea },
    { name: "game", image: images.gameConsole },
    { name: "forward", image: images.forwardLeg },
    { name: "backward", image: images.backwardLeg },
  ];
  const mouthItems = [
    { name: "default", image: images.defMouth },
    { name: "astonished", image: images.astonished },
    { name: "eating", image: images.eating },
    { name: "laugh", image: images.laugh },
    { name: "tongue", image: images.tongue },
  ];
  const neckItems = [
    { name: "default", image: images.defNeck },
    { name: "forward", image: images.forwardBend },
    { name: "backward", image: images.backwardBend },
    { name: "thick", image: images.thick },
  ];

  const [accessories, setAccessories] = useState(null);
  const [backgrounds, setBackgrounds] = useState(null);
  const [ears, setEars] = useState(null);
  const [eyes, setEyes] = useState(null);
  const [hair, setHair] = useState(null);
  const [legs, setLegs] = useState(null);
  const [mouth, setMouth] = useState(null);
  const [neck, setNeck] = useState(null);
  const [display, setDisplay] = useState(null);

  const [selectedAccessoriesItem, setSelectedAccessoriesItem] = useState(null);
  const [selectedBackgroundItem, setSelectedBackgroundItem] = useState(null);
  const [selectedEarItem, setSelectedEarItem] = useState(null);
  const [selectedEyeItem, setSelectedEyeItem] = useState(null);
  const [selectedHairItem, setSelectedHairItem] = useState(null);
  const [selectedLegItem, setSelectedLegItem] = useState(null);
  const [selectedMouthItem, setSelectedMouthItem] = useState(null);
  const [selectedNeckItem, setSelectedNeckItem] = useState(null);

  const handleAccessories = () => {
    setAccessories(
      accessorieItems.map((item, index) => (
        <div className="secondImage">
          <button
            key={index}
            className="secondaryImg"
            value={item}
            onClick={() => handleSecondAccessories(item)}
          >
            {item.name}
          </button>
        </div>
      ))
    );
    setDisplay("accessories");
  };

  const handleBackground = () => {
    setBackgrounds(
      backgroundItems.map((item, index) => (
        <div className="secondImage">
          <img
            key={index}
            value={item}
            src={item.image}
            onClick={() => handleSecondBackground(item)}
          />
        </div>
      ))
    );
    setDisplay("background");
  };

  const handleEar = () => {
    setEars(
      earItems.map((item, index) => (
        <div className="secondButton">
          <button
            key={index}
            value={item}
            onClick={() => handleSecondEar(item)}
          >
            {item.name}
          </button>
        </div>
      ))
    );
    setDisplay("ear");
  };

  const handleEye = () => {
    setEyes(
      eyeItems.map((item, index) => (
        <div className="secondButton">
          <button
            key={index}
            value={item}
            onClick={() => handleSecondEye(item)}
          >
            {item.name}
          </button>
        </div>
      ))
    );
    setDisplay("eye");
  };

  const handleLeg = () => {
    setLegs(
      legItems.map((item, index) => (
        <button key={index} value={item} onClick={() => handleSecondLeg(item)}>
          {item.name}
        </button>
      ))
    );
    setDisplay("leg");
  };

  const handleHair = () => {
    setHair(
      hairItems.map((item, index) => (
        <div className="secondImage">
          <button
            key={index}
            value={item}
            onClick={() => handleSecondHair(item)}
          >
            {item.name}
          </button>
        </div>
      ))
    );
    setDisplay("hair");
  };

  const handleMouth = () => {
    setMouth(
      mouthItems.map((item, index) => (
        <div className="secondImage">
          <button
            key={index}
            value={item}
            onClick={() => handleSecondMouth(item)}
          >
            {item.name}
          </button>
        </div>
      ))
    );
    setDisplay("mouth");
  };

  const handleNeck = () => {
    setNeck(
      neckItems.map((item, index) => (
        <div className="secondImage">
          <button
            key={index}
            value={item}
            onClick={() => handleSecondNeck(item)}
          >
            {item.name}
          </button>
        </div>
      ))
    );
    setDisplay("neck");
  };

  const handleSecondAccessories = (item) => {
    setSelectedAccessoriesItem(item);
  };
  const handleSecondBackground = (item) => {
    setSelectedBackgroundItem(item);
  };
  const handleSecondEar = (item) => {
    setSelectedEarItem(item);
  };
  const handleSecondEye = (item) => {
    setSelectedEyeItem(item);
  };
  const handleSecondHair = (item) => {
    setSelectedHairItem(item);
  };
  const handleSecondLeg = (item) => {
    setSelectedLegItem(item);
  };
  const handleSecondMouth = (item) => {
    setSelectedMouthItem(item);
  };
  const handleSecondNeck = (item) => {
    setSelectedNeckItem(item);
  };

  return (
    <>
      <div className="container">
        <div className="options">
          <div className="optionSection">
            <button onClick={handleAccessories}>Accessories</button>
            <button onClick={handleBackground}>Backgrounds</button>
            <button onClick={handleEar}>Ears</button>
            <button onClick={handleEye}>Eyes</button>
            <button onClick={handleHair}>Hair</button>
            <button onClick={handleLeg}>Leg</button>
            <button onClick={handleMouth}>Mouth</button>
            <button onClick={handleNeck}>Neck</button>
          </div>
          <div className="secondSection">
            {display === "accessories" && accessories}
            {display === "background" && backgrounds}
            {display === "ear" && ears}
            {display === "eye" && eyes}
            {display === "hair" && hair}
            {display === "leg" && legs}
            {display === "mouth" && mouth}
            {display === "neck" && neck}
          </div>
        </div>

        <div className="image-container" ref={imageContainerRef}>
          <div>
            {selectedAccessoriesItem && (
              <img
                className="img"
                id="accessories"
                src={selectedAccessoriesItem.image}
              />
            )}
          </div>

          <div>
            {selectedBackgroundItem && (
              <img className="img" src={selectedBackgroundItem.image} />
            )}
          </div>

          <div>
            {!selectedEarItem && (
              <img className="img" id="ear" src={images.defEar} alt="" />
            )}
            {selectedEarItem && (
              <img className="img" src={selectedEarItem.image} />
            )}
          </div>
          <div>
            {!selectedEyeItem && (
              <img className="img" id="eye" src={images.defEye} alt="" />
            )}
            {selectedEyeItem && (
              <img className="img" id="eye" src={selectedEyeItem.image} />
            )}
          </div>
          <div>
            {!selectedHairItem && (
              <img className="img" id="hair" src={images.defHair} alt="" />
            )}
            {selectedHairItem && (
              <img className="img" id="hair" src={selectedHairItem.image} />
            )}
          </div>
          <div>
            {!selectedLegItem && (
              <img className="img" src={images.defLeg} alt="" />
            )}
            {selectedLegItem && (
              <img className="img" src={selectedLegItem.image} />
            )}
          </div>
          <div>
            {!selectedMouthItem && (
              <img className="img" id="mouth" src={images.defMouth} alt="" />
            )}
            {selectedMouthItem && (
              <img className="img" id="mouth" src={selectedMouthItem.image} />
            )}
          </div>
          <div>
            {!selectedNeckItem && (
              <img className="img" id="neck" src={images.defNeck} alt="" />
            )}
            {selectedNeckItem && (
              <img className="img" id="neck" src={selectedNeckItem.image} />
            )}
          </div>

          <img className="img" src={images.nose} alt="" />
        </div>
      </div>
      <div className="download">
        <button onClick={handleDownload}>download</button>
      </div>
    </>
  );
}
