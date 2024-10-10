import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: Sring,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: Sring,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true },
);

export const DoctorRecord = mongoose.model("DoctorRecord", doctorSchema);
