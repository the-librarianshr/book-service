import Book from '../client/src/Book.jsx';

let wrapper = shallow(<Book />);


describe('<Book /> rendering', () => {
  it('should render a div', () => {
    expect(wrapper.children('div')).toHaveLength(1);
  });

})