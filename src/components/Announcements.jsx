import Card from "./Card";
import award_image from "../assets/images/award_image.jpg";
import quiz_image from "../assets/images/quiz_image.jpg";

function Announcements() {
  const items = [
    {
      image: award_image,
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
    
  ];
  return (
    <div>
      <div className="flex flex-col mb-4">
        <p className="font-bold text-xl">Announcements</p>
        <p className="font-semibold text-2xl">Latest updates</p>
      </div>
      <div className="flex flex-row gap-4">
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

export default Announcements;
