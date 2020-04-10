import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Icon Generator");

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="Icon Generator"
        active={activeItem === "Icon Generator"}
        onClick={(e, { name }) => setActiveItem(name)}
        href="#/"
      />

      <Menu.Item
        name="About"
        active={activeItem === "About"}
        onClick={(e, { name }) => setActiveItem(name)}
        href="#/about"
      />
    </Menu>
  );
};

export default Navigation;
