import { database } from "..";
import { uuid } from "../../constants/function";
import { CAR_SCHEMA } from "../schema";

const car = database.collections.get(CAR_SCHEMA);

export const createCar = async (details) => {
  return await database.write(
    async () =>
      await car.create((entry) => {
        entry._raw.id = uuid();
        entry.user.set(details.user);
        entry.name = details.name;
        details.image && (entry.image = details.image);
        details.price && (entry.price = details.price);
        entry.created_at = new Date().getTime();
        entry.created_by = details.created_by;
      })
  );
};
