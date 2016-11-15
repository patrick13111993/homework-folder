# SQL Homework

The Dominion Cinema are having a Marvel Movie Marathon! They have asked you to help maintain their database of movies with times and attendees.

## To access the database:

First, create a database called 'marvel'
```
# terminal
createdb marvel
```

Next, run the provided SQL script to populate your database:
```
# terminal
psql -d marvel -f marvel.sql
```

Use the supplied data as the source of data to answer the questions.  Copy the SQL command you have used to get the answer, and paste it below the question, along with the result they gave.

## Questions

1. Return ALL the data in the 'movies' table.

SELECT * FROM movies;

 id |                title                | year | show_time 
----+-------------------------------------+------+-----------
  1 | Iron Man                            | 2008 | 15:40
  2 | The Incredible Hulk                 | 2008 | 23:45
  3 | Iron Man 2                          | 2010 | 17:45
  4 | Thor                                | 2011 | 14:40
  5 | Captain America: The First Avenger  | 2011 | 17:05
  6 | Avengers Assemble                   | 2012 | 12:30
  7 | Iron Man 3                          | 2013 | 18:00
  8 | Thor: The Dark World                | 2013 | 18:55
  9 | Batman Begins                       | 2005 | 16:30
 10 | Captain America: The Winter Soldier | 2014 | 19:20
 11 | Guardians of the Galaxy             | 2014 | 12:10
 12 | Avengers: Age of Ultron             | 2015 | 23:40
 13 | Ant-Man                             | 2015 | 18:20
 14 | Captain America: Civil War          | 2016 | 22:00
 15 | Doctor Strange                      | 2016 | 16:30


2. Return ONLY the name column from the 'people' table

SELECT name FROM people;

       name        
-------------------
 Chris Bacon
 John Campbell
 Jane Cargill
 Patrick Collins
 Stephanie Devine
 Ben Faulkner
 Cameron Fulton
 Tegan Gallacher
 Gregor Gilchrist
 Claire Hilditch
 Graeme Bell
 Winnie Ho
 Adam Leel
 Lewis MacNee
 Adam Nattrass
 William Robertson
 Jordan Said
 Logan Smith
 Frederico Zucca


3. Return ONLY your name from the 'people' table.

SELECT name FROM people WHERE name='Patrick Collins';

      name       
-----------------
 Patrick Collins


4. The cinema is showing 'Batman Begins', but Batman is DC, not Marvel! Delete the entry from the 'movies' table.

DELETE FROM movies WHERE title='Batman Begins';


5. Create a new entry in the 'people' table with the name of one of the instructors.

INSERT INTO people (name) VALUES ('Big Tony');


6. Sadly, Graeme has hurt himself and won't be able to make it, Delete his entry from the 'people' table

DELETE FROM people WHERE name='Graeme Bell';


7. Somehow the list of people includes two people named 'Adam'. Change these entries to the proper names (Jeff 3, Jeff 3.2)

UPDATE people SET name = 'Jeff 3' WHERE name = 'Adam Nattrass';
UPDATE people SET name = 'Jeff 3.2' WHERE name = 'Adam Leel';


8. The cinema has just heard that they will be holding an exclusive midnight showing of 'Guardians of the Galaxy 2'!! Create a new entry in the 'movies' table to reflect this.

INSERT INTO movies (title, year, show_time) VALUES ('Guardians of the Galaxy 2', 2017, '00:00');


9. The cinema would also like to make the Guardian movies a back to back feature. Update the 'Guardians of the Galaxy' show time from 12:10 to 21:30

UPDATE movies SET show_time = '21:30' WHERE title = 'Guardians of the Galaxy';

## Extension

1. Research how to delete multiple entries from your table in a single command.

DELETE FROM people WHERE name='Graeme Bell' OR name='Patrick Collins';

^seemed to work
