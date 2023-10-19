import DtLogo from "./dtLogo";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-secondary">
      <div className="flex justify-center items-center space-x-1 text-3xl text-gray-700">
        <DtLogo width='128px' height='128px' fill={'white'} />
      </div>
    </div>
  );
  
};

export default Loader;
