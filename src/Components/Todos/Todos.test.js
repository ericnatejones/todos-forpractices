import React from 'react';
import expect from 'expect'
import {mount, shallow, configure} from 'enzyme'
import Todo from './Todo.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

function setup(todo){
  const props = {
    todo
  }

  return shallow(<Todo {...props}/>)
}

describe("Todo list", () => {
    it('lists todos', ()=>{
        const wrapper = setup(false)
        expect(wrapper.find('div').length).toBe(1)

    })

    it('controls the form', ()=>{
        const wrapper = setup(true)
        expect(wrapper.find('div').length).toBe(1) 
    })
})

// describe("One todo", () => {
//     it('shows the "Login" when not authenticated', ()=>{
//         const wrapper = setup(false)
//         expect(wrapper.find('div').length).toBe(1)
//         expect(wrapper.find('button').length).toBe(1)
//         expect(wrapper.find('button').text()).toEqual('Login')
//     })

//     it('shows the "Logout" when authenticated', ()=>{
//         const wrapper = setup(true)
//         expect(wrapper.find('div').length).toBe(1)
//         expect(wrapper.find('button').length).toBe(1)
//         expect(wrapper.find('button').text()).toEqual('Logout')
//     })
// })