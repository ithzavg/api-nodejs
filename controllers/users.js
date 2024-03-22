//js functions

// Mock database
const users = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
];

export function getAll(req, res) {
  try {
    res.json(users);
  } catch (e) {
    return res.status(500);
  }

  return users;
}

export function getById(req, res) {}

export function create(req, res) {}

export function update(req, res) {} //patch

export function remove(req, res) {} //delete

