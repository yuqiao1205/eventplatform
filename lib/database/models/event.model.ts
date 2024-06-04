import { Document, Schema, model, models } from "mongoose";

//继承Document：继承自Mongoose的Document接口，表示这是一个MongoDB文档，具有MongoDB文档特有的方法和属性（如_id）。

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string, name: string } 
  organizer: { _id: string, firstName: string, lastName: string }
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }, // category和organizer字段是引用类型，引用另一个集合中的文档（通过ObjectId）。这样可以在查询时，通过populate方法，将引用类型字段的值替换为引用文档的内容。
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

// 如果models中已经存在Event模型，就直接使用；否则，使用EventSchema创建一个新的模型。
// models 获取所有已经创建的模型，如果已经创建了Event模型，就直接使用；否则，使用model方法创建一个新的模型。
// model方法的第一个参数是模型的名称，第二个参数是模式。
const Event = models.Event || model('Event', EventSchema);

export default Event;   