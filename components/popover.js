import React, { useEffect, useState, useCallback } from 'react';
import {Button,
        Modal,
        Form,
        Label,
        Input,
        CustomInput,
        ModalHeader,
        ModalBody,
        ModalFooter,
        FormGroup,
        Carousel,
        CarouselItem,
        CarouselControl,
        CarouselIndicators,
        CarouselCaption } from 'reactstrap';
import Airtable from '../api/airtable';

const Popover = (props) => {
  const [questions, setQuestions] = useState(null);
  const [answerTypes, setAnswerTypes] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (!questions)
    {
      var questionIds = props.product.get('Questions');
      if (questionIds)
      {
        const airtable = new Airtable('Questions');
        airtable.findMany(questionIds, setQuestions);
      }
    }
    if (!answerTypes)
    {
      const airtable = new Airtable('Answer_type');
      airtable.listData(setAnswerTypes);
    }
  });

  const findAnswerType = (typeId) => {
    for (var i in answerTypes) {
      const aType = answerTypes[i];
      if (typeId.includes(aType.id))
      {
        return aType.get('Name');
      }
    }
    return null;
  };

  const renderSlideInput = (question, answerType) => {
    // console.log(answerType);
    switch (answerType) {
      case "Multiple select / check-list":
        return (
          <FormGroup>

          <div>
            <CustomInput type="switch" id="exampleCustomSwitch1" name="customSwitch" label="option1" />
            <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="option2" />
            <CustomInput type="switch" id="exampleCustomSwitch3" name="customSwitch" label="option3"/>
            <CustomInput type="switch" id="exampleCustomSwitch4" name="customSwitch" label="option4"/>
            <CustomInput type="switch" id="exampleCustomSwitch5" name="customSwitch" label="option5"/>
            <CustomInput type="switch" id="exampleCustomSwitch6" name="customSwitch" label="option6"/>
          </div>
        </FormGroup>);
      case "Single select / choosing":
        return (
          <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>);
      case "Scale":
        return "suck";
      case "Input":
        return "nope";
      case "Binary / yes-no":
        return (
           <FormGroup>
          <Label for="Yes/No">Inline</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomInline" label="Yes" inline />
            <CustomInput type="checkbox" id="exampleCustomInline2" label="No" inline />
          </div>
        </FormGroup>);
      default:
        return (
          <Input type="textarea" name="text" id={question.id} />
        );
    }
  };

  const renderSlides = (items) => {
    return items.map((item) => {
      return (
        <CarouselItem key={item.id}>
          <CarouselCaption captionText={item.get('Question')} />
          <FormGroup>
          {renderSlideInput(item, findAnswerType(item.get('Type')))}
        </FormGroup>
        </CarouselItem>
      );
    });
  };

  const nextSlide = useCallback(() => {
    if (activeIndex !== questions.length - 1)
    {
      setActiveIndex(activeIndex + 1);
    }
  }, [questions]);

  const closePopover = useCallback(() => {
    setModal(!modal);
  }, []);

  return (
     !questions || !answerTypes ? (
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

