TrelloClone.Views.ListForm = Backbone.View.extend({
  tagName: 'li',

  template: JST['lists/listForm'],

  events: {
    'click .new-list-button': 'createList'
  },

  initialize: function(options){
    this.board = options.board;
    // this.listenTo(this.board.lists(), 'sync add', TrelloClone.Views.BoardsShow.render);
  },

  createList: function(event){
    event.preventDefault();
    var data = this.$el.find('form').serializeJSON();
    this.model.set('board_id', this.board.id);
    this.model.save( data, {
      success: function(){
        this.board.lists().add(this.model);
      }.bind(this)
    });
  },

  // iterate through collections and append it to the element
  render: function(){
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    var v = new TrelloClone.Views.CardForm({
      model: new TrelloClone.Models.Card(),
      list: this.model,
      lists: this.collection
    });
    this.colllection.each(function(list){

    });
    this.$el.append(v.render().$el);
    return this;
  }
});
