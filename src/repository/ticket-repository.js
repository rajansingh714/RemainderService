const { NotificationTicket } = require('../models/index');
const { Op } = require('sequelize');


class TicketRepository {
        async getAll() {
            try {
                const tickets = await NotificationTicket.findAll();
                return tickets;
            } catch (error) {
                throw(error);
            }
        }

        async create(data) {
            try {
                const response = await NotificationTicket.create(data);
                return response;
            } catch (error) {
                throw(error);
            }
        }


        async get(filter) {
            try {
                const ticket = await NotificationTicket.findAll({
                    where: {
                        status: filter.status,
                        notificationTime: {
                             [Op.gte]: new Date()
                        }
                    }
                });
                return ticket;
            } catch (error) {
                throw error;
            }
        }
}


module.exports = TicketRepository;

