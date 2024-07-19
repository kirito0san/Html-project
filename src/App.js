import Form from "./components/Form";
import Home from "./components/Home";
import Image from "./components/Image";
import Links from "./components/Links";
import List from "./components/List";
import Miscellaneous from "./components/Miscellaneous";
import Table from "./components/Table";
import Text from "./components/Text";


function App() {
  return (
    <div className="flex flex-col gap-5 p-5 mx-auto my-5 w-5/6 text-white rounded-lg App">
      <Home />
      <Text />
      <Image />
      <Links />
      <Form />
      <Table />
      <List />
      <Miscellaneous />

      <a href="#home-page" className="flex fixed right-5 bottom-5 justify-center items-center w-10 h-10 font-extrabold text-blue-500 bg-[#535353] rounded-lg" >
        UP
      </a>
    </div>
  );
}

export default App;
