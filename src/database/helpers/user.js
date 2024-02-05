import { uuid } from "../../constants/function";
import { database } from "../index";
import { USER_SCHEMA } from "../schema";

const user = database.collections.get(USER_SCHEMA);

export const createUser = async (details) => {
  return await database.write(
    async () =>
      await user.create((entry) => {
        entry._raw.id = uuid();
        entry.name = details.name;
        entry.dob = details.dob;
        entry.address = details.address;
        entry.created_at = new Date().getTime();

        
      })
  );
};


export const getUserById = async (id) => await user.find(id);