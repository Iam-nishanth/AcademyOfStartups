import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { styled } from "styled-components";

type VideoModalProps = {
  image: string;
  videoId: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ image, videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <VideoContainer>
        <img src={image} alt="Thumbnail" onClick={openModal} />
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={videoId}
          onClose={closeModal}
          youtube={{
            autoplay: 1,
          }}
        />
      </VideoContainer>
    </>
  );
};

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 700px;
  min-height: 150px;
  overflow: hidden;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export default VideoModal;
