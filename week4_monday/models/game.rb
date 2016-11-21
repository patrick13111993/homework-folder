class Game

  def initialize(item1, item2)
    @item1 = item1
    @item2 = item2
  end

  def play_game
    if @item1 == "rock" and @item2 == "paper"
      return "paper wins!"
    elsif @item1 == "paper" and @item2 == "rock"
      return "paper wins!"
    elsif @item1 == "rock" and @item2 == "scissors"
        return "rock wins!"
    elsif @item1 == "scissors" and @item2 == "rock"
        return "rock wins!"
    elsif @item1 == "scissors" and @item2 == "paper"
          return "scissors wins!"
    elsif @item1 == "paper" and @item2 == "scissors"
          return "scissors wins!"
    end

  end
end