import Item from './item'

export default function ItemList(){
    
  const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };

    //creating a list of appended items
    const items = [item1, item2, item3, item4, 
      item5, item6, item7, item8, item9, item10,
       item11, item12];
        
    let itemArray = [];
    for (let i = 0; i < items.length; i++) {
      let value = <Item {...items[i]}/>
      itemArray.push(
        <li key={i} className="p-2 m-4 bg-slate-900 max-w-sm">
            {value}
        </li>
      )
      }

    return(
        <ul>{itemArray}</ul>
    );
}

//   {items.map((item) => (
//     <Item name={item.name} quantity={item.quantity} category={item.category}/>
//   ))}
// </div>