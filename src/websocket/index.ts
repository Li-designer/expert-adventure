import { WebsocketBuilder } from "websocket-ts";
import { onBeforeUnmount } from "vue";
enum WebsocketEvents {
  open = "open", // Connection is opened or re-opened
  close = "close", // Connection is closed
  error = "error", // An error occurred
  message = "message", // A message was received
  retry = "retry" // A try to re-connect is made
}
const ws: any = new WebsocketBuilder("ws://localhost:3002")
  .onOpen((i, ev) => {
    console.log("opened");
    const data = JSON.stringify({
      // eslint-disable-next-line prettier/prettier
      "event": "hello2",
      // eslint-disable-next-line prettier/prettier
      "user": "",// 发送给谁
      // eslint-disable-next-line prettier/prettier
      "data": "发送消息",
      // eslint-disable-next-line prettier/prettier
      "msg": "rustfisher.com"
    });
    ws.send(data);
  })
  .onClose((i, ev) => {
    console.log("closed");
  })
  .onError((i, ev) => {
    console.log("error");
  })
  .onMessage((i, ev) => {
    console.log(i, ev, "message");
  })
  .onRetry((i, ev) => {
    console.log("retry");
  })
  .build();
console.log(ws);
onBeforeUnmount(() => {
  ws.removeEventListener(WebsocketEvents.open);
});
