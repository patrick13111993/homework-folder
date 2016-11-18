require('pg')
require_relative('../db/sql_runner')

class Film

  attr_accessor :title, :price
  attr_reader :id

  def initialize(options)
    @title = options['title']
    @price = options['price']
    @id = options['id'].to_i if options['id']
  end

  def save()
    sql = "INSERT INTO films(title, price) VALUES ('#{@title}', #{price}) returning *;"
    result = SqlRunner.run(sql)
    @id = result[0]['id'].to_i
  end

  def self.all()
    films = SqlRunner.run("SELECT * FROM films;")
    return films.map { |hash| Film.new(hash)}      
  end

  def self.delete_all()
    SqlRunner.run("DELETE FROM films;")
  end

  def update()
    SqlRunner.run("UPDATE films SET (title, price) = ('#{title}', #{price}) WHERE id = #{id};")
  end

  def delete()
    SqlRunner.run("DELETE FROM films WHERE id = #{id};")
  end
end