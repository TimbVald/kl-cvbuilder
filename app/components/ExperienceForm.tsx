import { Experience } from "@/type";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  experience: Experience[];
  setExperiences: (experience: Experience[]) => void;
};

const ExperienceForm: React.FC<Props> = ({ experience, setExperiences }) => {
  const [newexperience, setNewExperience] = useState<Experience>({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof Experience
  ) => {
    setNewExperience({ ...newexperience, [fied]: e.target.value });
  };

  const handleAddExperience = () => {
    setExperiences([...experience, newexperience])
    setNewExperience({
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Nom complet"
            value={newexperience.jobTitle}
            onChange={(e) => handleChange(e, "jobTitle")}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Nom de l'entreprise"
            value={newexperience.companyName}
            onChange={(e) => handleChange(e, "companyName")}
            className="input input-bordered w-full ml-4"
          />
        </div>

        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Date de debut"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={newexperience.startDate}
            onChange={(e) => handleChange(e, "startDate")}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Date de fin"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={newexperience.endDate}
            onChange={(e) => handleChange(e, "endDate")}
            className="input input-bordered w-full ml-4"
          />
        </div>
        <textarea
          placeholder="Description"
          value={newexperience.description}
          onChange={(e) => handleChange(e, "description")}
          className="input input-bordered w-full"
        />
      </div>

      <button
        onClick={handleAddExperience}
        className="btn btn-primary mt-4"
      >
        Ajouter
        <Plus className="w-4"/>
      </button>
    </div>
  );
};

export default ExperienceForm;
