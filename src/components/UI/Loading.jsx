import React from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("loading");

const LoadingEl = () => {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <div className="absolute w-[200px] h-[200px] rounded-[50%] overflow-hidden before:content-none before:absolute before:top-0 before:left-0 before:h-full before:w-full before:shadow-[0 0 5px rgba(255, 255, 255, 0.3)] animate-ring"></div>
      <div className="text-[#737373] text-2xl uppercase tracking-wide leading-[200px] animate-loadingText">loading...</div>
    </div>
  );
};

const Loading = () => {
  return <>{ReactDOM.createPortal(<LoadingEl></LoadingEl>, portalElement)}</>;
};

export default Loading;
