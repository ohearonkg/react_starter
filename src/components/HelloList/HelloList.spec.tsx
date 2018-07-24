import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import HelloList from "./HelloList";

describe("Hello List Component", () => {
  /**
   * We create a new shallowly
   * mounted instance of our component
   * before each test
   */
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HelloList
        hellos={[
          {
            age: 24,
            name: "Kevin"
          },
          {
            age: 22,
            name: "Sarah"
          }
        ]}
      />
    );
  });

  it("Should render the value passed to its name prop", () => {
    expect(wrapper.html()).toMatch("Kevin");
  });
});
