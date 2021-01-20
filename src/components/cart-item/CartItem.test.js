import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import CartItem from "./CartItem";

Enzyme.configure({ adapter: new Adapter() });

test("renders cart item", () => {
  const wrapper = shallow(<CartItem item={{}} />);
  expect(wrapper).toBeTruthy();
});
