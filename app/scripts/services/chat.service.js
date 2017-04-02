function ChatService ($log, $http, socket) {

  $log.log('ChatService init');

  this.sendMessage = function (msg) {
    socket.emit('send:message', {
      message: msg
    });
    // $http.post({
    //   url: '',
    //   data:''
    // });
  };
}

angular.module('chatApp').service('chatService', ChatService);
