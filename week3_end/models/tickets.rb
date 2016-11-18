require('pg')
require_relative('../db/sql_runner')

class Ticket

  attr_accessor :customer_id, :film_id
  attr_reader :id

  def initialize(options)
    @customer_id = options['customer_id'].to_i
    @film_id = options['film_id'].to_i
    @id = options['id'].to_i if options['id']
  end

  def save()
    sql = "INSERT INTO tickets(customer_id, film_id) VALUES (#{@customer_id}, #{film_id}) returning *;"
    result = SqlRunner.run(sql)
    @id = result[0]['id'].to_i
  end

  def self.all()
    tickets = SqlRunner.run("SELECT * FROM tickets;")
    return tickets.map { |hash| Ticket.new(hash)}      
  end

  def self.delete_all()
    SqlRunner.run("DELETE FROM tickets;")
  end

  def update()
    SqlRunner.run("UPDATE tickets SET (customer_id, film_id) = (#{@customer_id}, #{film_id}) WHERE id = #{id};")
  end

  def delete()
    SqlRunner.run("DELETE FROM tickets WHERE id = #{id};")
  end
end