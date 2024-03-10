// export default function Todu({task}) {
//     return (
//         <h3>How to create a todu list app</h3>,
//         <li>task: {task}</li>
//     )
// }

export default function Todu({ task, isDone }) {
    if (isDone) {
        return <li>Finished task: {task}</li>
    } else {
        return <li>work on task: {task}</li>
    }
}