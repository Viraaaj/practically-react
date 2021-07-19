import { shallow } from "enzyme";
import { default as PersonList } from "./PersonList";


describe('Personlist component testing', () => {

            //It will add shallow at start to every test case
  let personListWrapper;
  beforeAll(() => {
    personListWrapper = shallow(<PersonList />)
  })


              
  it('checking ul tag is present in PersonList component', () => {
    const personListUl = personListWrapper.find('ul')
    expect(personListUl).toHaveLength(1)
  })



  it('checking person list h1 tag with text', () => {
    const personListText = personListWrapper.find("h1")
    expect(personListText.text()).toContain("This is person list")
  })



  it('renders nothing when there is no People List', () => {
    const people = [];
    const personListWrapper = shallow(<PersonList people={people} />)
    const personFullList = personListWrapper.find("li")
    expect(personFullList).toHaveLength(0)
  })

  it('rendering list of zero people with least amount of code same as above', () => {
      expect(shallow( <PersonList people={[]} /> ).find("li")).toHaveLength(0)
  })



  it('rendering one li element', () => {
    const people = [{ firstName: 'Viraj', lastname: 'Nimbalkar' }]
    const personListWrapper = shallow( <PersonList people={people} /> )
    const personFullList = personListWrapper.find("li")
    expect(personFullList).toHaveLength(1)
  })



  it('renders multiple li elemnts', () => {
    const people = [{ firstName: 'Viraj', lastname: 'Nimbalkar' },
                    { firstName: 'react', lastname: 'developer' }]
    const personListWrapper = shallow( <PersonList people={people} /> )
    const personFullList = personListWrapper.find("li")
    expect(personFullList).toHaveLength(2)
  })

  

  it('renders firstname and lastName in people list', () => {
    const people = [
      { firstName: 'Viraj', lastName: 'Nimbalkar' }
    ]
    const personListWrapper = shallow( <PersonList people={people} /> )
    const personFullList = personListWrapper.find("li")
    expect(personFullList.text()).toContain(people[0].firstName)
    expect(personFullList.text()).toContain(people[0].lastName)  //You can create two diferent test for checking firstName and lastName
  })

})