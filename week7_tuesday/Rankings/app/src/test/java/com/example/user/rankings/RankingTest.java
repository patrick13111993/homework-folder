package com.example.user.rankings;

import org.junit.*;
import static org.junit.Assert.*;
import java.util.ArrayList;

/**
 * Created by user on 12/12/2016.
 */
public class RankingTest {

    Player player;
    Ranking ranking;
    ArrayList<Player> testRankings;

    @Before
    public void before(){
        player = new Player("Bob", "Jimbob", 0);
        ranking = new Ranking();
        ranking.addPlayerAtIndex(0, player);
    }

    @Test
    public void testGetPlayerAtIndex() {
        String result = ranking.getPlayerAtIndex(0);
        assertEquals("Name: Bob, Nickname: Jimbob, Ranking: 0", result);
    }
}
