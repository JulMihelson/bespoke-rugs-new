// import css from "./App.module.css";
import { ExampleList } from "./components/Examples/ExampleList";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import data from "../src/components/Examples/DataBase.json";
import { IdealCarpet } from "./components/IdealCarpet/IdealCarpet";
// import { Production } from "./components/Production/Production";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExampleList examples={data.examples} />
      <IdealCarpet />
      {/* <Production /> */}
    </>
  );
}

export default App;
