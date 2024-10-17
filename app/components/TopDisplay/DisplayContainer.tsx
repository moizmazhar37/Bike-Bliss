// DisplayContainer.tsx
import DisplayContent from './DisplayContent/DisplayContent';
import DisplayImage from './DisplayImage/DisplayImage';

const DisplayContainer = () => {
  return (
    <div className=" bg-[#14121F] relative flex flex-col items-center justify-center px-4 py-8 w-full">
      {/* Ensure container width and margins are correct */}
      <div className="w-full max-w-screen-lg flex flex-col items-center justify-center mb-8 mx-auto">
        <DisplayContent />
      </div>
      <div className="w-full max-w-screen-lg relative flex justify-center mx-auto">
        <DisplayImage />
        {/* Circular Gradient behind the image */}
        <div className="absolute inset-0 bg-gradient-radial from-[#14121F] via-transparent to-transparent opacity-60 rounded-full w-96 h-96"></div>
      </div>
    </div>
  );
};

export default DisplayContainer;
