// The resulting promise object has internal properties:
// result — an arbitrary value of your choosing, initially undefined.
// When the executor finishes the job, it should call one of the functions that it gets as arguments:

// resolve(value) — to indicate that the job finished successfully:
// sets state to "fulfilled",
// sets result to value.
// reject(error) — to indicate that an error occurred:
// sets state to "rejected",
// sets result to error.

class MyPromise {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new Error("Executor must be a function");
    }

    //state — initially PENDING, then changes to either FULFILLED or REJECTED,
    // an array of the functions we need to call once this promise is settled.
    this.$state = "PENDING";
    this.$chained = [];

    const resolve = result => {
      if (this.$state !== "PENDING") {
        return;
      }
      this.$state = "FULFILLED";
      this.$value = result;

      for (const { onFulfilled } of this.$chained) {
        onFulfilled(result);
      }
    };

    const reject = error => {
      if (this.$state !== "PENDING") {
        return;
      }
      this.$state = "REJECTED";
      this.$value = error;
      for (const { onRejected } of this.$chained) {
        onRejected(error);
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.$state === "FULFILLED") {
      onFulfilled(this.$internalValue);
    } else if (this.$state === "REJECTED") {
      onRejected(this.$internalValue);
    } else {
      this.$chained.push({ onFulfilled, onRejected });
    }
  }
}

module.exports = MyPromise;
