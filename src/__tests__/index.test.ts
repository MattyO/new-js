//import {add} from '../index'
//import {foobar} from '../index'
import { greet} from '../index'


describe('greet', () => {
    it('says hello', () => {
         expect(greet("world")).toEqual("Hello, world!")
    })
})
