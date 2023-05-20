import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Elon Mustermann',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123123', 10),
    isAdmin: true,
  },
  {
    name: 'Max Mustermann',
    email: 'max@gmail.com',
    password: bcrypt.hashSync('123123', 10),
  },
  {
    name: 'Erika Mustermann',
    email: 'erica@gmail.com',
    password: bcrypt.hashSync('123123', 10),
  },
  {
    name: 'Mario Rossi',
    email: 'mario@gmail.com',
    password: bcrypt.hashSync('123123', 10),
  },
];

export default users;
