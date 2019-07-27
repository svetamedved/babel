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
        <CarouselItem
          key={item.get('Question')}
        >
          <h4>{item.get('Question')}</h4>
          <CarouselCaption captionText={item.get('Question')} captionHeader={item.get('Question')} />
        </CarouselItem>
      );
    });
  };

  return (
     !questions ? (
      <p>Loading...</p>) : (
      <Modal centered isOpen={props.modal} className={props.className}>
        <ModalBody>
          <Carousel
            activeIndex={activeIndex}
          >
            <CarouselIndicators items={questions} activeIndex={activeIndex} />
            {renderSlides(questions)}
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

