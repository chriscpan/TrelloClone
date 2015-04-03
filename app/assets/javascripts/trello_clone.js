window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert("hello");
    var boards = new TrelloClone.Collections.Boards();
    var $rootEl = $('#main');
    this.router = new TrelloClone.Routers.Router(boards, $rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
