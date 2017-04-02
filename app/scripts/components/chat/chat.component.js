
const chatComponent = {
  templateUrl: 'views/components/chat/chat.tmpl.html',
  controller: ChatController
};


function ChatController ($log, chatService) {
  $log.info('chat controller init');
  $log.info('chatService: ', chatService);

  this.message = {};

  this.sendMessage = function (message) {
    if (message && angular.isString(message) && message.length > 0) {
      chatService.sendMessage(message);
    }
  };
}

angular.module('chatApp').component('chat', chatComponent).name;
