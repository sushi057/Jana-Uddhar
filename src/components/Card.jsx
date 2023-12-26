function Card({ image, type, title, info }) {
  return (
    <div className="pb-4 max-w-72 border-4 rounded-md border-secondary-600 bg-background-200/30 flex flex-col">
      <div className="relative">
        <img src={image} className="objec-cover" />
        <p className="font-semibold px-2 py-1 bg-secondary-500 w-fit rounded-bl-md absolute top-0 right-0">
          24 Jestha
        </p>
      </div>
      <div className="px-4 flex flex-col">
        <p className="font-semibold px-2.5 py-1 my-4 bg-secondary-500 w-fit rounded-md">
          {type}
        </p>
        <div className="flex flex-col px-1">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-lg leading-6">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
