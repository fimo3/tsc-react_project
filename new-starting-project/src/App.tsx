import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input label="Yuor naem" id="name" type="text" />
      <Input label="Your aeg" id="age" type="number" />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://www.example.com">A Link</Button>
      </p>
    </main>
  );
}

export default App;
