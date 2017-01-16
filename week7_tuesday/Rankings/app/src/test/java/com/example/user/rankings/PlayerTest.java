package com.example.user.rankings;
import java.util.ArrayList;
import static org.junit.Assert.*;
import org.junit.*;

/**
 * Created by user on 12/12/2016.
 */
public class PlayerTest {


    Player player;

    @Before
    public void Before(){
        player = new Player("Bob", "Jimbob", 1);
    }

    @Test
    public void testGetName() {
        assertEquals("Bob", player.getName());
    }

    @Test
    public void testGetNickname() {
        assertEquals("Jimbob", player.getNickname());
    }

    @Test
    public void testGetRanking() {
        assertEquals(1, player.getRanking());
    }

    @Test
    public void testSetName() {
        player.setName("Jim");
        assertEquals("Jim", player.getName());
    }

    @Test
    public void testSetNickname() {
        player.setNickname("Bobjim");
        assertEquals("Bobjim", player.getNickname());
    }

    @Test
    public void testSetRanking() {
        player.setRanking(2);
        assertEquals(2, player.getRanking());
    }
}