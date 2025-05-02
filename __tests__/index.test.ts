//import {add} from '../index'
//import {foobar} from '../index'
import { greet} from '../index'

//describe('test add', () => {
//    it('should add', () => {
//        expect(add(2,2,)).toBe(4) //    })
//})
//
//describe('foobar', ()=> {
//    it('return a number', () => {
//        expect(foobar(15)[0]).toBe('1')
//    })
//
//    it('should be foo', () => {
//        expect(foobar(15)[2]).toBe('foo')
//    })
//
//    it('should be bar', () => {
//        expect(foobar(15)[4]).toBe('bar')
//    })
//
//    it('should be foobar', () => {
//        expect(foobar(15)[14]).toBe('foobar')
//    })
//})

describe('greet', () => {
    it('says hello', () => {
         expect(greet("world")).toEqual("Hello, world")
    })

    //it('can be chained with filter', () => {
    //    expect(split(":").filter((v) => v !== "b")("a:b")).toEqual(["a"])
    //})


    //it('can be chained with map', () => {
    //    expect(split(":").map((v) => v + "x")("a:b")).toEqual(["ax","bx"])
    //})
    //it('gets used the way we expect it', () => {
    //    expect(new Map(split(":").map((v) => v.trim + "x")("a : b"))).toEqual(["ax","bx"])

    //})
})
