import React, { useContext } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { UserInputContext } from '@/app/_context/UserInputContext';

const SelectOption = () => {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

    const handleInputChange = (fieldname, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldname]: value
        }));
    };

    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className='text-sm'>📖 Difficulty level</label>
                    <Select onValueChange={(value) => handleInputChange('level', value)} defaultValue={userCourseInput.level}>
                        <SelectTrigger>
                            <SelectValue placeholder="Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>⌛ Course Duration</label>
                    <Select onValueChange={(value) => handleInputChange('duration', value)} defaultValue={userCourseInput.duration}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 hour">1 hour</SelectItem>
                            <SelectItem value="2 hours">2 hours</SelectItem>
                            <SelectItem value="2+ hours">2+ hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>▶️ Video Required?</label>
                    <Select onValueChange={(value) => handleInputChange('displayVideo', value)} defaultValue={userCourseInput.displayVideo}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select choice" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>

                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>📚 No. of Chapters</label>
                    <Input
                        type='number'
                        placeholder='No. of Chapters'
                        onChange={(event) => handleInputChange('noOfChapters', event.target.value)} defaultValue={userCourseInput.noOfChapters}
                    />

                </div>


            </div>
        </div>
    );
};

export default SelectOption;
