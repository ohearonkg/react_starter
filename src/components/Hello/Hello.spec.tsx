import * as React from 'react';
import { shallow, ShallowWrapper} from 'enzyme';
import Hello, { HelloProps } from './Hello';

describe("Hello Component", () => {

  /**
   * We create a new shallowly
   * mounted instance of our component
   * before each test
   */
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Hello name="Kevin" age={12} />)
  });

  it("Should render the value passed to its name prop", () => {
    expect(wrapper.html()).toMatch("Kevin");
  });
  
})