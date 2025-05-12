import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('https://68224562b342dce8004dbb6d.mockapi.io/api/v1');
                setPets(response.data.slice(0, 3)); 
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
            }
        };

        fetchPets();
    }, []);

    return (
        <div>
            <h1>Bem-vindo ao nosso site!</h1>
            <div>
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
            <Link to="/login">
                <button>Entrar como Funcionário</button>
            </Link>
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
            <p>Tutor: {pet.owner}</p>
            {dogImage && <img src={dogImage} alt="Cachorro" />}
        </div>
    );
};

export default Home;
