# npm-rocketchat-webhook
A simple module to send messages to Rocket.Chat channel or user through pre-configured imcoming WebHooks.

## Usage

```
const rcWebhook = require('rocketchat-webhook');

// send message
rcWebhook.sendMessage('https://your.rocketchat.addr', 'your-incoming-webhook-token', 'Message to send', function(error) {
    if (error) {
        // deal with error
        console.log(error);
    }
});
```

