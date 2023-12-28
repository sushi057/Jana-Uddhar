import about_page from "../assets/images/gallery/about_page.webp";
import school_building from "../assets/images/gallery/school_building.jpg";

function About() {
  return (
    <div className="mx-36 pt-32">
      <h1 className="text-7xl font-bold mt-12 text-secondary-600">
        Jana Uddhar Secondary School
      </h1>
      <div className="text-xl font-semibold py-12 flex flex-col items-center gap-8">
        <img src={about_page} className="rounded-md" />
        <p className="px-16">
          Jana Uddhar Secondary School, situated in Chunnikhel, Chapali on the
          outskirts of the Kathmandu valley, is a remarkable public school
          managed by CSN. Originally established in 2015 with just over 100
          students and a less-than-favorable reputation, the school has
          undergone a remarkable transformation under the leadership of Trishna
          Kandel and Richa Shahi, who serve as School Leaders. Today, Jana
          Uddhar Secondary School boasts a student population exceeding 350,
          earning it recognition as the best public school in the municipality
          in 2019.
          <br />
          <br />
          The significant improvement in its standing has prompted the
          government to invest in the school’s infrastructure, resulting in the
          construction of two new large buildings. This positive trajectory has
          solidified the schools position as the first charter school in Nepal.
          Under the effective management of Principal Mr. Pete Pattisson, the
          school now offers classes from Kindergarten to 10th grade, with a
          current enrollment of 300+ students. The dedicated team of staff at
          Jana Uddhar is committed to realizing the school’s motto: to become
          the first choice for parents in the community in the coming years.
          Notably, the school has introduced a new computer lab, reflecting its
          commitment to modern education. Two full-time staff members are
          entrusted with the day-to-day operationalization of this facility,
          emphasizing the school’s focus on providing students with a
          well-rounded and technologically advanced learning experience.
          <br />
          <br />
          <blockquote className="italic border-l-8 border-l-secondary-600 pl-6">
            Our aim is not just to improve a few schools, but to transform the
            public education sector in Nepal, by proving that public schools can
            be successful with the right support. We are outraged by the chronic
            failure of public education in Nepal, and are driven by a simple
            motto: We put students first.
          </blockquote>
          <br />
          Jana Uddhar Secondary School stands as a testament to the positive
          impact of effective leadership and community support on educational
          institutions. By the programme’s end in 2025, the school strives to
          achieve a 95% attendance rate and empower 95% of Grades 6 to 10
          students with essential computer skills. Many of these 400 students
          are from low-income backgrounds or orphaned.
          <img
            src={school_building}
            width={1024}
            className="pt-8 rounded-xl mx-auto"
          />
        </p>
        <div className="flex flex-col items-center">
          <p className="px-16 py-8">
            In Kathmandu, there is a notable presence of exceptional private
            schools grounded in advanced educational theories and led by
            dedicated, knowledgeable educators. Despite being considered a great
            value by U.S. standards, the cost of these schools remains beyond
            the means of the majority of Nepalis. Conversely, public or
            government schools face challenges such as insufficient funding, a
            scarcity of books and materials, a shortage of teachers, and overall
            limited resources to meet the diverse needs of their students. For
            instance, in one school, students expressed a simple dream – to have
            a school bus. Within this educational landscape, the{" "}
            <a
              href="https://collaborativeschools.info/"
              target="blank"
              className="underline underline-offset-2 hover:underline-offset-4 hover:text-secondary-600"
            >
              Collaborative Schools Network
            </a>{" "}
            emerges as an intriguing alternative model. Functioning as a
            public/private partnership, akin to certain charter schools in the
            U.S., CSN brings valuable expertise through two Teach for Nepal
            (TFN) alumni. These individuals, having dedicated two years to
            living and working in village schools, possess skills in math,
            science, and English. Additionally, CSN has the capacity to hire
            extra teachers and provide funding for essential resources such as
            books, computers, and even smart boards.
            <br />
            <br />
            The Collaborative Schools Network adopts and oversees the
            transformation of existing public schools, particularly those
            serving some of the nation’s most economically disadvantaged
            children. Currently managing three schools, CSN strategically
            leverages existing government funding for greater impact. TFN alumni
            play a crucial role within CSN by teaching, mentoring government
            teachers, and spearheading a comprehensive school improvement
            process. This includes managing parent relations, ensuring
            punctuality and full attendance of students, and addressing
            logistics such as the availability of substitute teachers. A nearby
            temple further contributes to the initiative by providing free
            midday meals for primary students. The Collaborative Schools Network
            stands as a promising initiative to enhance education in public
            schools, particularly for Nepal’s underprivileged children.
          </p>
          <iframe
            width="1024"
            height="600"
            src="https://www.youtube.com/embed/jaOjEsFIHT4?si=FkXOeL_ZmBMqcDTp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
