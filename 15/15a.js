import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
    
// // const today = dayjs();
// const date = dayjs('2025-02-19');
// console.log(date.format('dddd, MMMM D'));
// // const deliveryDate = today.add(5,'days');
// // const deliveryDate = today.add(30,'days');
// const deliveryDate = today.subtract(30,'days');
// console.log(deliveryDate.format('dddd, MMMM D'));

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
  }

  // Test this function using a few different dates.
  let date = dayjs();
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));

  date = dayjs().add(2, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));

  date = dayjs().add(4, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));

  date = dayjs().add(6, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));