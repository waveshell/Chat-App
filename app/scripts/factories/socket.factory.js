function SocketFactory(socketFactory, $log) {
  // debugger;
  var _ioSocket = io.connect();

  var socket = socketFactory({
    ioSocket: _ioSocket
  });

  // socket.on('send:message', function (msg) {
  //   $log.info('msg received', msg);
  // });

  return socket;
}

angular.module('chatApp').factory('socket', SocketFactory);
