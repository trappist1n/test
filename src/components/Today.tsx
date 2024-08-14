// import { useEffect, useState } from 'react';

export const Today = () => {
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://acl7ckzy20.execute-api.ap-northeast-1.amazonaws.com/dev/getauroralevels',
  //       {
  //         headers: { 'x-api-key': import.meta.env.VITE_AURORALEVELS_API_KEY },
  //       },
  //     )
  //     .then((response) => {
  //       // let events_tmp = response.data;

  //       // for test
  //       let events_tmp = [
  //         {
  //           start: '2024-08-13',
  //           title: '3',
  //         },
  //         {
  //           start: '2024-08-13',
  //           title: 'あああ',
  //         },
  //         {
  //           start: '2024-08-15',
  //           title: '5',
  //         },
  //         {
  //           start: '2024-08-16',
  //           title: '4',
  //         },
  //       ];

  //       for (let event_tmp of events_tmp) {
  //         if (event_tmp.title == '1') {
  //           event_tmp['textColor'] = '#ffebcd';
  //         } else if (event_tmp.title == '2') {
  //           event_tmp['textColor'] = '#ffdab9';
  //         } else if (event_tmp.title == '3') {
  //           event_tmp['textColor'] = '#ff9966';
  //         } else if (event_tmp.title == '4') {
  //           event_tmp['textColor'] = '#ff6633';
  //         } else if (event_tmp.title == '5') {
  //           event_tmp['textColor'] = '#ff3300';
  //         } else {
  //           event_tmp['textColor'] = '#808080';
  //           console.log('error');
  //         }
  //       }
  //       setEvents(events_tmp);
  //     });
  // }, []);

  return (
    <>
      <div>
        description description description description description
        <br />
        description description description description description
        <br />
        description description description description description
        <br />
        description description description description description
        <br />
        {/* <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          // timeZone="UTC" //カレンダーに表示するタイムゾーン
          events={events}
          eventClassNames={
            'text-2xl font-semibold font-sans text-center border-none bg-transparent'
          }
          contentHeight={500}
          windowResizeDelay={0}
        /> */}
      </div>
    </>
  );
};
