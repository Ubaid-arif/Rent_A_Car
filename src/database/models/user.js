import { Model } from "@nozbe/watermelondb";
import { USER_SCHEMA } from "../schema";
import { text, children, writer } from "@nozbe/watermelondb/decorators";

export default class User extends Model {
  static table = USER_SCHEMA;

  static associations = {
    car: { type: "has_many", key: "user_id" },
  };

  @text("name") name;
  @text("dob") dob;
  @text("address") address;

  @children("car") car;

}