import Header from "./components/header";
import Banner from "./components/banner";
import Explore from "./components/explore";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Explore />
      </main>
    </div>
  );
}
