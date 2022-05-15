import React from 'react';

const Blogs = () => {
    return (
        <div className='container mb-5'>
            <h1>difference javascript and node.js</h1>
            <div className='d-flex'>
                
                <div>
                    <h3>JavaScript</h3>
                    <p>
                       1. JavaScript is a lightweight, cross-platform, interpreted scripting programming language <br/>
                        2.JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. <br/>
                        3.JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome).
                    </p>
                </div>
                <div className='d-flex'>
                   <div>
                        <h3>Node.js</h3>
                        <p>
                            1.Node.js is a server-side scripting language. <br />
                            2.Node.js is a running environment or interpreter for the JavaScript programming language..<br />
                            3.Node.js has a node package manager with over 500 modules and the ability to handle concurrent requests.
                        </p>
                   </div>
                </div>

            </div>
            <div >
                <h1>sql and nosql difference</h1>
                <div className='d-flex'>
                    
                  <div>
                        <h3>Sql</h3>

                        <p>1. Databases are categorized as Relational Database Management System (RDBMS).<br />
                            2. As we already know SQL uses structured query language for its CRUD operation which is defined as SQL. <br />
                            3.SQL dbs is implemented in both open source and commercial Database such as like Postgres & MySQL as open source and Oracle and Sqlite as commercial.


                        </p>
                  </div>
                </div>
                <div>
                   <div className='d-flex'>
                       <div>
                            <h3>NoSql</h3>

                            <p>1.While NOSQL database is known as non-relational or distributed database.<br />
                                2. oSQL database on other hand has dynamic schema for unstructured data.Data stored in this type of database is not structured and could be stored in either of forms such as document. <br />
                                3.On other hand NOSQL is purely open source and MongoDB, BigTable, Redis, RavenDB.


                            </p>
                       </div>
                   </div>
                </div>
            </div>
            <div>
                <h1>What is purpose of jwt</h1>
                <p>
                    JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app s frontend) and a server (your apps backend).
                </p>
            </div>
        </div>
    );
};

export default Blogs;