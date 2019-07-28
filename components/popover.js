import React, { useEffect, useState } from 'react';
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
  const airtable = new Airtable('Questions');

  useEffect(() => {
    if (!questions)
    {
      var questionIds = props.product.get('Questions');
      airtable.findMany(questionIds, setQuestions);
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

  return (
     !questions ? (
      <p>Loading...</p>) : (
      <Modal centered isOpen={props.modal} className={props.className}>
        <ModalHeader>To start answer a few questions</ModalHeader>
        <ModalBody>
          <Carousel activeIndex={activeIndex}>
            {renderSlides(questions)}
            <CarouselIndicators items={questions} activeIndex={activeIndex} />
            <CarouselControl direction="prev" directionText="Previous" />
            <CarouselControl direction="next" directionText="Next" />
          </Carousel>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{' '}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
  ));
};

export default Popover;

