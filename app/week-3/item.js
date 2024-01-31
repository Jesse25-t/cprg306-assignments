// export default function Item({name, quantity, category}) {
//     return(
//         <section>
//             <h2>Title: {name}</h2>
//             <div>Buy {quantity} in {category}</div>
//         </section>
//     );
// }

export default function Item(props) {
    let message = `Buy ${props.quantity} in ${props.category}`;
    return(
        <section>
            <h2 className="text-xl font-bold">{props.name}</h2>
            <div className="text-sm">{message}</div>
        </section>
    );
}