import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const USER_SCHEMA = "user";
export const CAR_SCHEMA = "car";

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: USER_SCHEMA,
      columns: [
        { name: "name", type: "string" },
        { name: "dob", type: "string" },
        { name: "address", type: "string" },
        { name: "created_at", type: "number" },
      ],
    }),
    tableSchema({
      name: CAR_SCHEMA,
      columns: [
        { name: "name", type: "string" },
        { name: "image", type: "string", isOptional: true },
        { name: "price", type: "string" },
        { name: "created_at", type: "number" },
        { name: "created_by", type: "number" },
      ],
    }),
  ],
});
