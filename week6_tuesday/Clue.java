
import java.util.ArrayList;

public class Clue{

  private ArrayList<String> clues;

  public Clue(){
    clues = new ArrayList<String>();
  }

  public void findClue(String clue){
    clues.add(clue);
  }

  public String getClue(int index){
    return clues.get(index);
  }

  public String getLastClue(){
    return getClue(clues.size() - 1);
  }

}