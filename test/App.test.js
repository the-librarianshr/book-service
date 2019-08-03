import App from '../client/src/App.jsx';
import { waitForState } from 'enzyme-async-helpers';
import 'babel-polyfill';

let wrapper;

describe('<App />', () => {
  it('should render a Book component', () => {
    expect(wrapper.find('Book')).toHaveLength(1);
  });
  it('should make an API call', () => {
    wrapper = shallow(<App />);
    let instance = wrapper.instance();
    jest.spyOn(instance, 'getBook');
    instance.componentDidMount();
    expect(instance.getBook).toHaveBeenCalledTimes(1);
  });
  it('should update state with book data', async () => {
    let wrapper = mount(<App />);
    await waitForState(wrapper, state => state.book.length > 0);
    expect(wrapper.state('book')).toHaveLength(1);
  })
})
