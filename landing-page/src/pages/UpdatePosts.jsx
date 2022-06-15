import { useEffect, useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePosts() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState([]);

  const titleField = useRef("");
  const descriptionField = useRef("");
  const [picturePost, setPicturePostField] = useState();

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onupdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const userToUpdatePayload = new FormData();
      userToUpdatePayload.append("title", titleField.current.value);
      userToUpdatePayload.append("description", descriptionField.current.value);
      userToUpdatePayload.append("picture", picturePost);

      const updateRequest = await axios.put(
        `http://localhost:2000/posts/${id}`,
        userToUpdatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updateResponse = updateRequest.data;

      if (updateResponse.status) navigate("/");
    } catch (err) {
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  const getPosts = async () => {
    try {
      const responsePosts = await axios.get(
        `http://localhost:2000/api/posts/${id}`
      );

      const dataPosts = await responsePosts.data.data.getdata;

      setData(dataPosts);
      console.log(dataPosts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(data);

  return (
    <>
      <Container className="bg-form text-center w-50">
        <div className="row">
          <h1 style={{ marginTop: "40px" }} className="mb-3">
            UPDATE
          </h1>
          <Form onSubmit={onupdate}>
            <Form.Group style={{ marginTop: "30px" }}>
              <Form.Label style={{ marginRight: "100%" }}>Title</Form.Label>
              <Form.Control
                type="text"
                ref={titleField}
                placeholder="Masukkan Title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ marginRight: "100%" }}>
                Description
              </Form.Label>
              <Form.Control
                type="text"
                ref={descriptionField}
                placeholder="Masukkan Description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                onChange={(e) => setPicturePostField(e.target.files[0])}
              />
            </Form.Group>
            {errorResponse.isError && (
              <Alert variant="danger">{errorResponse.message}</Alert>
            )}
            <Button
              style={{ marginTop: "30px" }}
              className="w-100"
              type="submit"
            >
              Kirim
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
