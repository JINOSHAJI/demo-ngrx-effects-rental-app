# demo-ngrx-effects-rental-app
This app illustrate how to use ngrx/effects in angular 6. This application use httpclient to consume web api. 
The api consumed in this project is already developed in MongoDB-With-ASP.NET-MVC example (https://github.com/JINOSHAJI/MongoDB-With-ASP.NET-MVC).

#To run the application ensure that the linked api project is running in server and npm install command should execute inorder to install the node modules.

1. Store
______________________
1. Single container for application state
2. Interact with that state in an immutable way
3. Install the @ngrx/store package
4. Organize application state by feature
5. Name the feature slice with the feature name
6. Initialize the store using:
7. StoreModule.forRoot(reducer)
8. StoreModule.forFeature('feature', reducer)
9. Store (State)

2. Action
______________________
1. An action represents an event
2. Define an action for each event worth tracking
3. Action is an object with a type and optional


     payload:
      {
        Action
        type: 'TOGGLE_PRODUCT_CODE
        payload: value
      }

3.  Reducer
 __________________________
1. Responds to dispatched actions
2. Replaces the state tree with new state
3. Build a reducer function (often one or more per
feature)
4. Implement as a switch with a case per action:
         
        export function reducer(state, action) {
          switch (action.type) {
                  case 'TOGGLE PRODUCTCODE':
                  return { ...state, showProductCode: action.payload };
             }
         }

4. Dispatching an Action
__________________________________

1. Often done in response to a user action or an operation
2. Inject the store in the constructor
3. Call the dispatch method of the store
4. Pass in the action to dispatch:

      this.store.dispatch({
        type:rentalActions.TOOGLE_INPUT_FORM,
        payload:this.isInputShown
      })

5. Passed to all reducers


5. Subscribing to the Store
____________________________________________
1. Often done in the ngOnlnit lifecycle hook
2. Inject the store in the constructor
3. Use the store's select operator, passing in the
4. desired slice of state

Subscribe:

this.store.pipe(select('products')).subscribe(
    products -> this.displayCode=products.showProductCode
);

5. Receives notifications when the state changes



# Effects


1. Reducers are pure functions. If we make http calls from reducers then it become impure functions. To preserve effects as pure functions we
introduce the concept of effects.

 Effect return a new observable which has another Action. The reducer in this instance listen for action which is emitted from effects. 
 All crud causes side effects. It's so better to manage CRUD in effects.
 Effects has an injected service, it  will communicate with service to make external requests.. 

