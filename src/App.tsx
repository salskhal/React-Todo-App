import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Todolist from "./components/Todolist";


function App() {
  return (
    <div className="font-sans min-h-screen bg-white  flex justify-center items-center flex-col px-4">
      <BackgroundHeading />
      <main className="relative w-full max-w-[872px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] min-h-[436px] bg-[#a18aff] rounded-xl overflow-hidden p-1 grid grid-cols-1 md:grid-cols-3">
        <Sidebar  />
        <Todolist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
