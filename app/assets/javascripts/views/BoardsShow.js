TrelloClone.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/boardsShow'],

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var content = this.template({ board: this.model });
    this.$el.html(content);

    var v = new TrelloClone.Views.ListForm({
      model: new TrelloClone.Models.List(),
      board: this.model,
      collection: this.collection
    });
    this.$('ul').append(v.render().$el);
    return this;
  }
});
