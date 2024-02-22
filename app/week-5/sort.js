import SortOption from "./sortOption";
import ItemList from "./item-list";

export default function Sort(){
    const itemArray = <ItemList/>
    const aList = ["a", "z", "c","g", "h", "p", "e", ];
    return(
        <main className="flex gap-2">
            <h2>Sort by: </h2>
            <button>HI </button>
            <button>i</button>
            <button>am</button>
            <SortOption {...aList}/>
        </main>
    );
};
