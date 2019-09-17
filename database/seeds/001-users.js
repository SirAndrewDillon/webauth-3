const bcrypt = require('bcryptjs')
const dillonPassword = bcrypt.hashSync('tacos', 10)
const ginaPassword = bcrypt.hashSync('steak', 10)

exports.seed = function(knex) {
	/* ---------------------- Deletes ALL existing entries ---------------------- */
	return knex('users')
		.truncate()
		.then(function() {
			/* -------------------------- Inserts seed entries -------------------------- */
			return knex('users').insert([
				{
					username: 'Dillon',
					password: dillonPassword,
					department: 'Team Edward' //Not Really
				},
				{
					username: 'Gina',
					password: ginaPassword,
					department: 'Team Jacob'
				}
			])
		})
}
