import is from '../src'

describe( 'is', () => {

    it ( "arguments", () => {
        ( function () {
            expect( is.arguments( arguments ) ).toBe( true )
        } )()
        expect( is.arguments( {} ) ).toBe( false )
    }) 


    it('array', () => {
        ( function () {
            expect( is.array( arguments ) ).toBe( false )
        } )()
        expect( is.array( [] ) ).toBe( true )
        expect( is.array( {} ) ).toBe( false )
    })

    it('asyncFunction', () => {
        expect( is.asyncFunction( async ()=>{} ) ).toBe( true )
        expect( is.asyncFunction( ()=>{} ) ).toBe( false )
        expect( is.asyncFunction( function () {} ) ).toBe( false )
    })

    it('boolean', () => {
        expect( is.boolean( true ) ).toBe( true )
        expect( is.boolean( false ) ).toBe( true )
        expect( is.boolean( [] ) ).toBe( false )
        expect( is.boolean( 0 ) ).toBe( false )
    })

    it('error', () => {
        expect( is.error( new Error() ) ).toBe( true )
        expect( is.error( new TypeError() ) ).toBe( true )
    })


    it('formdata', () => {
        expect( is.formdata( new FormData() ) ).toBe(true)
    })


    it('function', () => {
        expect( is.function( ()=>{} ) ).toBe( true )
        expect( is.function( async ()=>{} ) ).toBe( true )
        expect( is.function( function () {} ) ).toBe( true )
        expect( is.function( new Array ) ).toBe( false )
    })


    it('iteable', () => {
        ( function () {
            expect( is.iterable( arguments ) ).toBe( true )
        } )()
        expect( is.iterable( [] ) ).toBe( true)
        expect( is.iterable( new Set() ) ).toBe( true)
        expect( is.iterable( new Map() ) ).toBe( true)
        expect( is.iterable( '' ) ).toBe( true)
    })

    it('map', () => {
        expect( is.map( new Map() ) ).toBe( true )       
        expect( is.map( new Set() ) ).toBe( false )       
    })

    it('null', () => {
        expect( is.null(null) ).toBe( true )
        expect( is.null(false) ).toBe( false )
    })

    it('number', () => {
        expect( is.number( 1 ) ).toBe( true )
        expect( is.number( 1.12 ) ).toBe( true )
        expect( is.number( '1' ) ).toBe( false )
    })


    it('object', () => {
        expect( is.object( {} ) ).toBe( true )
        expect( is.object( null ) ).toBe( false )
        expect( is.object( {a: 1} ) ).toBe( true )
        expect( is.object( new Object() )).toBe( true )
    })

    it('promise', () => {
        expect( is.promise( new Promise( ()=>{} ) ) ).toBe( true )
        expect( is.promise( null ) ).toBe( false )
        expect( is.promise( Promise.resolve() ) ).toBe( true )
        expect( is.promise( Promise.reject() ) ).toBe( true )
    }) 

    it('regexp', () => {
        expect( is.regexp( new RegExp(/./) ) ).toBe( true )
        expect( is.regexp( /./ ) ).toBe( true )
        expect( is.regexp( ' ' ) ).toBe( false )
    })


    it('set', () => {
        expect( is.set( new Set() ) ).toBe( true )
        expect( is.set( new Map() ) ).toBe( false )
    })

    it('string', () => {
        expect( is.string( '' ) ).toBe( true )
        expect( is.string( 'a' ) ).toBe( true )
        expect( is.string( null ) ).toBe( false )
    })

    it('symbol', () => {
        expect( is.symbol( Symbol( 'a' ) ) ).toBe( true )
    })

    it('undefined', () => {
        expect( is.undefined( undefined ) ).toBe( true )
        expect( is.undefined( null ) ).toBe( false )
        expect( is.undefined( ) ).toBe( true )
    })

    it('weakmap', () => {
        expect( is.weakmap( new WeakMap() ) ).toBe( true )
        expect( is.weakmap( new Map() ) ).toBe( false )
    })

    it('weakset', () => { 
        expect( is.weakset( new WeakSet() ) ).toBe( true )
        expect( is.weakset( new Set() ) ).toBe( false )
    })


    it('window', () => {
        expect( is.window( window ) ).toBe(true)
        expect( is.window( null ) ).toBe(false)
    })

} )
