# Unexpected Null Value Halts Execution in JavaScript Function

This repository demonstrates a common JavaScript error caused by unexpected null values halting the execution of a function.

## Description

The `foo` function adds two numbers. However, if either `a` or `b` is `null`, it returns `null`. This behavior might not be immediately obvious and can break the expected program flow.  The issue is subtle and can be difficult to debug without careful inspection.

## Bug

The `bug.js` file contains the code with the error.  The function prematurely returns `null` preventing the intended arithmetic operation.

## Solution

The `bugSolution.js` file provides a corrected version of the `foo` function. It explicitly checks for null values using strict equality (===) and handles them appropriately, thereby preventing unexpected termination.

## How to reproduce

1. Clone the repository.
2. Run `bug.js` and observe the unexpected `null` output for cases involving `null` inputs.
3. Run `bugSolution.js` and compare the outputs; the corrected function will not prematurely return `null`.

This example highlights the importance of rigorous null handling in JavaScript to ensure robust function execution.