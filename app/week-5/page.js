import ItemList from "./item-list";
import Sort from "./sort";

export default function Page()
{
    return(
    <main className="bg-slate-950 p-4">
        <div>
            <h2 className="text-3xl font-bold m-2">Shopping List</h2>
            <ItemList/>
        </div>
     </main>
     );
}
