/* eslint-disable import/prefer-default-export */

export const formatDate = ({day, name, des}) => {
    const items = {};
    const strTime = day.dateString;
    items[strTime] = [];
    items[strTime].push({
        name,
        time: day.dateString,
        des,
      });
};
