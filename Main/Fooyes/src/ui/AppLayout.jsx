import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SpinnerFullPage from "./SpinnerFullPage";
import { useSelector } from "react-redux";
import Location from "../pages/Location";

const containerStyle = {
  "media (min-width: 768px)": {
    display: "grid",
    height: "100vh",
  },
};

function AppLayout() {
  const position = useSelector((state) => state.user.address);

  const { pathname } = useLocation();
  const hideFooter = pathname.includes("restaurant");
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return position === "" ? (
    <div id="register_bg">
      <Location />
    </div>
  ) : (
    <div>
      <Header />
      {isLoading && <SpinnerFullPage />}
      {!isLoading && <Outlet />}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default AppLayout;
