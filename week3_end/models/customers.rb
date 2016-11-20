require('pg')
require_relative('../db/sql_runner')

class Customer

  attr_accessor :name, :funds
  attr_reader :id

  def initialize(options)
    @name = options['name']
    @funds = options['funds']
    @id = options['id'].to_i if options['id']
  end

  def save()
    sql = "INSERT INTO customers(name, funds) VALUES ('#{@name}', #{funds}) returning *;"
    result = SqlRunner.run(sql)
    @id = result[0]['id'].to_i
  end

  def self.all()
    customers = SqlRunner.run("SELECT * FROM customers;")
    return customers.map { |hash| Customer.new(hash)}
  end

  def self.delete_all()
    SqlRunner.run("DELETE FROM customers;")
  end

  def update()
    SqlRunner.run("UPDATE customers SET (name, funds) = ('#{name}', #{funds}) WHERE id = #{id};")
  end

  def delete()
    SqlRunner.run("DELETE FROM customers WHERE id = #{id};")
  end

  def tickets()
      result = SqlRunner.run("SELECT * FROM tickets WHERE customer_id = #{@id};")
      binding.pry
      ticket = Ticket.new(result[0])
      return ticket
    end
end