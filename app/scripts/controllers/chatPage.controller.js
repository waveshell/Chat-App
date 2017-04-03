function ChatPageController($log, $scope, socket) {
  $log.info('Chat page controller init');

  $scope.messages = [
    {
      message: 'hello'
    },
    {
      message: 'how are you'
    }
  ];

  // $scope.$on('socket:connection', function (ev, data) {
  //   $log.info('socket connection successful');
  // });
  //
  // $scope.$on('socket:connected', function (ev, data) {
  //   $log.info('socket connection successful *');
  // });
  //
  // $scope.$on('socket:connect', function (ev, data) {
  //   $log.info('socket connection successful **');
  // });

  // socket.on('init', function (data) {
  //   $log.info('socket init');
  //   $scope.name = data.name;
  //   $scope.users = data.users;
  // });
  //
  // socket.on('connect', function () {
  //   $log.info('socket connection successful');
  // });
  //
  // socket.on('connection', function () {
  //   $log.info('socket connection successful');
  // });
  //
  // socket.on('send:message', function (msg) {
  //   $scope.messages.push({message: msg});
  //   $log.info('message received');
  // });

}

angular.module('chatApp').controller('ChatPageCtrl', ChatPageController);
