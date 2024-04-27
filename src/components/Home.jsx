
const Home = () => {
  return (
    <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" style={{backgroundImage: "url('./assets/header.png')"}}>
      {/* Main */}
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            RecoverEase
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Find disastor
            </span>
            Happening around
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          Content here......
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
