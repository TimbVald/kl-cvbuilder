export type PersonalDetails = {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  photoUrl?: string;
  description?: string;
  postSeeking?: string;
};

export type Experience = {
  id?: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  id?: string;
  school: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type Skill = {
  id?: string;
  name: string;
};

export type Language = {
  id?: string;
  language: string;
  proficiency: string; // Ex: Débutant, Intermédiaire, Avancé
};

export type Hobby = {
  id?: string;
  name: string;
};
