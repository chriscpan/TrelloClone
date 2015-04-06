TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,

  url: '/api/boards',

  getOrFetch: function(id){
    var model = this.get(id);
    var that = this;
    if (model){
      model.fetch();
    } else {
      model = new TrelloClone.Models.Board({id: id});
      model.fetch({
        success: function(){
          that.add(model);
        }
      });
    }
    return model;
  },

  comparator: function(board){
    return board.lists().get('ord');
  }
});
