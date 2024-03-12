import React from "react";
import images from "../../constants/Assets";

export default function ImageSection() {
  return (
    <>
      <div className="image-container">
        <img src={images.flower} alt="" />
      </div>
    </>
  );
}
