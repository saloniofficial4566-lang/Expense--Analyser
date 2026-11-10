# Assignment Reflection Answers

### 1. What did you predict for Warmup.js, and what did it print? Explain the first line and the error from Part B.
- It printed `undefined` for `a` because of hoisting, where `var` variables are processed before execution starts but not evaluated yet. Removing the comment in Part B throws a `ReferenceError` because `let` fields live in a Temporal Dead Zone and cannot be invoked before their specific initialization line.

### 2. Why did Loop finished print before Async read finished? Who did the reading while your loop was running?
- `Loop finished` runs first because `fs.readFile` runs non-blocking asynchronous behaviors, pushing the system file task to the background pool. While the main thread calculated the heavy mathematical loop, the operating system's internal hardware threads handled the file retrieval.

### 3. How does tracker remember spent after createBudgetTracker has returned?
- It preserves memory using a JavaScript framework called a **Closure**. Even after the parent execution block ends, the internal tracking function maintains a living contextual scope reference to its home environment variables.

### 4. What does the ^ in front of the lodash version in package.json mean, and why is package-lock.json created?
- The `^` character allows minor and patch module updates to install during updates while locking out risky breaking upgrades. The `package-lock.json` acts as an absolute immutable map tracking the exact versions installed to ensure replication checks execute the same across different computers.
