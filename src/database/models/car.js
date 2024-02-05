import { Model } from "@nozbe/watermelondb";
import { CAR_SCHEMA } from "../schema";
import { text, date, relation, writer, field } from "@nozbe/watermelondb/decorators";

export default class Car extends Model {
  static table = CAR_SCHEMA;

  static associations = {
    user: { type: "belongs_to", foreignKey : "user_id" },
  };

  @text("name") name;
  @field("image") image;
  @text("price") price;
  @date("created_at") created_at;
  @field("created_by") created_by;

  @relation("user", "user_id") user;

 
}
