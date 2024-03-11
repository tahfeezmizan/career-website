export default function Singers({ singer}) {
    return (
        <div>
            <h3>Name: {singer.name} </h3>
            <p>age: {singer.age}</p>
        </div>
    )
}