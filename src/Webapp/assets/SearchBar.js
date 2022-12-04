import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar() {
  const [svalue, setsvalue]=useState("");
  const navigate = useNavigate();
  return (
    <Container fluid className="section-top px-5 py-3 w-100">
      <Form className=" d-flex mx-5" onSubmit={handleSubmit}>
        <FormControl
          as='input'
          id='globsearch'
          className=" top-section-search rounded-pill"
          type="text"
          placeholder="Search for Movies, tv shows and people."
          onChange={handleChange}
          aria-label="search"
        />
        <Button type='submit' variant="success" className="rounded-pill fw-bolder">
          Search
        </Button>
      </Form>
    </Container>
  );

  function handleSubmit() {
    navigate(`/search/multi/${svalue}`)
  }
  function handleChange(event) {
    setsvalue(event.target.value);
  }
}