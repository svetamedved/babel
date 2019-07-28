import React, { useEffect, useState, useCallback } from 'react';
import {Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Carousel,
        CarouselItem,
        CarouselControl,
        CarouselIndicators,
        CarouselCaption } from 'reactstrap';
import Airtable from '../api/airtable';

const Popover = (props) => {
  const [questions, setQuestions] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modal, setModal] = useState(true);
  const airtable = new Airtable('Questions');

  useEffect(() => {
    if (!questions)
    {
      var questionIds = props.product.get('Questions');
      if (questionIds)
      {
        airtable.findMany(questionIds, setQuestions);
      }
    }
  });

  const renderSlides = (items) => {
    return items.map((item) => {
      return (
        <CarouselItem key={item.id}>
          <CarouselCaption captionText={item.get('Question')} />
        </CarouselItem>
      );
    });
  };

  const nextSlide = useCallback(() => {
  }, []);

  const closePopover = useCallback(() => {
    setModal(!modal)
  }, []);


  return (
     !questions ? (
      <p>Loading...</p>) : (
      <Modal centered toggle={closePopover} isOpen={modal} className={props.className}>
        <ModalHeader>To start answer a few questions</ModalHeader>
        <ModalBody>
          <Carousel activeIndex={activeIndex}>
            {renderSlides(questions)}
            <CarouselIndicators items={questions} activeIndex={activeIndex} />
          </Carousel>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={nextSlide}>Next</Button>{' '}
          <Button color="secondary" onClick={closePopover}>Cancel</Button>
        </ModalFooter>
      </Modal>
  ));
};

export default Popover;

