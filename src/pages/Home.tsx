import React from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '../components/Sidebar';

const Home = () => {
  const calculateAge = () => {
    const birthDate = new Date('2004-06-28');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-[300px] flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">À propos de moi</h2>
          
          <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Bonjour, Je suis <strong>Killian</strong> 👋</h3>
            <p className="text-gray-600 mb-4">
              Étudiant en informatique, <strong>passionné</strong> par la technologie. J'ai{' '}
              <strong>{calculateAge()}</strong> ans, actuellement en{' '}
              <strong>seconde année du BUT Informatique</strong> à l'IUT de Montpellier-Sète.
            </p>
            <p className="text-gray-600">
              Je suis à la <strong>recherche d'un stage</strong> d'une durée de 10 à 12 semaines à partir du{' '}
              <strong>13 janvier</strong>, et je suis également <strong>ouvert aux propositions d'alternance</strong> dans le domaine de l'informatique.
            </p>
          </section>

          <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Qu'est-ce que j'aime ?</h3>
            <p className="text-gray-600 mb-4">
              Depuis toujours dans le milieu de l'automobile, j'ai une <strong>forte passion</strong> pour les <strong>motos</strong> et les{' '}
              <strong>voitures</strong>. Je m'intéresse particulièrement à <strong>l'intelligence artificielle</strong>, avec l'évolution
              actuelle des <strong>voitures autonomes</strong>.
            </p>
            <p className="text-gray-600 mb-4">
              Mes parents ayant une auto-moto-école, j'ai depuis l'enfance suivi des cours de <strong>sécurité routière</strong>,
              ce qui fait que je suis sensibilisé à <strong>tous les aspects</strong> de la sécurité.
            </p>
            <p className="text-gray-600 mb-4">
              J'ai pratiqué le <strong>handball</strong> de mon entrée au collège jusqu'à la fin de mon lycée,
              ce qui m'a permis de développer des compétences essentielles telles que le <strong>travail
              d'équipe</strong> ou encore ma <strong>combativité</strong>.
            </p>
            <p className="text-gray-600">
              J'ai également joué de la <strong>guitare</strong> durant 8 ans.
            </p>
          </section>

          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Mon cursus</h3>
            <p className="text-gray-600">
              Originaire d'un <strong>village</strong> dans le Var (83), je n'ai pas hésité à me déplacer à{' '}
              <strong>Montpellier</strong> pour suivre mes <strong>études en informatique</strong>. J'ai commencé au lycée
              dans la filière <strong>STI2D</strong> spécialité maths/SIN. J'ai ensuite <strong>déménagé à Montpellier</strong>{' '}
              pour rejoindre l'IUT de Montpellier-Sète.
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;