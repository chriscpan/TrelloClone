TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/boardsIndex'],

  events: {
    'click button': 'delete'
  },

  initialize: function(){
    this.listenTo(this.collection, "sync remove add", this.render);
  },

  render: function(){
    var content = this.template({collection: this.collection});
    this.$el.html(content);
    return this;
  },

  delete: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var board = this.collection.get($target.data('id'));
    board.destroy();
  }
});
