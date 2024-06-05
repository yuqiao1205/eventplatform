import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: {type: String, required: true },
  photo: { type: String, required: true },
})
// **如果传入2个参数的话：这个模型会和模型名称相同的复数的数据库建立连接。如通过下面方法创建模型，那么这个模型将会操作users这个集合
const User = models.User || model('User', UserSchema);

export default User;