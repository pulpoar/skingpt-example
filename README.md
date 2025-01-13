# Pulpoar SkinGPT Integration Example

This example demonstrates how to integrate SkinGPT into your application using our plugin SDKs.

## Using iframe
Using an iframe creates an isolated widget above the app. Adding the widget's starting button, handling its state, and managing alignment should be handled on the user's side.

```js
<iframe
    src="https://skingpt.pulpoar.com"
    style={{
        width: '100%',
        height: '100%',
        border: 'none',
    }}
    title="SkinGPT"
    allow="clipboard-write; clipboard-read; fullscreen; camera *; encrypted-media;"
/>
```
### Working With SDK
The SDK is a JavaScript library that allows you to communicate with PulpoAR plugins running in an iframe.

```js

import pulpoar from 'https://cdn.jsdelivr.net/npm/@pulpoar/plugin-sdk@latest';

pulpoar.onReady(() => {
    console.log('PulpoAR ready');
});

pulpoar.onSomethingChange((payload) => {
    console.log(payload);
});
pulpoar.onClose(() => {
    console.log("Close Button Triggered")
});
pulpoar.onHide(() => {
    console.log("Hide Button Triggered")
});


```



### Component Events


| Event              | Payload                                                                                           | Description                                                         |
|--------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| `onError`          | Error                                                                                             | Callback function triggered when an error occurs.                   |
| `onReady`          | Project data	                                                                                     | Callback function triggered when the PulpoAR plugin is ready.       |
| `onClose`          | undefined	                                                                                    | Callback function triggered when the close button is triggered.     |
| `onHide`           | undefined	                                                                                    | Callback function triggered when the hide button is clicked.        |
| `onAddToCart`      | Variant Array	                                                                                    | Callback function triggered when the Add to Cart button is clicked. |
| `onVariantSelect`  | Variant                                                                                           | Callback function triggered when a variant is selected.             |
| `onGdprApprove`    | {approved:boolean}                                                                                | Callback function triggered when the GDPR checkbox is clicked.      |
| `onTakePhotoAgain` | undefined                                                                                         | Callback function triggered when the Take Again button is clicked.  |
| `onUsePhoto`       | undefined                                                                                         | Callback function triggered when the Use Photo button is clicked.   |
