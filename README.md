# react-conditional-manager

![NPM version](https://img.shields.io/npm/v/react-conditional-manager.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/react-conditional-manager.svg?style=flat)
![NPM total downloads](https://img.shields.io/npm/dt/react-conditional-manager.svg?style=flat)
![NPM monthly downloads](https://img.shields.io/npm/dm/react-conditional-manager.svg?style=flat)

A react component that handles conditional logic in a more elegant manner.

## Install

```bash
npm install --save react-conditional-manager
```

## Minimal Example

```js
import React from "react";
import ConditionalManager from "react-conditional-manager";

const Example = props => {
    const conditions = [
        { loading: props.isLoading },
        { error: props.isError },
        { empty: props.conversations.length === 0 }
    ];

    return (
        <ConditionalManager observables={observables}>
            {() => ({
                loading: <Loading />,
                error: <Error />,
                empty: <EmptyMessage message={"No conversations"} />,
                default: <InfiniteScroll renderRow={renderRow} />
            })}
        </ConditionalManager>
    );
};

export default Example;
```

## Props

#### `children`: function() => ({})

-   The children prop needs to return an object literal with the different renderable states.
-   isRequired

#### `conditions`: [{state: conditional}]

-   An array of states with an associated conditional.
-   First state to not appear in the array, becomes the default state and is rendered if all other conditionals return falsy.
-   If all states are listed and all conditionals return falsy then the ConditionalManager will render null.
-   default = []

#### `renderedProps`: {}

-   This object takes all properties and merges them as props into whichever state gets rendered.
-   default = {}
