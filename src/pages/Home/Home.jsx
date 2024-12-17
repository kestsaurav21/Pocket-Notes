import React, { useState, useEffect } from 'react';
import './Home.css';
import SideBar from '../../components/SideBar/SideBar';
import WelcomePanel from '../../components/WelcomePanel/WelcomePanel';
import NoteSection from '../../components/NoteSection/NoteSection';

const Home = ({ openModal, notes, openNote, id, setNotes, closeNote }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderForMobile = () => (
    <div className='home-page'>
      {id ? (
        <NoteSection setNotes={setNotes} notes={notes} id={id} closeNote={closeNote} />
      ) : (
        <SideBar openModal={openModal} notes={notes} openNote={openNote} />
      )}
    </div>
  );

  const renderForDesktop = () => (
    <div className='home-page'>
      <SideBar openModal={openModal} notes={notes} openNote={openNote} closeNote={closeNote} />
      {id ? <NoteSection setNotes={setNotes} notes={notes} id={id} /> : <WelcomePanel />}
    </div>
  );

  return windowWidth < 550 ? renderForMobile() : renderForDesktop();
};

export default Home;
