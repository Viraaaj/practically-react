import React from "react";
import App from './App';
import { shallow } from "enzyme";
import PersonList from "./components/PersonList";


describe('Testing', () => {

  let appWrapper
  beforeAll(() => {
    appWrapper = shallow(<App />)
  })

  // it('Testing the app', () => {
  //   const appWrapper = shallow(<App />)
  // });

  it('renders person list', () => {    
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  })

  it('Checking the state in app component', () => {
    const appState = appWrapper.state()
    expect(appState).not.toBeNull();
  })

  it('checking people property in state', () => {      
    const appState = appWrapper.state()
    expect(appState.people).toBeDefined()
  })

  it('passing prople props of state to personList component in App.js', () => {
    const personList = appWrapper.find(PersonList)
    expect(personList.props().people).toEqual(appWrapper.state().people);
  })

})