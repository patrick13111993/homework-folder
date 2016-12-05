public class Scooby{

  private String name;
  private Scoobysnack[] belly;

  public Scooby(String name){
    this.name = name;
    this.belly = new Scoobysnack[5];
  }
  public String getName(){
    return this.name;
  }
  public int foodCount(){
    int count = 0;
    for (Scoobysnack scoobysnack : belly){
      if (scoobysnack != null){
        count++;
      }
    }
    return count;
  }
  public void eat(Scoobysnack scoobysnack) {
    if (bellyFull()){
      return;
    }
    int foodCount = foodCount();
    belly[foodCount] = scoobysnack;
  }
  public boolean bellyFull() {
    return foodCount() == belly.length;
  }
  public void sleep() {
    for (int i = 0; i < belly.length; i++) {
      belly[i] = null;
    }
  }
  public String ruhRoh() {
    return ("rit's ra r-r-r-r-r-rost!");
  }
}
