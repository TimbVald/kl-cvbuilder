 
import { PersonalDetails } from "@/type";
import React from "react";

type Props = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
};

const PersonalDetailsForm: React.FC<Props> = ({
  personalDetails,
  setPersonalDetails,
  setFile,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof PersonalDetails
  ) => {
    setPersonalDetails({ ...personalDetails, [fied]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if( selectedFile ){
      setFile(selectedFile)
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nom complet"
        value={personalDetails.fullName}
        onChange={(e) => handleChange(e, "fullName")}
        className="input input-bordered w-full"
      />
      <div className="flex">
        <input
          type="email"
          placeholder="Email"
          value={personalDetails.email}
          onChange={(e) => handleChange(e, "email")}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Phone"
          value={personalDetails.phone}
          onChange={(e) => handleChange(e, "phone")}
          className="input input-bordered w-full ml-4"
        />
      </div>

      <input
        type="text"
        placeholder="Address"
        value={personalDetails.address}
        onChange={(e) => handleChange(e, "address")}
        className="input input-bordered w-full"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input input-bordered w-full file-input-primary"
      />

      <input
        type="text"
        placeholder="Poste Recherche"
        value={personalDetails.postSeeking}
        onChange={(e) => handleChange(e, "postSeeking")}
        className="input input-bordered w-full"
      />

      <textarea
        placeholder="Description de la personne"
        value={personalDetails.description}
        onChange={(e) => handleChange(e, "description")}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default PersonalDetailsForm;
