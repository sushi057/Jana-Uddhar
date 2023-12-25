import Card from "./Card";
import quiz_image from "../assets/images/quiz_image.jpg";

function Activities() {
  const items = [
    {
      image: quiz_image,
      type: "Programme",
      title: "Lorem Ipsum",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae rerum nihil expedita",
    },
    {
      image: quiz_image,
      type: "Ceremony",
      title: "Lorem ipsum",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae rerum nihil expedita",
    },
    {
      image: quiz_image,
      type: "Ceremony",
      title: "Lorem ipsum",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae rerum nihil expedita",
    },
    {
      image: quiz_image,
      type: "Ceremony",
      title: "Lorem ipsum",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae rerum nihil expedita",
    },
  ];
  return (
    <div className="w-full px-32 my-24 ">
      <p className="font-bold text-5xl text-secondary-600 mb-12">Activites</p>
      <div className="flex flex-row gap-4 justify-between">
        {items.map((item) => (
          <Card
            key={item.type}
            image={item.image}
            type={item.type}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
}

export default Activities;
