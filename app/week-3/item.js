export default function Item(props) {
    let message = `Buy ${props.quantity} in ${props.category}`;
    return(
        <div>
            <h2 className="text-xl font-bold">{props.name}</h2>
            <div className="text-sm">{message}</div>
        </div>
    );
}