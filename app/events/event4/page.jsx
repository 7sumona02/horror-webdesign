import EventComponent from '../EventComponent';

const Page = () => {
  return (
    <EventComponent 
      title="Event 4"
      description="Are you brave enough to survive the night?"
      date="October 31, 2023"
      time="8:00 PM - 2:00 AM"
      location="The Haunted Mansion, 13 Fear Street"
      dressCode="Costumes encouraged!"
      registerLink="#register-link" // Replace with actual registration link
    />
  );
};

export default Page;
