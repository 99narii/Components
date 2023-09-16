import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 종료일자 설정 (YYYY-MM-DD 형식)
    const endDate = new Date('2023-10-10');

    // 매 초마다 countdown 값을 업데이트
    const interval = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        // 종료일자와 현재 날짜와의 차이 계산 (일, 시간, 분, 초 단위)
        const days = Math.floor(difference / (1000 * 60 * 60 *24));
        const hours = Math.floor((difference % (1000 *60 *60*24)) / (1000*60*60));
        const minutes = Math.floor((difference % (1000 *60 *60)) / (1000*60));
        const seconds = Math.floor((difference % (1000 *60)) /1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds
        });
      }
      
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
}, []);

return (
   <div>
     <p>{countdown.days}일 {countdown.hours}시간 {countdown.minutes}분 {countdown.seconds}초</p>
   </div>
 );
};

export default Countdown;