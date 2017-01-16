package com.example.user.rankings;
import java.util.ArrayList;

/**
 * Created by user on 12/12/2016.
 */
public class Ranking {

    private ArrayList<Player> rankings;


    public Ranking() {
        rankings = new ArrayList<Player>();
    }

    public void addPlayerAtIndex(int index, Player player) {
        rankings.add(index, player);
    }

    public String getPlayerAtIndex(int index) {
        Player player = rankings.get(index);
        return "Name: " + player.getName() + ", Nickname: " + player.getNickname() +
                ", Ranking: " + player.getRanking();
    }
}
