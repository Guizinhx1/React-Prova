import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const [pets, setPets] = useState([]);
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('https://mockapi.io/api/v1/pets', {
                    headers: { Authorization: `Bearer ${auth.token}` }
                });
                setPets(response.data);
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
            }
        };

        fetchPets();
    }, [auth.token]);

    const handleLogout = () => {
 setAuth(null); // Limpa o contexto
        window.location.href = '/login'; // Redireciona para a página de login
    };

    return (
        <div>
            <h1>Olá, {auth.user.name}!</h1>
            <button onClick={handleLogout}>Sair</button>
            <div>
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
};

const PetCard = ({ pet }) => {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const fetchDogImage = async () => {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setDogImage(response.data.message);
        };

        fetchDogImage();
    }, []);

    return (
        <div>
            <h2>{pet.name}</h2>
            <p>Raça: {pet.breed}</p>
            <p>Idade: {pet.age}</p>
            <p>Tutor: {pet.owner}</p>
            {dogImage && <img src={dogImage} alt="Cachorro" />}
        </div>
    );
};

export default Dashboard;
