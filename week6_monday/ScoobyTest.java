import static org.junit.Assert.assertEquals;
import org.junit.*;

public class ScoobyTest{
  Scooby scooby;
  Scoobysnack scoobysnack;

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
  public void cannotEatScoobysnackWhenBellyFull() {
    for (int i = 0; i < 10; i++) {
      scooby.eat(scoobysnack);
    }
    assertEquals(5, scooby.foodCount());
  }
  @Test
  public void bellyIsFull() {
    for (int i = 0; i < 5; i++) {
      scooby.eat(scoobysnack);
    }
    assertEquals(true, scooby.bellyFull());
  }

  @Test
  public void shouldEmptyBellyAfterSleeping() {
    scooby.eat(scoobysnack);
    assertEquals(1, scooby.foodCount());
    scooby.sleep();
    assertEquals(0, scooby.foodCount());
  }

  @Test
  public void zoinksScoob() {
    assertEquals(scooby.ruhRoh(), "rit's ra r-r-r-r-r-rost!");
  }
}