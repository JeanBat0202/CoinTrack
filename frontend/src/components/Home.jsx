import backgroundimage from "../assets/backgroundimage.png";

export default function Home() {
  return (
    <div className="homePage h-full w-full relative">
      <div className="w-full h-full relative">
        <img
          className="w-full h-screen bg-cover bg-center object-cover"
          src={backgroundimage}
          alt="imagecrypto"
        />
        <div className="absolute inset-0 bg-black opacity-55" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-6xl">
        <h1>CRYPTO-COURS</h1>
      </div>
    </div>
  );
}
