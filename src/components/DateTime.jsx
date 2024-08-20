import { useEffect, useState } from "react";

export const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalDateTime = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`Date : ${formattedDate} - Time: ${formattedTime}`);
    }, 10);
    return () => clearInterval(intervalDateTime);
  }, []);
  return (
    <h3 className="text-xl font-bold text-center text-white mt-3">
      {dateTime}
    </h3>
  );
};
