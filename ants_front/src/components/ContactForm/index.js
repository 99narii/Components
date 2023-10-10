import React, { useState } from 'react';
import './style.css';


export default function Contact() {
    const [phone, setPhone] = useState('');
    const [lastPhoneValue, setLastPhoneValue] = useState('');


    const handlePhoneChange = (event) => {
        let value = event.target.value.replace(/\D/g, ''); //숫자 입력만 받기

        if (value.length > 12) {    //하이픈 제외 총 길이 12자리
            value = value.slice(0, 12);
        }

        let formattedValue = '';

        if (value.length === 12) {       //숫자가 12자리라면
            const part1 = value.slice(0,4); 
            const part2 = value.slice(4,8); 
            const part3 = value.slice(8,12)

            formattedValue += part1 + '-' + part2 + '-' + part3;

        } else if (value.length === 10) {
            let part1;
            let part2;
            let part3;

            if(value.startsWith('02')) { // 첫 두 자리가 '02'인 경우
                part1 = value.slice(0,2);
                part2 = value.slice(2,6);
                part3 = value.slice(6);
                
                formattedValue += part1 + '-' + part2 + '-' + part3;
                
              } else { // 그 외의 경우 
                part1 = value.slice(0,3);
                part2 = value.slice(3,6);
                part3= value.slice(6);

                formattedValue += part1 + '-' + part2 + '-' + part3;
              }

        } else if (value.length > 3) {      //3자리 이후로 하이픈이 생성 될 수 있도록
            const part1 = value.slice(0,3);
            const part2 = value.slice(3,7);
            const part3 = value.slice(7,11)
    
            formattedValue += part1 + '-' + part2 + '-' + part3;
        
        } else {
            formattedValue = value;
        }
        setPhone(formattedValue);
        
        if (value.length < lastPhoneValue.length) {
            formattedValue = formattedValue.slice(0, -1);
        }
    
        setLastPhoneValue(value);
        
        setPhone(formattedValue);
    };
    
    return (
        <div className='contactPage'>
            <section>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">신청인(회사명)</label>
                        <input className='underline' type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="tel">연락처</label>
                        <input className='underline' type="tel" id="phone" name="phone" required 
                               value={phone} onChange={handlePhoneChange} />
                    </div>
                    <div class="form-group">
                        <label for="message">문의사항</label>
                        <textarea id="message" name="message" rows="8" required></textarea>
                    </div>
                    <button type="submit">상담 신청하기</button>
                </form>
            </section>
        </div>
    );
}