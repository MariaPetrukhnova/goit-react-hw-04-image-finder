import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from "./Button/Button";
import { useState } from "react";

export default function App() {

const [searchName, setSearchName] = useState('');
const [searchArr, setSearchArr] = useState([]);
const [showModal, setShowModal] = useState(false);
const [pickedImg, setPickedImg] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [totalHits, setTotalHits] = useState(null);

const handleFormSubmit = (searchName) => {
    setSearchArr([]);
    setCurrentPage(1);
    setSearchName(searchName); 
  }

  const handlePickedImg = (url) => {
    setPickedImg(url);
  }

  const toggleModal = (img) => {
      setShowModal(!showModal);
      setPickedImg(img);
  }

  const addImages = (res) => {
      setSearchArr([ ...searchArr, ...res ])
  };

  const addTotalHits = (res) => {
    setTotalHits(res)
  };

  const loadMoreImg = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage + 1);
  };


    return (
      <div>
        <Searchbar
          onSubmit={handleFormSubmit}
        />
        <ImageGallery
          searchName={searchName}
          toggleModal={toggleModal}
          imgPick={handlePickedImg}
          addImages={addImages}
          currentPage={currentPage}
          searchArr={searchArr}
          totalHits={addTotalHits}
        />
        {searchArr.length > 0  && (totalHits - (currentPage*12)) > 0  && <Button onClick={loadMoreImg} />}
        <ToastContainer autoClose={3000} />
        {showModal && <Modal
          onClose={toggleModal}
          imgToShow={pickedImg}
        />}
        
      </div>
    );
};