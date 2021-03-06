import React, { useState } from "react";
import AppStyle from "./AppStyle";
import Homepage from "./Homepage/Homepage";
import { HomepageDiv } from "./Homepage/HomepageStyle";
import InventoryStyle from "./InventoryPage/InventoryStyle";
import InventoryPage from "./InventoryPage/InventoryPage";
import { Link } from "./StyledComponents/Link";

const App = () => {
  const [showHomePage, setHomePage] = useState(true);

  const toggleHomePage = () => {
    return setHomePage(!showHomePage);
  };

  if (showHomePage === true) {
    return (
      <AppStyle>
        <HomepageDiv>
          <Link
            green
            href="#"
            onClick={toggleHomePage}
            data-cy="see-inventory-link"
          >
            Explore our inventory
          </Link>
          <Homepage />
        </HomepageDiv>
      </AppStyle>
    );
  } else {
    return (
      <AppStyle>
        <InventoryStyle>
          <Link
            green
            href="#"
            onClick={toggleHomePage}
            data-cy="see-homepage-link"
          >
            Go to homepage
          </Link>
          <InventoryPage />
        </InventoryStyle>
      </AppStyle>
    );
  }
};
export default App;
