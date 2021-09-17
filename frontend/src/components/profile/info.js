import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import "./profile.css";
import ImageUploading from "react-images-uploading";
import axios from "axios";

export const Info = () => {
  const [info, setInfo] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [message, setMessage] = useState("");
  const state = useContext(userContext);
  const token = state.token;
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/users",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setInfo([...res.data.userInfo]);
      });
  }, []);
  const updateInfo = () => {
    axios
      .post(
        "http://localhost:5000/users/update",
        {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phone,
          BirthDate: date,
          country: country,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setInfo([...res.data.userInfo]);
        setMessage(res.data.message);
      });
  };
  return (
    <div>
      <div>
        {info &&
          info.map((element, index) => {
            return (
              <div>
                <div key={element._id} className="myprofile">
                  <div>
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,

                        dragProps,
                      }) => (
                        <div>
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img src={image.data_url} alt="" />
                            </div>
                          ))}
                          <button onClick={onImageUpload} {...dragProps}>
                            uploading image
                          </button>
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                  <label>firstName</label>{" "}
                  <input
                    type="text"
                    defaultValue={element.firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  ></input>
                  <label>lastName</label>
                  <input
                    type="text"
                    defaultValue={element.lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  ></input>
                  <label>phone</label>{" "}
                  <input
                    type="text"
                    defaultValue={element.phoneNumber}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  ></input>
                  <label>BirthDate</label>{" "}
                  <input
                    type="date"
                    defaultValue={element.BirthDate}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  ></input>
                  <label>country</label>{" "}
                  <input
                    type="text"
                    defaultValue={element.country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  ></input>
                  <button onClick={updateInfo}>update</button>
                </div>
              </div>
            );
          })}
      </div>
      <h1>{message}</h1>
    </div>
  );
};
