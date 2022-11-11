function ShoppingList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:4000/items")
        .then((r) => r.json())
        .then((items) => setItems(items));
    }, []);
  
    // add this function!
    function handleAddItem(newItem) {
      console.log("In ShoppingList:", newItem);
    }
  
    function handleCategoryChange(category) {
      setSelectedCategory(category);
    }
  
    const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
  
      return item.category === selectedCategory;
    });
  
    return (
      <div className="ShoppingList">
        {/* add the onAddItem prop! */}
        <ItemForm onAddItem={handleAddItem} />
        <Filter
          category={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }