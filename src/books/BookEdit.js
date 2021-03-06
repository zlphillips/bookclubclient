import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../Helpers/environment'

const EditReview = (props) => {
    
        const [editTitle, setEditTitle] = useState(props.bookToUpdate.title);
        const [editAuthor, setEditAuthor] = useState(props.bookToUpdate.author);
        const [editGenre, setEditGenre] = useState(props.bookToUpdate.genre);
        const [editLength, setEditLength] = useState(props.bookToUpdate.length);
        const [editReview, setEditReview] = useState(props.bookToUpdate.review);
        const [editRating, setEditRating] = useState(props.bookToUpdate.rating)

        const bookUpdate = (e, book) => {
            e.preventDefault();
            fetch(`${APIURL}/bookclub/book/${props.bookToUpdate.id}`, {
                method: "PUT",
                body: JSON.stringify({book: {title: editTitle, author: editAuthor, genre: editGenre, length: editLength, rating: editRating, review: editReview}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then ((res) => {
                props.fetchBooks();
                props.setModal(false);
            })
        }

        const [modal, setModal] = useState(false);
    
        const toggle = () => setModal(!modal);

        let buttonStyle = {
            backgroundColor: "#07103A",
            color: "#ffffff"
        }

    return (
        <>
                <Form onSubmit={bookUpdate}>
                    <FormGroup>
                        <Label htmlFor="title">Edit Title:</Label>
                        <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="author">Edit Author:</Label>
                        <Input name="author" value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="genre">Edit Genre:</Label>
                        <Input type='select' name='genre' required value={editGenre} onChange={(e) => setEditGenre(e.target.value)}>
                            <option value=""></option>
                            <option value='Action/Adventure'>Action/Adventure</option>
                            <option value='Classic'>Classic</option>
                            <option value='Comic/Graphic Novel'>Comic/Graphic Novel</option>
                            <option value='Mystery'>Mystery</option>
                            <option value='Fantasy'>Fantasy</option>
                            <option value='Historical Fiction'>Historical Fiction</option>
                            <option value='Horror'>Horror</option>
                            <option value='Literary Fiction'>Literary Fiction</option>
                            <option value='Romance'>Romance</option>
                            <option value='SciFi'>Science Fiction</option>
                            <option value='Short Story'>Short Story</option>
                            <option value='Suspense and Thrillers'>Suspense/Thriller</option>
                            <option value="Women's Fiction">Women's Fiction</option>
                            <option value='Biography/Autobiography'>Biography/Autobiography</option>
                            <option value='Cookbook'>Cookbook</option>
                            <option value='Essay'>Essay</option>
                            <option value='Historical Non-Fiction'>Historical Non-Fiction</option>
                            <option value='Memoir'>Memoir</option>
                            <option value='Poetry'>Poetry</option>
                            <option value='Self-Help'>Self-Help</option>
                            <option value='Crime'>Crime</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label name="length">Edit Number of Pages:</Label>
                        <Input name="length" value={editLength} onChange={(e) => setEditLength(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label name='rating'>Edit Rating:</Label>
                        <Input name='rating' min='1' max='5' value={editRating} onChange={(e) => setEditRating(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label name="review">Edit Review:</Label>
                        <Input type="textarea" name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit" style={buttonStyle} onClick={toggle}>Update Review</Button>
                </Form>
        </>
    )
}

export default EditReview;