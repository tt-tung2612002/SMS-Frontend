// import React, { createContext, useEffect, useState } from "react";

// const CloudinaryScriptContext = createContext<{ loaded: boolean }>({
//   loaded: false,
// });

// interface CloudinaryUploadWidgetProps {
//   uwConfig: any; // Adjust the type based on the actual type of uwConfig
//   setPublicId: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

// function CloudinaryUploadWidget({
//   uwConfig,
//   setPublicId,
// }: CloudinaryUploadWidgetProps) {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // Check if the script is already loaded
//     if (!loaded) {
//       const uwScript = document.getElementById("uw");
//       if (!uwScript) {
//         // If not loaded, create and load the script
//         const script = document.createElement("script");
//         script.setAttribute("async", "");
//         script.setAttribute("id", "uw");
//         script.src = "https://upload-widget.cloudinary.com/global/all.js";
//         script.addEventListener("load", () => setLoaded(true));
//         document.body.appendChild(script);
//       } else {
//         // If already loaded, update the state
//         setLoaded(true);
//       }
//     }
//   }, [loaded]);

//   const initializeCloudinaryWidget = () => {
//     if (loaded) {
//       const myWidget: any = window.cloudinary.createUploadWidget(
//         uwConfig,
//         (error: any, result: any) => {
//           if (!error && result && result.event === "success") {
//             setPublicId(result.info.public_id);
//           }
//         }
//       );

//       document.getElementById("upload_widget")?.addEventListener(
//         "click",
//         () => {
//           myWidget.open();
//         },
//         false
//       );
//     }
//   };

//   return (
//     <CloudinaryScriptContext.Provider value={{ loaded }}>
//       <button
//         id="upload_widget"
//         className="cloudinary-button"
//         onClick={initializeCloudinaryWidget}
//       >
//         Upload
//       </button>
//     </CloudinaryScriptContext.Provider>
//   );
// }

// export default CloudinaryUploadWidget;
// export { CloudinaryScriptContext };
