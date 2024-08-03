import dayjs from "dayjs";

const getCalculateAge = (birthdate) => {
    const today = dayjs();
    const birthDate = dayjs(birthdate);
    let age = today.year() - birthDate.year() + 1;

    if (today.month() < birthDate.month() || (today.month() === birthDate.month() && today.date() < birthDate.date())) {
        age--;
    }

    return age;
};

export default getCalculateAge;