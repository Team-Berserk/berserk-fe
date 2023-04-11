export const Card = ({ Date, Hour, Author, Dentist }) => {
  return (
    <div className="p-3">
      <div className="w-72 border-2 rounded">
        <div className="cardDesign">
          <div className="cardInner">User: {Author.username}</div>
          <div className="cardInner">Date: {Date && Date}</div>
          <div className="cardInner text-gray-400">Dentist: {Dentist}</div>
          <div className="cardInner text-gray-400">Hour: {Hour}</div>
        </div>
      </div>
    </div>
  );
};
