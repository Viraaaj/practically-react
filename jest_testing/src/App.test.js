import App from './App';
import { shallow, mount } from 'enzyme';
import Counter from './components/Counter';


describe("Counter Testing", () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Counter />) //it will render specific component
    // wrapper = mount(<App />) //it will render components prensent in defined components (only works for react version < 16)
    console.log(wrapper.debug());
  })

  test('renders title of counter', () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app")
  })

  test("render a button with text of increment", () => {
    // const wrapper = shallow(<App />)  //initialized wrapper in beforeEach(), henceno need to describe again
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  });

  test("reneder initial value of state in div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0")
  });

  test("render click event of increment button counter value", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })

  test("find decrement counter button", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement")
  })

  test("render click event to decrement counter", () => {
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("-1")
  })

  test("render click event to increment and then decrement counter", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })


})


