function ChatService ($http) {

  console.log('init chatService');

  this.sendMessage = function () {
    // $http.post({
    //   url: '',
    //   data:''
    // });
  };
}

angular.module('chatApp').service('chatService', ChatService);
