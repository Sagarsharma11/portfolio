"use client"
import React, { useState } from 'react'
import styles from "./WorkExperience.module.css"

const WorkExperience = () => {
    const [sliceVal, setSliceValue] = useState(1);

    const data = [
        {
            duration: "Sep 2023 - Current",
            companyName: "Exzellenz Career Shapers PVT. LTD.",
            designation: "Full Stack Developer",
            aboutCompany: "A cybersecurity company that specializes in providing solutions to prevent cyber threats, particularly those related to phishing attacks.",
            establishment: [
                "Experienced in crafting interactive web apps with React.js, Next.js, and Node.js, specializing in component-based architecture, state management, and backend development. Successfully integrated AWS S3 for uploading files and images, enhancing backend capabilities and enabling robust file management within web applications.",
                "Developed REST APIs using Node.js and MongoDB, providing efficient data handling and seamless integration between frontend and backend services. My solutions, including the app portal.hellomentor.in, have supported over 4,000 users, demonstrating their scalability and reliability in real-world applications.",
            ]
        },
        {
            duration: "May 2023 – Aug 2023",
            companyName: "Viraj Web Group PVT. LTD.",
            designation: "Associate Software Engineer(Intern)",
            aboutCompany: "A cybersecurity company that specializes in providing solutions to prevent cyber threats, particularly those related to phishing attacks.",
            establishment: [
                "Designed and maintained RESTful APIs using Node.js and Express.js, ensuring efficient and secure communication between frontend and backend systems. Developed comprehensive API documentation with Swagger, promoting clear  among stakeholders."
            ]
        },
        {
            duration: "Jan 2022 – Dec 2022",
            companyName: "Alpha World Tech PVT. LTD.",
            designation: "Full-Stack Developer",
            aboutCompany: "A cybersecurity company that specializes in providing solutions to prevent cyber threats, particularly those related to phishing attacks.",
            establishment: [
                "Led the development of scalable full-stack systems, meeting client requirements using the MERN stack and improving development speed by 20%. Collaborated effectively with cross functional teams, excelling in design, coding, inspection, reporting, and debugging."
            ]
        },
    ]

    const handleShow = () => {
        sliceVal <= 1 ? setSliceValue(3) : setSliceValue(1)
    }

    return (
        <div className={styles["workExperience--main--container"]}>
            <div className={styles["workExperience--container"]}>
                <h2 className={styles["title"]}>Work Experience</h2>
                {
                    data?.slice(0, sliceVal)?.map((ele, index) => (
                        <div key={index} className={styles["experience"]}>
                            <small>{ele.duration}</small>
                            <h4>{ele.companyName}</h4>
                            <small>{ele.designation}</small>
                            {/* <h4>{ele.aboutCompany}</h4> */}
                            <div className={styles["experienceDesc"]}>
                                <ul>
                                    {
                                        ele.establishment.map((item, key) => (
                                            <li key={key}>{item}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
                <small onClick={handleShow} className={styles["hideShow"]}>
                    {
                        sliceVal <= 1 ? "show more" : "hide"
                    } </small>
            </div>
        </div>
    )
}

export default WorkExperience