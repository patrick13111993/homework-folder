import static org.junit.Assert.assertEquals;
import org.junit.*;

public class ScoobyTest{
  Scooby scooby;
  Scoobysnack scoobysnack;
  Clue clue;

  @Before 
  public void before() {
    scooby = new Scooby("Scoobs");
    scoobysnack = new Scoobysnack();
  }

  @Test
  public void hasName() {
    assertEquals("Scoobs", scooby.getName()); 
  }

  @Test
  public void bellyStartsEmpty() {
    assertEquals(0, scooby.foodCount());
  }

  @Test
  public void canEatScoobysnack() {
    scooby.eat(scoobysnack);
    assertEquals(1, scooby.foodCount());
  }

  @Test
  public void shouldEmptyBellyAfterSleeping() {
    scooby.eat(scoobysnack);
    assertEquals(1, scooby.foodCount());
    scooby.sleep();
    assertEquals(0, scooby.foodCount());
  }

  @Test
  public void hasClue(){
    scooby.setClue(clue);
    assertEquals(clue, scooby.getClue());
  }

  @Test
  public void edibleRoobyRacks() {
    scooby.eat(scoobysnack);
    Edible food = scooby.regurgitate();
    assertEquals("rooby racks!", food.roinks());
  }

}