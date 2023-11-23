import Course from './components/Course'


const App = () => {
  const courses = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }

    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [

      {
        name: 'Routing',
        exercises: 3,
        id: 1
      }, {

        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }



  ]
  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />

    </div>
  )
}

export default App
