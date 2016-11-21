require('sinatra')
require('sinatra/contrib/all')
require_relative('models/game')
require('json')

get '/' do
 erb("Welcome to Rock Paper Scissors, fun for all the family. Choose which of our heroes you wish to battle together!")
end

get '/:item1/:item2' do
  item1 = params[:item1]
  item2 = params[:item2]
  game = Game.new(item1,item2)
  @result = game.play_game()
  erb(:result)
end