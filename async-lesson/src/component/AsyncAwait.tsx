export const AsyncAwait = () => {
    return (
        <div></div>
    )
}

const getUser = (id: number): Promise<{name: string, age: number}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ name: "田中", age: 25 })
      } else {
        reject(new Error("IDが不正です"))
      }
    }, 1000)
  })
}

// ↓ これをasync/awaitで書き直してください
const fetchUser = async(id: number) => {
  await getUser(id)
    .then((user) => console.log(user))
    .catch((error) => console.error(error))
}

fetchUser(1)