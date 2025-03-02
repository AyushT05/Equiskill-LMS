"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterContent from './_components/ChapterContent'
import ChapterListCard from './_components/ChapterListCard'
import Header from '@/app/dashboard/_components/Header'

function CourseStart({ params }) {
    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState(0);
    const [chapterContent, setChapterContent] = useState();

    // Unwrap params using React.use()
    const courseId = React.use(params).courseId;

    useEffect(() => {
        if (courseId) {
            GetCourse();
        }
    }, [courseId]);

    /**
     * Used to get Course Info by Course Id
     */
    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(eq(CourseList?.courseId, courseId));

        setCourse(result[0]);
    }

    const GetSelectedChapterContent = async (chapterId) => {
        const result = await db.select().from(Chapters)
            .where(and(eq(Chapters.chapterId, chapterId),
                eq(Chapters.courseId, course?.courseId)));

        setChapterContent(result[0]);
        console.log(result);
    }

    return (
        <div className="h-screen flex flex-col">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <Header />
            </div>

            <div className="flex flex-grow pt-[72px]"> {/* Ensure content starts below Header */}
                {/* Fixed Sidebar */}
                <div className="fixed md:w-72 hidden md:block h-screen border-r shadow-sm bg-white pt-[72px]">
                    <h2 className='font-medium text-lg bg-primary p-4 text-white'>{course?.courseOutput?.Name}</h2>
                    <div>
                        {course?.courseOutput?.Chapters.map((chapter, index) => (
                            <div key={index}
                                className={`cursor-pointer hover:bg-purple-50 ${selectedChapter?.name === chapter?.name && 'bg-purple-100'}`}
                                onClick={() => {
                                    setSelectedChapter(chapter);
                                    GetSelectedChapterContent(index);
                                }}
                            >
                                <ChapterListCard chapter={chapter} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="md:ml-72 flex-grow overflow-y-auto h-[calc(100vh-72px)] p-4">
                    <ChapterContent chapter={selectedChapter} content={chapterContent} />
                </div>
            </div>
        </div>
    )
}

export default CourseStart;
