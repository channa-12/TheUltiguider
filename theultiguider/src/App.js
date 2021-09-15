import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const Destination = lazy(() => import("./Pages/Destination"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const SubDestination = lazy(() => import("./Pages/SubDestination"));
const TravelPreparation = lazy(() => import("./Pages/TravelPreparation"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route
          exact
          path="/destination/sub-destination"
          component={SubDestination}
        />
        <Route exact path="/travel-preparation" component={TravelPreparation} />

        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
