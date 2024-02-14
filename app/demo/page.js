export default function Page(){
const dogs = [
    {
        name: "Winky",
        description: "A Winky dog",
        imageUrl:"https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=160&h=750&dpr=2",
    },
    {
        name: "Precious",
        description: "precious is a wonderful dog",
        imageUrl:"https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=160&h=750&dpr=2",
    },
    {
        name: "Grumpy",
        description: "a bit grunpy sometimes",
        imageUrl:"https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=160&h=750&dpr=2",
    },
];

    return (
        <main>
        <h1>demo Week 5</h1>
        <h2>These are my favorite dogs</h2>
            {dogs.map(dog => (
                <div className="bg-slate-800">
                    <h3 className="">{dog.name}</h3>
                    <p>{dog.description}</p>
                    <img src={dog.imageUrl} alt={dog.name}/>
                </div>
                ))}
        </main>
    );
}