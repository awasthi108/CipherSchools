// 1. JSX looks and behaves like HTML.
// 2. JSX can contain 2 things:
//   a. Html tags
//   b. React Compomnents
// 3. JSX allows you to write JS code inside.


function App() {
  const name="Cipher School"
  return (
    <div>
      <h1 
      style={{
        color:"red",
        textAlign:"center"
      }}
      >Hello From {name}</h1>
    </div>
  );
}

export default App;
