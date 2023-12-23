function Card({ image, type, title, info }) {
  return (
    <div className="px-4 py-4 max-w-72 border-4 rounded-md border-yellow-500 flex flex-col">
      <img src={image} className="h-48" />
      <div className="flex flex-col">
        <p className="px-2 py-.5 my-4 bg-yellow-300 w-fit rounded-md">{type}</p>
        <div className="flex flex-col px-1">
          <p className="font-bold text-lg">{title}</p>
          <p>{info}</p>
        </div>
        <button className="font-semibold px-2 py-1 mt-4 max-w-fit bg-yellow-500 rounded-md">
          See details
        </button>
      </div>
    </div>
  );
}

export default Card;
