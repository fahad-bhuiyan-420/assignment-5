<!--Q. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->
<!-- Ans -->

<!-- getElementById -> It is used to access an unique element in the whole HTML file. The id that we use to find the element is unique to that element only. It returns only a single element.

getElementsByClassName -> It is used to access all the classes altogether with a common class name. It returns an array of nodes.

querySelector -> It selects the first element that matches the CSS selector. It return a single element.

querySelectorAll -> It selects all the elements that matches the CSS selector. it returns an array of node elements.
-->


<!--Q. How do you create and insert a new element into the DOM? -->
<!-- Ans -->

<!-- document.createElement('tag-name') -> We call this function and put the name of the CSS selector that we want to create inside 'tag-name'. -->


<!--Q. What is Event Bubbling and how does it work? -->
<!-- Ans -->

<!-- When an event happens on an element it doesn't only stay there. It moves toward it's parent, then to body, then to document all the way up to window. This phenomenon is called Event Bubbling. -->


<!--Q. What is Event Delegation in JavaScript? Why is it useful? -->
<!-- Ans -->

<!-- Instead of attaching a separate listener to every child element we can attach one listener to the parent element and tell us which child was manipulated. Using event.target we can easily find out the child element that was manipulated. It uses less memory and makes the code more efficient. It also works for later added child elements that were not in the DOM. -->


<!--Q. What is the difference between preventDefault() and stopPropagation() methods? -->
<!-- Ans -->

<!-- preventDefault() -> It stops the actions in the default browser e.g(reloading the page, form submitting).
     stopPropagation() -> Stops Event Bubbling. The event only stays on the current called element. It doesn't move up to anywhere else. -->



