import ItemList from "./item-list";


export default function Page()
{
    return(
    <main className="bg-slate-950">
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <section className="p-2 m-2  bg-slate-900 max-w-sm"><ItemList/></section>
     </main>
     );
}
