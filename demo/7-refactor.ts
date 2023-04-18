// 二维数组
interface User {
  ID: string;
  Name: string;
}

function getUser(usersList: User[][], id: string) {
  for (let i = 0; i < usersList.length; i++) {
    const userList = usersList[i];
    for (let j = 0; j < userList.length; j++) {
      const user = userList[j];
      if (user.ID === id) {
        return user;
      }
    }
  }
}
