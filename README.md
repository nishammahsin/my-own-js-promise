# Building JavaScript Promises from Scratch

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).

The function passed to new Promise is called the `executor`. When the promise is created, this executor function runs automatically. It contains the producing code, that should eventually produce a result.

The resulting promise object has internal properties:
state — initially `PENDING`, then changes to either `FULFILLED` or `REJECTED`,

an array of the functions we need to call once this promise is settled.
`result` — an arbitrary value of your choosing, initially undefined.

When the executor finishes the job, it should call one of the functions that it gets as arguments:

`resolve(value)` — to indicate that the job finished successfully:

sets state to “fulfilled”,

sets result to value.

`reject(error)` — to indicate that an error occurred:

sets state to “rejected”,

sets result to error.

## Usage

` git clone https://github.com/nishammahsin/my-own-js-promise.git`

`cd my-own-js-promise`

`npm install or yarn`

`MyPromise = require("./index")`

eg:
`let promise = new MyPromise(resolve => { setTimeout(() => resolve('My promise'), 100); }); p.then(res => console.log(res));`

## test
`yarn run test`
