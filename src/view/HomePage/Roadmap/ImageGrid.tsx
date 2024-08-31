"use client";

import React, {useEffect} from "react";
import "./ImageGrid.css";
function ImageGrid() {

  // useEffect(() => {
  //   const handleContextMenu = (e: { preventDefault: () => void; }) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);


  // useEffect(() => {
  //   const handleKeydown = (e: { ctrlKey: any; key: string; preventDefault: () => void; shiftKey: any; }) => {
  //     if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
  //       alert("No inspect allowed.");
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeydown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeydown);
  //   };
  // }, []);

  


  const images = [
    "/assets/Wonders/one.png",
    "/assets/Wonders/two.png",
    "/assets/Wonders/three.png",
    "/assets/Wonders/four.png",
    "/assets/Wonders/five.png",
    "/assets/Wonders/six.png",
    "/assets/Wonders/seven.png",
  ];



  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className={`image-container ${index + 1}`}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover select-none"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;

// import React from 'react';
// import './ImageGrid.css'

// function ImageGrid() {
//   const images = [
//     '/assets/Wonders/one.png',
//     '/assets/Wonders/two.png',
//     '/assets/Wonders/three.png',
//     '/assets/Wonders/four.png',
//     '/assets/Wonders/five.png',
//     '/assets/Wonders/six.png',
//     '/assets/Wonders/seven.png',
//   ];

//   return (
//     <div className="grid grid-cols-7 image-grid">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`border border-gray-300 image-container box${index+1}`}
//         >
//           <img
//             src={image}
//             alt={`Image ${index + 1}`}
//             className="w-full h-full object-cover "
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageGrid;
