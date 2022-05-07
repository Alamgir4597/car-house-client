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
                <div>
                    <h3>Node.js</h3>
                    <p>
                        1.Node.js is a server-side scripting language. <br />
                        2.Node.js is a running environment or interpreter for the JavaScript programming language..<br />
                        3.Node.js has a node package manager with over 500 modules and the ability to handle concurrent requests.
                    </p>
                </div>

            </div>
            <div>
                <h1>sql and nosql difference</h1>
                <h3>Sql</h3>
               
                <p>1. Databases are categorized as Relational Database Management System (RDBMS).<br />
                
                </p>
            </div>
            <div>
                <h1>What other services does firebase provide other than authentication</h1>
                <p>
                    1. Authentication<br />
                    2. Firestore Database <br/>
                    3.Realtime Database<br />
                   4 .Storage<br />
                    5.Hosting<br />
                   6 . Functions<br />
                  7 . Machine Learning
                </p>
            </div>
        </div>
    );
};

export default Blogs;