TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/boardsIndex'],

  events: {
    'click button': 'delete'
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({collection: this.collection});
    this.$el.html(content);
    return this;
  },

  delete: function(event){
    // event.preventDefault();
    // this.collection.get()
  }
});
