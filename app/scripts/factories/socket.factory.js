function SocketFactory(socketFactory, $log, $rootScope) {
  var _ioSocket = io.connect('http://localhost:3001', {'force new connection': true, path: '/#/'});

  var socket = socketFactory({
    ioSocket: _ioSocket
  });

  // socket.on('connect', function () {
  //   $log.info('socket connection successful');
  // });
  //
  // socket.on('connection', function () {
  //   $log.info('socket connection successful');
  // });
  // socket.on('send:message', function (msg) {
  //   $log.info('msg received', msg);
  //   socket.broadcast.emit('send:message', {
  //     message: msg
  //   });
  // });

  // socket.forward('broadcast');
  // socket.forward('connect');
  // socket.forward('connected');
  // socket.forward('connection');

  //TODO: remove after debugging
  window.socket = socket;

  return socket;
}

angular.module('chatApp').factory('socket', SocketFactory);
