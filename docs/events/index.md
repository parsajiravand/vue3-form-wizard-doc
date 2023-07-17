### Events

Vue-form-wizard emits various events when specific actions occur within the component. These events can be observed in the demos, particularly in the [async validation demo](https://jsfiddle.net/bt5dhqtf/272/).

#### on-complete
Called when the finish button is clicked and the `before-change` function for the last step (if present) is executed. No parameters are sent with this event. 
```javascript
this.$emit('on-complete')
```

#### on-loading
Triggered whenever an asynchronous `before-change` function is executed. This event is emitted before executing `before-change` and after the completion of the `before-change` method. The `on-loading` event is accompanied by a boolean value. 
```javascript
this.$emit('on-loading', value)
```

#### on-validate
Fired when the execution of a `before-change` method is completed. The event carries a boolean value representing the validation result and an integer indicating the tab index. 
```javascript
this.$emit('on-validate', validationResult, this.activeTabIndex)
```

#### on-error
Called when `before-change` is a promise that gets rejected with an error message. The error message is passed along with the event. See async validation fiddle for an example.
```javascript
this.$emit('on-error', error)
```

#### on-change
Triggered when there is a change in steps. It includes the `prevIndex` and `nextIndex` as parameters.
```javascript
this.$emit('on-change', prevIndex, nextIndex)
```