'use strict';

import chatTemplate from 'chat.tmpl.js';
import ChatController from 'chat.controller.js';

const chatComponent = {
  templateUrl: chatTemplate,
  controller: ChatController
};

angular.module('chatApp').component('chat', chatComponent);
