import { Education } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
    educations: Education[];
    setEducations: (educations: Education[]) => void;
}

const EducationForm: React.FC<Props> = ({ educations, setEducations }) => {

    const [newEducation, setNewEducation] = useState<Education>(
        {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            description: '',
        }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Education) => {
        setNewEducation({ ...newEducation, [fied]: e.target.value })
    }

    const handleAddEducation = () => {
        setEducations([...educations, newEducation])
        setNewEducation(
            {
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                description: '',
            }
        )
    }

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder="Nom de l'école"
                        value={newEducation.school}
                        onChange={(e) => handleChange(e, 'school')}
                        className='input input-bordered w-full'
                    />
                    <input
                        type="text"
                        placeholder="Diplôme"
                        value={newEducation.degree}
                        onChange={(e) => handleChange(e, 'degree')}
                        className='input input-bordered w-full ml-4'
                    />
                </div>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder='Date de début'
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text"
                        }}
                        value={newEducation.startDate}
                        onChange={(e) => handleChange(e, 'startDate')}
                        className='input input-bordered w-full'
                    />
                    <input
                        type="text"
                        placeholder='Date de fin'
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text"
                        }}
                        value={newEducation.endDate}
                        onChange={(e) => handleChange(e, 'endDate')}
                        className='input input-bordered w-full ml-4'
                    />
                </div>
                
                <textarea
                    placeholder='Description'
                    value={newEducation.description}
                    onChange={(e) => handleChange(e, 'description')}
                    className='input input-bordered w-full'
                ></textarea>
            </div>

            <button
                onClick={handleAddEducation}
                className='btn btn-primary mt-4'
            >
                Ajouter
                <Plus className='w-4' />
            </button>

        </div>
    )
}

export default EducationForm
