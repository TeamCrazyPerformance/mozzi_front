import { eventChannel, buffers } from 'redux-saga';
import socket from './createSocketHelper';

const defaultMatcher = () => true;

export const emitSocketEvent = (event, data = {}) => {
  socket.emit(event, data);
}

// Create socket channel.
export const onSocketEvent = (eventType, buffer, matcher) => {
  return eventChannel(emit => {
    const emitter = message => emit(message);

    socket.on(eventType, emitter);
    
    return function unsubscribe() {
      socket.off(eventType, emitter);
    }
  }, buffer || buffers.none(), matcher || defaultMatcher);
}

export const closeChannel = (channel) => {
  if (channel) {
    channel.close();
  }
}