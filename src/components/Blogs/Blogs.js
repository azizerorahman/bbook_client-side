import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <div className='mb-5'>
                <h3 className='fw-bold fs-4 mb-3 f-merriweather'>Difference between JavaScript and Node.js</h3>
                <p className='f-inter black-color'>JavaScript is a popular programming language, and Node.js is an interpreter or running environment for JavaScript.</p>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='w-50'>JavaScript</th>
                            <th>Node.js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Runs only in the browser</td>
                            <td>Used in executing Javascript codes outside of the browsers</td>
                        </tr>
                        <tr>
                            <td>Used in client-side development</td>
                            <td>Used on server-side</td>
                        </tr>
                        <tr>
                            <td>Run on any browser engine like Spidermonkey for Firefox</td>
                            <td>Run only on V8 of Google Chrome</td>
                        </tr>
                        <tr>
                            <td>Capable to add HTML &#38; play with the DOM.</td>
                            <td>Not capable to add HTML tags</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mb-5'>
                <h3 className='fw-bold fs-4 mb-3 f-merriweather'>When should you use Node.js and when should you use MongoDB?</h3>
                <p className='f-inter black-color'>Node.js and MongoDB are totally two different things. NodeJS is a JavaScript runtime environment. It's helps JavaScript to run outside of server. It's used in server-side development. On the other hand, MongoDB is a NoSQL database, where we can store data and Node.js helps to connect client-side to database by it's server site. For building a website I needed a database to store my data or information so here I can use MongoDB, to connect with MongoDB I need a connector, so here I can use Node.js which will help my website to run outside of server.</p>
            </div>
            <div className='mb-5'>
                <h3 className='fw-bold fs-4 mb-3 f-merriweather'>Difference between SQL and NoSQL databases</h3>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='w-50'>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Databases are categorized as Relational Database Management System (RDBMS).</td>
                            <td>Databases are categorized as Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>Fixed or static schema</td>
                            <td>Dynamic schema</td>
                        </tr>
                        <tr>
                            <td>Table based databases</td>
                            <td>Can be document based, key-value pairs, graph databases</td>
                        </tr>
                        <tr>
                            <td>Vertically scalable</td>
                            <td>Horizontally scalable</td>
                        </tr>
                        <tr>
                            <td>Not suitable for hierarchical data storage.</td>
                            <td>Suitable for the hierarchical data store as it supports key-value pair method.</td>
                        </tr>
                        <tr>
                            <td>Such as: Oracle, MySQL, Microsoft SQL Server etc.</td>
                            <td>Such as: MongoDB, CouchDB, Redis, DynamoDB etc.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Blogs;