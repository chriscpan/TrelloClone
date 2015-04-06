TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    'boards/new': 'new',
    'boards/:id': 'show'
  },

  initialize: function(boards, $rootEl){
    this.boards = boards;
    this.$rootEl = $rootEl;
    this.model = new TrelloClone.Models.Board();
  },

  index: function(){
    this.boards.fetch();
    var v = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
      });
    this._swapView(v);
  },

  new: function(){
    var v = new TrelloClone.Views.BoardsForm({
      model: this.model,
      collection: this.boards
      });
    this._swapView(v);
  },

  show: function(id){
    var board = this.boards.getOrFetch(id);
    // var board = new TrelloClone.Models.Board({id: id});
    board.fetch();
    var v = new TrelloClone.Views.BoardsShow({
      model: board,
      collection: this.boards
    });
    this._swapView(v);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
