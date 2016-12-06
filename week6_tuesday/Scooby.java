import java.util.*;

public class Scooby{

  private String name;
  private ArrayList<Edible> belly;
  private Clue clue;

  public Scooby(String name){
    this.name = name;
    this.belly = new ArrayList<Edible>();
  }
  public String getName(){
    return this.name;
  }

  public int foodCount(){
    return belly.size();
  }

  public void eat(Scoobysnack scoobysnack) {
  belly.add(scoobysnack);
  }

  public void eat(Sandwich sandwich) {
  belly.add(sandwich);
  }

  public void sleep() {
    belly.clear();
  }
  public Clue getClue(){
    return clue;
  }

  public void setClue(Clue clue){
    this.clue = clue;
  }

  public Edible regurgitate() {
    if (foodCount() > 0) {
      return belly.remove(0);
    }
    return null;
  }
}
