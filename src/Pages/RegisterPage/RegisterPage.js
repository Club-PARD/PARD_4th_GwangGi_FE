import {useState, useEffect} from "react";
import {BaseContainer} from "../../Layout/Container";
import {handlePostRegister} from "../../API/LoginAPI";
import {useNavigate} from "react-router-dom";

function RegisterPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '', name: '', birthday: '', gender: '', // 초기값은 빈 문자열
        height: '',
        weight: '',
        blood_type: '',
        last_donation_date: ''
    });

    useEffect(() => {
        // 세션 스토리지에서 user_email 값을 가져와서 formData의 email 필드에 저장
        const storedEmail = sessionStorage.getItem('user_email');
        if (storedEmail) {
            setFormData(prevFormData => ({
                ...prevFormData,
                email: storedEmail
            }));
        }
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;

        // 'gender' 필드의 경우 문자열을 정수형으로 변환
        const newValue = name === 'gender'
            ? parseInt(value, 10)
            : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        // 폼 유효성 검사
        const form = e.target;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 데이터 형식 변환
        const transformedData = {
            ...formData,
            height: parseFloat(formData.height), // 실수형으로 변환
            weight: parseFloat(formData.weight) // 실수형으로 변환
        };

        if (window.confirm("등록하시겠습니까?")) {
            try {
                const response = await handlePostRegister(transformedData);
                // if (response.status === 200) {
                alert("등록되었습니다.");
                navigate("/home");
                // }
            } catch (error) {
                console.error("등록 중 오류 발생:", error);
                alert("등록 실패. 다시 시도해 주세요.");
            }
        }
    };

    return (
        <BaseContainer>
            RegisterPage
            <div>
                <label>
                    이름:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required="required"/>
                </label>
                <br/>
                <label>
                    생일:
                    <input
                        type="date"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        required="required"/>
                </label>
                <br/>
                <label>
                    성별:
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required="required">
                        <option value="">선택하세요</option>
                        <option value={0}>남성</option>
                        <option value={1}>여성</option>
                    </select>
                </label>
                <br/>
                <label>
                    키 (cm):
                    <input type="number" name="height" value={formData.height} onChange={handleChange} required="required" step="0.1"
                        // 실수 입력을 위한 설정
                    />
                </label>
                <br/>
                <label>
                    몸무게 (kg):
                    <input type="number" name="weight" value={formData.weight} onChange={handleChange} required="required" step="0.1"
                        // 실수 입력을 위한 설정
                    />
                </label>
                <br/>
                <label>
                    혈액형:
                    <input
                        type="text"
                        name="blood_type"
                        value={formData.blood_type}
                        onChange={handleChange}
                        required="required"/>
                </label>
                <br/>
                <label>
                    마지막 기부일:
                    <input
                        type="date"
                        name="last_donation_date"
                        value={formData.last_donation_date}
                        onChange={handleChange}
                        required="required"/>
                </label>
                <br/>
                <button onClick={handleSubmit}>제출</button>
            </div>
        </BaseContainer>
    );
}

export default RegisterPage;