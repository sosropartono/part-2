

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>total of {sum} exercises </p>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) => {

    return (
        <div>
            {parts.map((part) =>
                <Part part={part} />
            )}
        </div>
    )
    // <>
    //     <Part
    //         part={parts[0]}
    //     />
    //     <Part
    //         part={parts[1]}
    //     />
    //     <Part
    //         part={parts[2]}
    //     />
    // </>
}

const Course = ({ course }) => {
    const exercises = course.parts.map((obj) => {
        return obj.exercises
    })
    const sum = exercises.reduce((accumulator, starting) => {
        return starting + accumulator
    })



    return (

        <div>
            <Header course={course.name} />
            <div>
                <Content parts={course.parts} />
                <Total sum={sum} />
            </div>
        </div>
    )
}




export default Course