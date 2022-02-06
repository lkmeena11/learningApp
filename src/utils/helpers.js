/**
	Helper functions
*/
const padValue = (value) => {
	return (value < 10) ? "0" + value : value;
};

export const prettyDate = () => {
	const newDate = new Date();

  const sMonth = padValue(newDate.getMonth() + 1);
  const sDay = padValue(newDate.getDate());
  const sYear = newDate.getFullYear();
  let sHour = newDate.getHours();
  const sMinute = padValue(newDate.getMinutes());
  let sAMPM = "AM";

  const iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
      sAMPM = "PM";
      sHour = iHourCheck - 12;
  }
  else if (iHourCheck === 0) {
      sHour = "12";
  }

  sHour = padValue(sHour);

  return sMonth + "/" + sDay + "/" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
};