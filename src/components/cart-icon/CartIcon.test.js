import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import CartIcon from "./CartIcon";

Enzyme.configure({ adapter: new Adapter() });
