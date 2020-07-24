import { useState } from "react";
import IStudentCardProps from "../../shared/IStudentCardProps";
import React from "react";
import { Grid } from '@material-ui/core';
import './StudentGrid.css';
import StudentCard from "../StudentCardComponent/StudentCard";

function StudentGrid() {
    const [studentArray, setStudentArray] = useState<IStudentCardProps[]>([]);
    let cards: JSX.Element[] = [];

    fetch('https://msa-studentsims.azurewebsites.net/api/students/')
        .then(response => response.json())
        .then(response => {
            setStudentArray(response);
        })
        .catch(() => console.log('An error occurred while fetching student information.'));

        studentArray.forEach((card: IStudentCardProps, i: number) => {
            cards.push(
                <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="StudentGridCard">
                    <StudentCard studentId={card.studentId} firstName={card.firstName} lastName={card.lastName} emailAddress={card.emailAddress} phoneNumber={card.phoneNumber} timeCreated={card.timeCreated}></StudentCard>
                </Grid>
            );
        });

    return (
        <div>
            <Grid container spacing={3} className="StudentGridContainer">
                {cards}
            </Grid>
        </div>
    );
}

export default StudentGrid;