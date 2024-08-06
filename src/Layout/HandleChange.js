const handleChangeGender = (gender) => {
    if (gender === 0)
        return "남자"
    else if (gender === 1)
        return "여자"
    else if (gender === 2)
        return "남녀"
}

export default handleChangeGender;