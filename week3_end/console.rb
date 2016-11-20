require('pry-byebug')
require_relative('models/films')
require_relative('models/tickets')
require_relative('models/customers')

Ticket.delete_all()
Customer.delete_all()
Film.delete_all()

film1 = Film.new({
  'title' => 'Shaving Ryans Privates',
  'price' => '10.00'.to_f
  })

film1.save()

customer1 = Customer.new({
  'name' => 'Donald Trump',
  'funds' => '10000.00'.to_f
  })

customer1.save()

ticket1 = Ticket.new({
  'customer_id' => customer1.id,
  'film_id' => film1.id
  })

ticket1.save()

ticket1.buy_ticket(customer1, film1)

customer1.tickets()

binding.pry
nil