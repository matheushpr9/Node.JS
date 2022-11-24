import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://matheushpr9:Batata123@api-biblioteca.u9gocou.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;