TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    'api/boards/new': 'displayForm',
    'api/boards/:id': 'boardShow'
  },

  initialize: function(boards, $rootEl){
    this.boards = boards;
    this.$rootEl = $rootEl;
    this.model = new TrelloClone.Models.Board();
  },

  boardsIndex: function(){
    this.boards.fetch();
    var v = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
      });
    this._swapView(v);
  },

  displayForm: function(){
    var v = new TrelloClone.Views.BoardsForm({
      model: this.model,
      collection: this.boards
      });
    this._swapView(v);
  },

  boardShow: function(id){
    var board = new TrelloClone.Models.Board({id: id});
    board.fetch();
    var v = new TrelloClone.Views.BoardsShow({
      model: board,
    });
    this._swapView(v);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});