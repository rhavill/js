/*
 * Examples copied from https://leanpub.com/understandinges6/read/#leanpub-auto-symbols
 */
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = Symbol("first name");
var person = {};

person[firstName] = "Nicholas";

console.log("first name" in person); // false
console.log(person[firstName]); // "Nicholas"
console.log(firstName); // "Symbol(first name)"
console.log(typeof firstName); // symbol

var firstName = Symbol("first name");
var person = _defineProperty({}, firstName, "Nicholas");

// make the property read only
Object.defineProperty(person, firstName, { writable: false });

var lastName = Symbol("last name");

Object.defineProperties(person, _defineProperty({}, lastName, {
    value: "Zakas",
    writable: false
}));

console.log(person[firstName]); // "Nicholas"
console.log(person[lastName]); // "Zakas"

var uid = Symbol["for"]("uid");
var object = _defineProperty({}, uid, "12345");

console.log(object[uid]); // "12345"
console.log(uid); // "Symbol(uid)"

var uid2 = Symbol["for"]("uid");

console.log(uid === uid2); // true
console.log(object[uid2]); // "12345"
console.log(uid2); // "Symbol(uid)"

var uid = Symbol["for"]("uid");
console.log(Symbol.keyFor(uid)); // "uid"

var uid2 = Symbol["for"]("uid");
console.log(Symbol.keyFor(uid2)); // "uid"

var uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid3)); // undefined
