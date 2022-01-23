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