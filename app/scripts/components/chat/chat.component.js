
const chatComponent = {
  templateUrl: 'views/components/chat/chat.tmpl.html',
  controller: ChatController
};


function ChatController ($log, chatService, $scope) {
  // $log.info('$scope: ', $scope);
  // $log.info('this: ', this);

  this.message = '';

  this.sendMessage = function (message) {
    if (message && angular.isString(message) && message.length > 0) {
      chatService.sendMessage(message);
      this.message = '';
      $log.info('message sent');
    } else {
      $log.info('message invalid');
    }
  };
}

angular.module('chatApp').component('chat', chatComponent);
