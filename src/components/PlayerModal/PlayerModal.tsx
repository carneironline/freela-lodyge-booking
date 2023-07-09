"use client";

import { useContext } from 'react'
import { PlayerModalContext } from '@/context'
import ReactPlayer from "react-player"
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css'

import styles from './PlayerModal.module.scss'

const PlayerModal = () => {
  const { isModalOpen, clickHandler } = useContext(PlayerModalContext)
    
  return (
    <Modal 
      open={isModalOpen} 
      onClose={clickHandler}
      styles={{
        modal: {
          paddingTop: 30,
          background: "transparent",
          border: "none",
          boxShadow: "none",
          overflow: "hidden"
        },
        overlay: {
          background: "rgb(33 33 33 / 80%);",
        },
        closeButton: {
          top: 0,
          fill: '#FFF'
        }
      }}
      center
      >
    <section className={styles.player}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=K5IGqQmc-90"
        width="100%"
        height="100%"
      />
    </section>
    </Modal>
  );
}

export default PlayerModal;


