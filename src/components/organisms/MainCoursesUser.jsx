import imgJS from "../../assets/cursoJavascript.svg";
import imgHtmlCss from "../../assets/HtmlCss.svg";
import CardCursoUser from "../molecules/CardCursoUser";

const MainCoursesUser = () => {
  const courses = [
    {
      courseId: "html-css",
      image: imgHtmlCss,
      title: "Html5 & Css3: De Novato a Ninja",
      hours: "9",
      progress: "50",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
    },
    {
      courseId: "javascript",
      image: imgJS,
      title: "Javascript: De Novato a Ninja",
      hours: "12",
      progress: "20",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {courses.map(course => (
        <CardCursoUser
          key={course.courseId}
          courseId={course.courseId}
          image={course.image}
          title={course.title}
          hours={course.hours}
          progress={course.progress}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default MainCoursesUser;

