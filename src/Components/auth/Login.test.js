import React from 'react';
import expect from 'expect'
import {configure, mount, shallow} from 'enzyme'
import Login from "./Login"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

function setup(isAuthenticated){
  const props = {
    isAuthenticated
  }

  return mount(<Login {...props}/>)
}

describe("Login button", () => {
  it('shows "Login" when not authenticated', () => { 
    const wrapper = setup(false)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').text()).toEqual('Login')
  })

  it('shows "Logout" when authenticated', () => {
    const wrapper = setup(true)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').text()).toEqual('Logout')
  })
})


//mocho expect enzyme