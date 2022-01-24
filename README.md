## What Is React?
   React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

## Reasons for React
   It lets you compose complex UIs from small and isolated pieces of code called “components”.

## React has a few different kinds of components, but we’ll start with React.Component subclasses:
``` class ShoppingList extends React.Component {
render() {
    return (
    <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
        </ul>
    </div>
    );
}
}

// Example usage: <ShoppingList name="Mark" />

```

## Note that you can use React to:
   We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

## Here, ShoppingList is a React component class, or React component type.
   A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.
## The render method 
   returns a description of what you want to see on the screen. 
   React takes the description and displays the result. 

#### Render method
   returns a React element, which is a lightweight description of what to render.

   Most React developers use a special syntax called “JSX” which makes these structures easier to write.

## The  ```<div />``` syntax:
   is transformed at build time to React.createElement('div'). The example above is equivalent to:

```
return React.createElement('div', {className: 'shopping-list'},
React.createElement('h1', /* ... h1 children ... */),
React.createElement('ul', /* ... ul children ... */)
);
```

# What happens when JavaScript code is run?
  As soon as we start running our code, we create a global execution
  context
   ```const num = 3;
function multiplyBy2 (inputNumber){
 const result = inputNumber*2;
 return result;
}
const name = "Will"```

   — Thread of execution (parsing and executing the code line after line)
   — Live memory of variables with data (known as a Global Variable 
   Environment)

   Running or calling or invoking a funtion is not the same as function definition

   We keep track of the functions being called in JavaScript 
   with a Call stack

   Tracks which execution context we are in - that is, what 
   function is currently being run and where to return to 
   after an execution context is popped off the stack
   One global execution context, multiple function 
   context