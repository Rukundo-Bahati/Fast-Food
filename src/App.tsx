import {
  Nav,
  Header,
  Customers,
  Footer,
  Collection,
  Sellers,
  Articles,
} from "./components";

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Header />
      <Collection />
      <Sellers />
      <Articles />
      <Customers />
      <Footer />
    </div>
  );
};

export default App;
