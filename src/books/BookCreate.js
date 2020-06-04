import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import APIURL from '../Helpers/environment';

const NewReview = (props) => {
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[genre, setGenre] = useState(undefined);
    const[length, setLength] = useState('');
    const[review, setReview] = useState('');
    const[rating, setRating] = useState('');
    const[owner, setOwner] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/bookclub/book/new-review`, {
            method: 'POST',
            body: JSON.stringify({book: {title: title, author: author, genre: genre, length: length, review: review, rating: rating, owner: owner}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then ((res) => res.json())
        .then ((logData) => {
            console.log(logData);
            setTitle('');
            setAuthor('');
            setGenre('');
            setLength('');
            setReview('');
            setRating('');
            setOwner('');
            props.fetchBooks();
        })
    }

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    
    return (
        <div className='newReview'>
            <h3 name='leave a review'></h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="title">Title:</Label>
                        <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)} required=" "/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='author'>Author:</Label>
                        <Input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} required=" "/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='genre'>Genre:</Label> 
                        <Input type='select' name='genre' required value={genre} onChange={(e) => setGenre(e.target.value)}>
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
                        <Label htmlFor='length'>Pages:</Label>
                        <Input name='length' value={length} onChange={(e) => setLength(e.target.value)} required=" "/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>Rating:</Label>
                        <Input name='rating' min='1' max='5' value={rating} onChange={(e) => setRating(e.target.value)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='review'>Review:</Label>
                        <Input type="textarea" value={review} onChange={(e) => setReview(e.target.value)} required="    "/>
                    </FormGroup>
                    <Button type='submit'>Post Review</Button>
                </Form>
        </div>
    )
}

export default NewReview;