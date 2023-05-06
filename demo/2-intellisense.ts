interface User {
  ID: string;
  Name: string;
}

const users: User[] = [];

export function add(user: User) {
  // 如果用户不存在，则添加用户
  if (!users.find((u) => u.ID === user.ID)) {
    users.push(user);
  }
}

export function remove(user: User) {
  // 如果用户存在，则删除用户
  const index = users.findIndex((u) => u.ID === user.ID);
  if (index > -1) {
    users.splice(index, 1);
  }
}

export function update(user: User) {
  // 如果用户存在，则更新用户
  const index = users.findIndex((u) => u.ID === user.ID);
  if (index > -1) {
    users[index] = user;
  }
}

export function get(id: string) {
  // 如果用户存在，则返回用户
  return users.find((u) => u.ID === id);
}

export function getAll() {
  // 返回所有用户
  return users;
}

export function clear() {
  // 清空所有用户
  users.splice(0, users.length);
}
