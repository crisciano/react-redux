React Redux

Create simple app in react and redux

## 1° step

Create new project react
~~~javascript
    npx create-react-app react-redux
    cd react-redux
    yarn start
~~~

Install redux and react-redux,
~~~javascript
    yarn add redux
    yarn add react-redux
~~~

## 2° step

Alter `index.js` recever provider
~~~javascript
    import { Provider } from 'react-redux'
    import { Store } from './store'
~~~

Alter ReactDOM.render

~~~javascript
    ReactDOM.render(
        <Provider store={Store}> 
            <App />
        </Provider>
        , document.getElementById('root'));
~~~


## 3° step

Create file `store/index.js`, read file
~~~javascript
    import { createStore } from 'redux'
    import { Reducers } from '../reducers'
    export const Store = createStore(Reducers);
~~~

Create file `reducers/index.js`, read file
~~~javascript
    import { itemsListReducer } from './itemsListReducer'
    import { combineReducers } from 'redux'

    export const Reducers = combineReducers({
        itemsListState: itemsListReducer
    })
~~~

Create file reducer in `reducers/itemsListReducer`
~~~javascript
    const initialState ={ 
        items : []
    }

    export const itemsListReducer = ( state = initialState, action) => {
        switch (action.type){
            case 'LIST_ITEMS':
            return {
                ...state,
                items: action.items
            }
            default: 
            return state;
        }
    }
~~~

Create file `actions/index.js`

~~~javascript
    export const listItems = value =>({
        type: 'LIST_ITEMS',
        items: value
    })
~~~

## 4° step

In front create two components, form and list.
File `App.js` read, import components
~~~javascript
    import { connect } from 'react-redux';
    import { bindActionCreators } from 'redux';
    import Form from './Form/Form';
    import List from './List/List';
    import { listItems } from '../../actions'
~~~

In render include components
~~~javascript
    <Form />
    <List />
~~~

## 5° step

Conf connect redux
~~~javascript
    export default connect(mapStateToProps, mapDispatchToProps)(App);
~~~

Create mapStateToProps
~~~javascript
    const mapStateToProps = store => ({
        items : store.itemsListState.items
    });
~~~

Create mapDispatchToProps
~~~javascript
    const mapDispatchToProps = dispatch => 
        bindActionCreators({ listItems }, dispatch)
~~~

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
