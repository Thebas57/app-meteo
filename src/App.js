import Search from "./components/Search";

function App() {
  //Fonction qui s'execute quand on clique sur une ville
  const handleOnSearchChange = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
