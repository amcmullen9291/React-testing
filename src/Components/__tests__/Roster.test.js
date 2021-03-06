import { render, screen, cleanup } from '@testing-library/react';
import Roster from '../Roster';
import renderer from 'react-test-renderer';

afterEach (() => {
    cleanup(); // resets tests
})

test('test', () => {
    expect(true).toBe(true);
});

test('Should render Roster component', () => {
    render(<Roster/>);
    const rosterElement = screen.getByTestId('rosterList-1'); // syntax; finds data-testid="rosterList-1", NOT id=""
    expect(rosterElement).toBeInTheDocument();  //is the element on the DOM
    //other options...
    expect(rosterElement).toHaveTextContent('Roster');
})

test('should render student name', () => {
    const student = { id:6, firstName: "Adam Marcus", grade: 3, vehicle: "No" };
    render(<Roster student={student}/>)
    const rosterElement = screen.getByTestId('rosterList-1');
    expect(rosterElement).toBeInTheDocument();
    expect(rosterElement).toHaveTextContent(student.firstName);
})

it('renders correctly', () => {

    let student = {id: 7, firstName: "Mark Paulbunker", grade: 10, vehicle: "No Response"};

    const tree = renderer
      .create(<Roster student={student}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    console.log(tree); 
    // @the tree snapshot only tells if the DOM physically changed
    //would work if an element changes but not with CSS text decorations like strike-through?
  });