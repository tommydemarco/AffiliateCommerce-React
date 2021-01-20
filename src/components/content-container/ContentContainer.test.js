import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import ContentContainer from "./ContentContainer";

Enzyme.configure({ adapter: new Adapter() });

test("renders content container", () => {
  const wrapper = shallow(<ContentContainer />);
  expect(wrapper).toBeTruthy();
});

test("renders content container with children", () => {
  const wrapper = shallow(
    <ContentContainer>
      <h1>Test</h1>
    </ContentContainer>
  );
  const h1 = wrapper.find("h1").text();
  expect(h1).toBe("Test");
});
