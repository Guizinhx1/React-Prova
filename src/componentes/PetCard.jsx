const PetCard = ({ pet, showAge = false }) => {
    return (
      <div style={{ 
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        width: '250px',
        margin: '10px'
      }}>
        <img 
          src={pet.image} 
          alt={`Foto de ${pet.name}`} 
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '4px'
          }}
        />
        <div>
          <h3>{pet.name}</h3>
          <p>Raça: {pet.breed}</p>
          {showAge && <p>Idade: {pet.age} anos</p>}
          <p>Tutor: {pet.owner}</p>
        </div>
      </div>
    );
  };
  
  export default PetCard;