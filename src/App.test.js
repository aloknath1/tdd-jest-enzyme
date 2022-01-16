import { shallow } from 'enzyme';
import Counter from './Counter';

describe("counter Testing", () => {  
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(<Counter />);
   console.log(wrapper.debug());
  });

  test('renders the title of counter', () => {  
    //console.log(wrapper.debug());
    expect(wrapper.find('h1').text()).toContain('This is a counter text');

    // const { getByText } = render(<App />);
    // const linkElement = getByText('This is a counter text');
    // expect(linkElement).toBeInTheDocument();
  });

  test("renders the button of `increment`", () => {   
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');  
  });

  test("renders the initial state value", () => {   
    expect(wrapper.find('span').text()).toBe("0");  
  });

  test("renders the state value on button click", () => {   
    wrapper.find('#increment-btn').simulate("click");
    expect(wrapper.find('span').text()).toBe("1");  
  });

});

