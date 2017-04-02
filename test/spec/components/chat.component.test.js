describe('ChatComponent:', function ChatComponentTest() {

  var comp;

  beforeEach(function () {
    comp = angular.module('chatApp').component('chat');
  });

  it('Should have a defined controller', function () {
    expect(comp.controller).toBeDefined();
  });

});
