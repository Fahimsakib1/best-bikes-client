import React from 'react';
import useTitle from '../../Hooks/useTitle';
import pic1 from '../../images/FAQ/1.png';  

const Blogs = () => {
    
    useTitle('Blogs'); 
    
    return (
        <div className=' mx-2 sm:mx-2 md:mx:4 lg:mx-10 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10 rounded-xl'>
            <section className="bg-gray-800 text-gray-100 mt-20 rounded-lg dark:bg-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-4xl font-semibold sm:text-4xl text-center mb-8">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-lg dark:text-blue-600">Question 1: What are the different ways to manage a state in a React application?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400"><span className='text-orange-500'>Answer: </span> The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "disappears" once the execution is finished. But  using state, React functional components can store information even after execution. There are four main types of state you need to properly manage in your React apps: <br></br>
                                1. Local State <br></br>
                                2. Global State <br></br>
                                3. Server State <br></br>
                                4. URL State
                            </p>

                            <p className='500 px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 '><span className='text-orange-500'>Manage Local State in React: </span> Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. useState is the first tool  to manage state in your components. It can take accept any valid data value, including primitive and object values. Its setter function can be passed down to other components as a callback function. <br />
                                useReducer is another option that can be used for either local or global state. The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.</p>

                            <p className='500 px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 '><span className='text-orange-500'>Manage Global State in React: </span>
                                To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state. The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes. <br />
                                In many cases, you do not want all children to update in response to a global state update, because all children may not be consuming or relying upon that global state. You only want to re-render if their props or state changes. To manage your global state, reach for tried and tested third-party libraries like Zustand, Jotai, and Recoil.
                            </p>

                            <p className='500 px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 '><span className='text-orange-500'>Manage Server State in React: </span>
                                At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise. What happens when there is a network error? Do you really need to hit the server every time users visits the home page if the data hasn’t changed? Do you need to add useState and useEffect in every component you want to fetch my data? <br />
                                To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query. They not only give us a convenient hook to both get and change data from an API, but they keep track of all the necessary states and cache the data for us.
                            </p>

                            <p className='500 px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 '><span className='text-orange-500'>Manage URL State in React: </span>

                                URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If you are using React Router, you can get all the information you need using useHistory or useLocation. Additionally, if you have any route parameters that you need to use, for example to fetch data based off of, you can use the useParams hook.
                            </p>

                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 dark:text-blue-600 text-lg">Question 2: How does prototypical inheritance work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400"> <span className='text-orange-500'>Answer: </span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object </p>
                            <div className='my-4'>
                                <img className='mx-auto' src={pic1} alt="" />
                            </div>
                            <p className='500 px-4 py-6 pt-0 ml-4 mt-4 text-gray-400 '>
                                Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle while also adding a new feature. <br />
                                We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length). We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.
                            </p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 dark:text-blue-600 text-lg">Question 3: What is a unit test? Why should we write unit tests?</summary>
                            <p className='500 px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 '>
                                <span className='text-orange-500'>Answer: </span>
                                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br /> <br />
                                <span className='text-orange-500'> Why Should We write unit testing is added below</span> <br />

                                1. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system. <br />

                                2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. <br />

                                3. It simplifies the debugging process. <br />

                                4. Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy. <br />

                                5. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results. <br />

                                6. Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application. <br />

                                7. In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. <br />
                            </p>
                        </details>


                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 dark:text-blue-600 text-lg">Question 4: React vs Angular vs Vue ?</summary>
                            <p className='500 px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 '>
                                <span className='text-orange-500'>Answer: </span> <br />
                                <span className='text-orange-500'>React </span> Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages. One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. <br />

                                <span className='text-orange-500'>Angular </span> AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular. Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.<br />

                                <span className='text-orange-500'>Vue </span> Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and increment behavior in mind, as well as ease of integration with other view layer frameworks. Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
                            </p>

                            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                                <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">React vs Angular vs Vue</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-xs">
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col /> text-orange-500 text-center
                                        </colgroup>
                                        <thead className="bg-gray-700">
                                            <tr className="text-left text-lg">
                                                <th className="p-3 text-orange-500 text-center">React</th>
                                                <th className="p-3 text-orange-500 text-center">Angular</th>
                                                <th className="p-3 text-orange-500 text-center">Vue</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="border-b border-opacity-20 border-gray-700 text-center text-lg">
                                                <td className="p-3">
                                                    <p  className="text-gray-100">Developed By Facebook</p>
                                                </td>
                                                <td className="p-3">
                                                <p  className="text-gray-100">Developed By Google</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="text-gray-100">Developed By Community</p>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-opacity-20 border-gray-700 text-center text-lg">
                                                <td className="p-3">
                                                    <p  className="text-gray-100">Programming Language Javascript</p>
                                                </td>
                                                <td className="p-3">
                                                <p  className="text-gray-100">Programming Language Typescript</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="text-gray-100">Programming Language Javascript</p>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-opacity-20 border-gray-700 text-center text-lg">
                                                <td className="p-3">
                                                    <p  className="text-gray-100">Uses Virtual DOM</p>
                                                </td>
                                                <td className="p-3">
                                                <p  className="text-gray-100">Uses Real DOM</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="text-gray-100">Uses Virtual DOM</p>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-opacity-20 border-gray-700 text-center text-lg">
                                                <td className="p-3">
                                                    <p  className="text-gray-100">Prevalent Architecture Flux</p>
                                                </td>
                                                <td className="p-3">
                                                <p  className="text-gray-100">Prevalent Architecture MVC</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="text-gray-100">Prevalent Architecture Flux</p>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-opacity-20 border-gray-700 text-center text-lg">
                                                <td className="p-3">
                                                    <p  className="text-gray-100">Scalability: Component-based approach</p>
                                                </td>
                                                <td className="p-3">
                                                <p  className="text-gray-100">Scalability:  Modular development structure</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="text-gray-100">Scalability:  Template-based approach</p>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-opacity-20 border-gray-700 text-center text-lg">
                                                <td className="p-3">
                                                    <p  className="text-gray-100">Data Binding Uni-directional</p>
                                                </td>
                                                <td className="p-3">
                                                <p  className="text-gray-100">Data Binding Bi-directional</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="text-gray-100">Data Binding Bi-directional</p>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </details>



                    </div>
                </div>
            </section>
        </div> 
    );
};

export default Blogs;