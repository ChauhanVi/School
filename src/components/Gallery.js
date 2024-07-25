import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import '../styles/Gallery.css';

const photos = [
  { src: 'assets/images/sports_day1.jpg', caption: 'Students participating in various sports events.' },
  { src: 'assets/images/science_exhibition.jpg', caption: 'Students presenting their science projects.' },
  { src: 'assets/images/sports2.jpeg', caption: 'Students performing in the cultural fest.' },
  { src: 'assets/images/sports3.jpg', caption: 'A glimpse of our interactive classrooms.' },
  { src: 'assets/images/sports5.jpg', caption: 'Students reading and studying in the school library.' }
];

const videos = [
  { src: 'assets/videos/school_tour.mp4', caption: 'Virtual tour of Springdale Public School.' },
  { src: 'assets/videos/annual_function.mp4', caption: 'Highlights from the Annual Function 2023.' }
];

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  const handleShow = (media) => {
    setCurrentMedia(media);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setCurrentMedia(null);
  };

  return (
    <Container className="gallery">
      <h3>Photo Gallery</h3>
      <Row>
        {photos.map((photo, index) => (
          <Col md={4} key={index}>
            <div className="thumbnail" onClick={() => handleShow(photo)}>
              <img src={photo.src} alt={photo.caption} className="img-fluid" />
              <div className="caption">{photo.caption}</div>
            </div>
          </Col>
        ))}
      </Row>

      <h3>Video Gallery</h3>
      <Row>
        {videos.map((video, index) => (
          <Col md={6} key={index}>
            <div className="thumbnail" onClick={() => handleShow(video)}>
              <video className="img-fluid">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="caption">{video.caption}</div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          {currentMedia && currentMedia.src.endsWith('.mp4') ? (
            <video controls className="w-100">
              <source src={currentMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={currentMedia && currentMedia.src} alt={currentMedia && currentMedia.caption} className="w-100" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Gallery;
