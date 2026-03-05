type User = {
  id: number
  name: string
  age: number
  email: string
}

// ① ユーザー作成時（idはまだない、ageは任意）
// Omit<〇〇型, "指定値"> 〇〇型の指定値を除いた〇〇型 と ageは任意(あっても無くても可)
type CreateUserType = Omit<User, "id"> & { age? : number}

const createUser = (user: CreateUserType) => {
  return { ...user, id: Math.random() }
}

// ② ユーザー更新時（変更したい項目だけ渡せるようにしたい）
// Partial<更新したい項目>
// idは必須(プリミティブ)なので任意にしてはダメ
const updateUser = (id: number, user: Partial<User>) => {
  console.log(id, user)
}

// ③ この関数の戻り値の型が間違っている
// user.nameがstringなのに:numberになっている
const getUsername = (user: User) => {
  return user.name
}

// プリミティブ、値の操作はできない。別の値で上書きするしかない。
// オブジェクト型、データや機能をまとめたもの。値の操作が可能