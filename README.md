# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

The page will reload when you make changes.\
You may also see any lint errors in the console.


###  `Project - Emojee - Emoji search application in ReactJS`

This project does NOT involve REST API calls.
The data we will already be having.
Initially, we will have a a list of emojis, we will show that.
There will be an input field, which the user can type anything.
based on what user has typed, we will filter the result and show the list.
For data, we will use this - https://raw.githubusercontent.com/aayusharyan/emojee/main/emojiList.js


 ## useEffect
This is a built in hook. Built into react. We need to import this in order to use it. This is a named export.
This is a hook (function) which accepts 2 things.

1) Callback function.
2) Dependency array.
If anything from that dependency array is changed, then it will call that callback function.

Usage - If we want to execute some certain funcction if the state value changes.
The state can be our created state (using useState) or it can also be an imported state from another hook.
This is used to implement side Effect.
Side effect is the functionality that we implement which is not the CORE effect.

## useState

The React useState Hook allows us to track state in a function component (Variable).for Rerendering

State generally refers to data or properties that need to be tracking in an application.

## hosted link :-
                  https://emojis-search-react.netlify.app/

## Implementations 
Implemented the CSS
Implemented the filter logic, using useEffect.
Implemented code organization by separating various components.
