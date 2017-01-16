package com.example.user.rankings;

/**
 * Created by user on 12/12/2016.
 */
public class Player {

    public String name;
    public String nickname;
    public int ranking;

    public Player(String name, String nickname, int ranking) {
        this.name = name;
        this.nickname = nickname;
        this.ranking = ranking;
    }

    public String getName() {
        return this.name;
    }

    public String getNickname() {
        return this.nickname;
    }

    public int getRanking() {
        return this.ranking;
    }

    public void setName(String newName) {
        name = newName;
    }

    public void setNickname(String newNickname) {
        nickname = newNickname;
    }

    public void setRanking(int newRanking) {
        ranking = newRanking;
    }
}
