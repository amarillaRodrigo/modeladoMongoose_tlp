import mongoose from "mongoose";

const employeSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    sales: [
      {
        Product: [
          {
            name: {
              type: String,
              required: [true],
            },
            price: {
              type: Number,
              required: [true],
            },
            quantity: {
              type: Number,
              required: [true],
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeSchema);
