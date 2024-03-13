import AddItem from "./add-new-item";

export default function MyFunction() {
  return (
    <main className="bg-slate-950 p-1">
      <h2 className="text-3xl font-bold m-1 py-2">Shopping List</h2>
      <AddItem />
    </main>
  );
}
