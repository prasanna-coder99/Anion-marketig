import React from "react";

const PlayVideo = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-12 lg:px-20 py-8 lg:py-16 xl:max-w-[1500px] 2xl:max-w-[1900px]">
        <div className="w-full h-full    rounded-lg overflow-hidden shadow-lg">
      <video
        className="w-full  h-full  object-cover "
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ae0feafce5f67e86868829_Anion%20Home%20Page%20Video_1250X620_N-transcode.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default PlayVideo;
