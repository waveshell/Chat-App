function ChatPageController($log, $scope, socket) {
  $log.info('Chat page controller init');

  socket.on('send:message', function (message) {
    $scope.messages.push(message)
  });

}

angular.module('chatApp').controller('ChatPageCtrl', ChatPageController);
