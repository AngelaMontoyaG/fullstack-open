const Header = (props) => <h1>{props.courseName}</h1>

const Part = (props) => (
   <p>
      {props.part.name} {props.part.exercises}
   </p>
)

const Content = (props) => {
   return (
      <div>
         {props.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
   )
}

const Total = ({parts}) => {
   const totalExercises = parts.reduce((sum, part) => {
      return sum + part.exercises
   }, 0)

   return (
      <p>
         <strong>total of {totalExercises} exercises</strong>
      </p>
   )
}


const Course = ({ course }) => {
   return (
      <div>
         <Header courseName={course.name} />
         <Content parts={course.parts} />
         <Total parts={course.parts}/>
      </div>
   )
}


export default Course