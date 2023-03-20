import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {

  const [showModal, setShowModal] = useState(false);
  function handleClick(){
    setShowModal(!showModal)
  }
  const actionBar = <div>
    <Button primary onClick={handleClick}>Accept</Button>
  </div>
  const modal = <Modal onClose={handleClick} actionBar={actionBar}>
    <p>Here is some important information I would like you to review</p>
  </Modal>;

  return (
    <div>
      <Button primary onClick={handleClick}>Show Modal</Button>
      {showModal && modal}
    </div>
  )
}
