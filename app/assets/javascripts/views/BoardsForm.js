TrelloClone.Views.BoardsForm = Backbone.View.extend({

  template: JST["boards/boardsForm"],

  events: {'submit .boards-form': 'createBoard' },

  render: function(){
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

  createBoard: function(event){
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON();

    this.model.save(attrs, {
      success: function(){
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate('', {trigger: true});
      }.bind(this),
      error: function(model, response){
        this.render();
        var $ul = $('<ul> </ul>');
        $(response.responseJSON).each(function(index, message){
          var $li = $('<li>' + message + '</li>');
          $ul.append($li);
        });
        this.$el.prepend($ul);
      }.bind(this)
    });
  }
});
