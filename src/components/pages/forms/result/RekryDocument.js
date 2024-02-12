import {Document, Font, Page, StyleSheet, Text} from "@react-pdf/renderer";
import robotoRegular from "../../../../fonts/Roboto-Regular.ttf";
import robotoBold from "../../../../fonts/Roboto-Bold.ttf";
import React from "react";

const RekryDocument = ({state}) => {
    const workingTimeStartDate = new Date(state.form2.workingTimeStart)
    const workingTimeEndDate = new Date(state.form2.workingTimeEnd)
    return(<Document>
        <Page size={"A4"} style={styles.body}>
            <Text style={styles.title}>
                Pien- ja mikroyrittäjän rekrytointiopas
            </Text>
            <Text style={styles.subTitle}>
                Vaihe 1 - Osaamisen tarve
            </Text>

            <Text style={styles.clause}>
                1.Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:
            </Text>
            <Text style={styles.text}>
                {state.form1.requiredSkills}
            </Text>

            <Text style={styles.clause}>
                2.Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:
            </Text>
            <Text style={styles.text}>
                {state.form1.purposeCompany}
            </Text>

            <Text style={styles.clause}>
                3.Aikataulusta rekrytointikierros:
            </Text>
            <Text style={styles.text}>
                {state.form1.recruitmentPlan}
            </Text>

            <Text style={styles.clause}>
                4.Arvioi budjetti rekrytoinille:
            </Text>
            <Text style={styles.text}>
                {state.form1.recruitingBudget}
            </Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
        <Page size={"A4"} style={styles.body}>
            <Text style={styles.subTitle}>
                Vaihe 2 - Työpaikkailmoitus
            </Text>

            <Text style={styles.clause}>
                1.Yrityksen sijainti:
            </Text>
            <Text style={styles.text}>
                {state.form2.companyLocation}
            </Text>

            <Text style={styles.clause}>
                2.Yrityksen kuvaus:
            </Text>
            <Text style={styles.text}>
                {state.form2.companyDescription}
            </Text>

            <Text style={styles.clause}>
                3.Työsopimuksen tyypi:
            </Text>
            <Text style={styles.text}>
                {state.form2.contractType}
            </Text>

            <Text style={styles.clause}>
                4.Työaika:
            </Text>
            <Text style={styles.text}>
                {state.form2.workingTime}
            </Text>

            <Text style={styles.clause}>
                5.Tehtävänimike:
            </Text>
            <Text style={styles.text}>
                {state.form2.workPosition}
            </Text>

            <Text style={styles.clause}>
                6.Työnkuvaus:
            </Text>
            <Text style={styles.text}>
                {state.form2.jobDescription}
            </Text>

            <Text style={styles.clause}>
                7.Ilmoittajan nimi:
            </Text>
            <Text style={styles.text}>
                {state.form2.notifierName}
            </Text>

            <Text style={styles.clause}>
                8.Ilmoittajan puhelin:
            </Text>
            <Text style={styles.text}>
                {state.form2.notifierPhoneNumber}
            </Text>

            <Text style={styles.clause}>
                9.Hakemusten vastaanotto sähköpostiosoite:
            </Text>
            <Text style={styles.text}>
                {state.form2.receivingEMail}
            </Text>

            <Text style={styles.clause}>
                10.Julkaisuaika:
            </Text>
            <Text style={styles.text}>
                {state.form2.workingTimeStart && state.form2.workingTimeEnd ? `${workingTimeStartDate.getDate()}.${workingTimeStartDate.getMonth()+1}.${workingTimeStartDate.getFullYear()} - ${workingTimeEndDate.getDate()}.${workingTimeEndDate.getMonth()+1}.${workingTimeEndDate.getFullYear()}` : ''}
            </Text>

            <Text style={styles.clause}>
                11.Yhteyshenkilöt ja heidän yhteystietonsa:
            </Text>
            <Text style={styles.text}>
                {state.form2.contactPersons}
            </Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
        <Page size={"A4"} style={styles.body}>
            <Text style={styles.subTitle}>
                Vaihe 3 - Hakemusten käsittely
            </Text>

            <Text style={styles.clause}>
                1.Mieti milloin olet tavoitettavissa:
            </Text>
            <Text style={styles.text}>
                {state.form3.whenAvailable}
            </Text>

            <Text style={styles.clause}>
                2.Milloin vastaat hakijoille:
            </Text>
            <Text style={styles.text}>
                {state.form3.whenAnswer}
            </Text>

            <Text style={styles.clause}>
                3.Luonnostele kutsu haastatteluun:
            </Text>
            <Text style={styles.text}>
                {state.form3.invitationInterview}
            </Text>

            <Text style={styles.clause}>
                4.Voit kopioida esimerkkivastauksen itsellesi:
            </Text>
            <Text style={styles.text}>
                {state.form3.rejectedApplications}
            </Text>

            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
        <Page size={"A4"} style={styles.body}>
            <Text style={styles.subTitle}>
                Vaihe 4 - Haastattelu
            </Text>

            <Text style={styles.clause}>
                1.Haastattelutyyppi:
            </Text>
            <Text style={styles.text}>
                {state.form4.interviewType}
            </Text>

            <Text style={styles.clause}>
                2.Suunnittele haastattelurunko:
            </Text>
            <Text style={styles.text}>
                {state.form4.interviewPlan}
            </Text>

            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
    </Document>)
}
Font.register({
    family:'Roboto',
    fonts:[
        {src:robotoRegular, fontWeight:"normal"},
        {src:robotoBold, fontWeight:700}
    ]

})
const styles = StyleSheet.create({
    body: {
        fontFamily: 'Roboto',
        backgroundColor:'white',
        paddingHorizontal:70,
        paddingVertical:30,
    },
    title:{
        fontSize:18,
        fontWeight:700,
        marginBottom:30
    },
    subTitle:{
        fontSize:16,
        fontWeight:700,
        marginBottom:20
    },
    clause:{
        fontSize:14,
        marginBottom:10
    },
    text:{
        fontSize:13,
        marginBottom:25
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

export default RekryDocument