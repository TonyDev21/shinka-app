import CardCurso from "../molecules/CardCurso"
import imgJS from "../../assets/cursoJavascript.svg"
import imgPython from "../../assets/cursoPython.svg"
import imgJava from "../../assets/cursoJava.svg"
import imgReact from "../../assets/cursoReact.svg"
import imgNodeJs from "../../assets/cursoNodeJs.svg"
import imgTailwind from "../../assets/cursoTailwind.svg"


const MainCourses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <CardCurso
            image={imgJS}
            title="Javascript: De Novato a Ninja"
            hours="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            price="s/4.99"
            courseId="javascript-de-novato-a-ninja" // Identificador único
        />
        {/* Curso 02*/}
        <CardCurso
            image={imgPython}
            title="Python: De Novato a Ninja"
            hours="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            price="s/4.99"
            courseId="python-de-novato-a-ninja" // Identificador único
        />
        {/* Curso 03*/}
        <CardCurso
            image={imgJava}
            title="Java: De Novato a Ninja"
            hours="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            price="s/4.99"
            courseId="java-de-novato-a-ninja" // Identificador único
        />
        {/* Curso 04*/}
        <CardCurso
            image={imgReact}
            title="ReactJS: De Novato a Ninja"
            hours="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            price="s/4.99"
            courseId="reactjs-de-novato-a-ninja" // Identificador único
        />
        {/* Curso 05*/}
        <CardCurso
            image={imgNodeJs}
            title="NodeJS: De Novato a Ninja"
            hours="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            price="s/4.99"
            courseId="nodejs-de-novato-a-ninja" // Identificador único
        />
        {/* Curso 06*/}
        <CardCurso
            image={imgTailwind}
            title="Tailwind CSS: De Novato a Ninja"
            hours="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            price="s/4.99"
            courseId="tailwindcss-de-novato-a-ninja" // Identificador único
        />
    
    </div>
  )
}

export default MainCourses