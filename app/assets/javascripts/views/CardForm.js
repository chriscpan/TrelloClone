TrelloClone.Views.CardForm = Backbone.View.extend({
  tagName: 'li',

  template: JST['cards/cardForm'],

  events: {
    'click': 'createCards'
  },

  initialize: function(options){
    this.lists = options.lists;
    this.list = options.list;
  },

  createCards: function(event){
    event.preventDefault();
    var data = this.$el.find('form').serializeJSON();
    this.model.set('list_id', this.model.id);
    this.model.save(data, {
      success: function(){
        this.lists.cards().add(this.model);
      }.bind(this)
    });
  },

  render: function(){
    var content = this.template({
      card: this.model
    });
    this.$el.html(content);
    return this;
  }
});
