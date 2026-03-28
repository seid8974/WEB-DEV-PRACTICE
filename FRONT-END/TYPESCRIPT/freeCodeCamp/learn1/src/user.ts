type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<Omit<User, "id">>

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
]

function getNextUserId(): number {
  return users.length > 0
    ? Math.max(...users.map(user => user.id)) + 1
    : 1
}

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id)

  if (!foundUser) {
    console.error("User not found!")
    return
  }

  Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: getNextUserId(),
    ...newUser,
  }

  users.push(user)
  return user
}

// usage
addNewUser({ username: "joe_schmoe", role: "member" })

updateUser(1, { username: "new_john_doe" })
updateUser(4, { role: "contributor" })

console.log(users)