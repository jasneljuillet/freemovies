const Card = ({ alt, text, src }) => {
  return (
    <div className="bg-red-300 rounded-lg cursor-pointer">
      <div className="">
        <img className="w-full h-48" src={src} alt={alt} />
      </div>
      <div className="w-full bg-gray-300rounded-b-lg">
        <p className="text-black p-2 text-lg md:text-xl">{text}</p>
      </div>
    </div>
  );
};

export default Card;
