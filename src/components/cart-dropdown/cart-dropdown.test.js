import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import CartDropdown from "./CartDropdown";

Enzyme.configure({ adapter: new Adapter() });

test("renders the component without crashing", () => {
  const wrapper = shallow(<CartDropdown />);
  expect(wrapper).toBeTruthy();
});
