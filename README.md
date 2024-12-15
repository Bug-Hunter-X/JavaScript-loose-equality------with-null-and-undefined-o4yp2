# JavaScript Loose Equality Bug

This repository demonstrates a common error in JavaScript related to loose equality (==) when comparing null and undefined values.

## Description
The bug arises from the unexpected behavior of loose equality when used with null and undefined. While they are not strictly equal (===), they are loosely equal to 0 in certain contexts.  This can lead to logical errors in your code if not carefully considered.

## How to reproduce
1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript interpreter (Node.js, browser console, etc.).
3. Observe the unexpected output where `foo(undefined)` returns NaN instead of 0, due to the loose comparison of undefined with null.

## Solution
The recommended practice is to always use strict equality (===) when comparing values for accurate and predictable results.  This avoids the pitfalls of loose equality. The solution file (`bugSolution.js`) shows the corrected code.

## Additional Notes
This issue highlights the importance of understanding the differences between loose (==) and strict (===) equality in JavaScript and choosing the appropriate operator based on your comparison requirements.  Using strict equality helps write clearer, more maintainable code and avoid hidden bugs.