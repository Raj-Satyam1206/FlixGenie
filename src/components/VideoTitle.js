
const VideoTitle = (props) => {
    const {title , overview}  = props;
  return (
    <div className="w-screen aspect-video pt-[15%] px-4 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold md:w-3/5">{title}</h1>
      <p className="hidden md:inline-block py-4 text-base md:text-lg w-2/5">{overview}</p>
      
      <div className="my-3 md:my-4">
        <button className=" bg-white text-black py-2 md:py-3 px-6 md:px-10 text-base md:text-lg rounded-lg hover:bg-opacity-80 font-bold">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 font-bold bg-gray-500 text-white py-2 md:py-3 px-6 md:px-10 text-base md:text-lg bg-opacity-50 rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;