
function List() {
  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "banana", calories: 45}, 
    {id: 3, name: "orange", calories: 23},
    {id: 4, name: "cocunut", calories: 222},];

    //fruits.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));
    // fruits.sort((a,b) => a.calories - b.calories);
    // fruits.sort((a,b) => b.calories - a.calories);
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  const listItems = lowCalFruits.map(lowCalFruit => 
  <li key={lowCalFruit.id}>
    {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b> calories
    </li>)

  return(<ol>{listItems}</ol>);
}

export default List;