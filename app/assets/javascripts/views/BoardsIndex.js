TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/boardIndex'],

  intialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({collection: this.collection});
  }
});
