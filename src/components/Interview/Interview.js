import React from "react";

const Interview = () => {
  return (
    <div className="lg:w-6/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">React Q&A</h1>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                1. Introduce yourself?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <div>
                    <p>
                      A. Thank you for this opportunity to introduce myself. I'm
                      currently working as a React Developer at Capital Numbers
                      Infotech Pvt. Ltd., where I have been an integral part of
                      the React engineering team. I've had the privilege of
                      leading 2 out of 3 major React projects, including:
                    </p>
                    <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                      <li>
                        Arkos - The Global Advisors: A platform offering
                        comprehensive wealth management solutions.
                      </li>
                      <li>
                        Gymdash: A cost-effective member management system
                        tailored for independent gyms.
                      </li>
                      <li>
                        Rize.gg: A community-focused platform that empowers
                        passionate gamers.
                      </li>
                    </ol>
                  </div>
                  <p>
                    All these projects were developed using technologies like
                    React, Redux, JavaScript, TailwindCSS, MaterialUI, and SCSS,
                    ensuring modern and efficient web applications.
                  </p>
                  <div>
                    <p>
                      On the personal side, I also built Netflix-GPT, a
                      Netflix-like React app that demonstrates my ability to
                      innovate and optimize performance. Key features include:
                    </p>
                    <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                      <li>
                        A GPT-powered search delivering five related movies for
                        any genre query.
                      </li>
                      <li>
                        Efficient data flow using Redux to display categorized
                        movie lists via the TMDB API.
                      </li>
                      <li>
                        Firebase authentication for secure user management.
                      </li>
                    </ol>
                  </div>
                  <p>
                    These projects reflect my passion for creating fast and
                    user-friendly applications with cutting-edge technologies.
                    I'm excited to bring this experience and enthusiasm to your
                    team.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. How do react lifecycle methods of class based components
                work?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Let's assume there is a parent class component which is
                    rendering 2 similar child class components so now let me
                    tell you how react lifecycle methods work in this scenario.
                    In react lifecycle methods, there are mainly 3 phases that
                    are mounting phase, updating phase & unmounting phase. And
                    all of these phases have render phase & commit phase. So
                    first of all, react starts with the lifecycle methods of
                    parent component so it starts with the render phase first
                    where parent constructor is called & then parent render is
                    called & then when react finds that parent is rendering 2
                    similar child components then react batches the render phase
                    of both child components. So now react start the lifecycle
                    methods of 1st & 2nd child components respectively where
                    first child component constructor will be called & then
                    first child component render will be called & then 2nd child
                    component constructor will be called & then 2nd child
                    component render will be called so this is how the render
                    phase will be completed for both parent & child class based
                    components.
                  </p>
                  <p>
                    And then react starts the commit phase where it batches the
                    commit phase of both child components & then react updates
                    the DOM in a single phase for both child components & then
                    1st child componentDidMount will be called & then 2nd child
                    componentDidMount will be called & then parent
                    componentDidMount will be called. So this is how the
                    mounting phase of the react lifecycle methods work.
                  </p>
                  <p>
                    And now let's say we've updated the state variable by
                    passing the fetched api data as an argument to setState
                    method within componentdidMount function of 1st child
                    component then react will start updating phase of 1st child
                    component where render will be called within render phase &
                    then react start the commit phase where it will update the
                    DOM in a single phase & then componentDidUpdate will be
                    called. So this is how the updating phase of the react
                    lifecycle methods works.
                  </p>
                  <p>
                    And now let's say we've left the page and go to another page
                    then react will start the unmounting lifecycle where
                    componentWillUnmount will be called before we go to another
                    page.
                  </p>
                  <p>
                    So this is how the react lifecycle methods of class based
                    components work.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. What are react hooks?
              </div>
              <div className="collapse-content">
                <p>
                  A. React hooks are normal javascript function which are given
                  to us by react and ther're pre-build and the only thing is that
                  the functions comes with some super powers. That functions had
                  some return logic written behind the scenes inside react. That
                  functions are the utility functions given to us by react. So there
                  are multiple functions that are known as react hooks. For
                  example: useState, useEffect, useSelector, useDispatch, etc.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Define useState() hook?
              </div>
              <div className="collapse-content">
                <p>
                  A. The useState() hook basically gives us or generates super
                  powerful state variables in react.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. What is an useEffect hook? Describe it?
              </div>
              <div className="collapse-content">
                <p>
                  A. An useEffect has its own specific function. So first of
                  all, we’ll import it as named import from the react library.
                  So useEffect is again a function so we’ll call it like a
                  function which takes two arguments so the first argument is an
                  arrow function which is a callback function and the second
                  argument is a dependency array.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Define virtual DOM?
              </div>
              <div className="collapse-content">
                <p>
                  A. Virtual DOM isn't an actual DOM as it is the representation
                  of actual DOM. So virtual DOM is basically those react
                  elements which is an object so similarly whenever we have a
                  big jsx structure it is all an object so this object is
                  basically known as react virtual DOM.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                7. What is the diff algorithm?
              </div>
              <div className="collapse-content">
                <p>
                  A. Diff algorithm basically finds out the difference between
                  two virtual DOMs that are updated virtual DOM and previous
                  virtual DOM.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                8. What is a Reconciliation Algorithm?
              </div>
              <div className="collapse-content">
                <p>
                  A. Reconciliation algorithm is also known as React Fiber since
                  the release of React 16. So let’s say we’ve a UI of top rated
                  restaurant button and restaurant container which contain 10
                  restaurant cards so whenever react render this UI it will
                  create the virtual DOM which is actually the representation of
                  actual dom & then react keep this virtual DOM with it. And
                  then let’s say on click on that top rated restaurant button
                  react filter out top rated restaurants based on some logic &
                  then react will again create the updated virtual DOM & keep it
                  with it. So at this moment diff algorithm comes into picture
                  to find out the difference between two virtual DOMs that is
                  the previous virtual DOM meaning the old virtual DOM before
                  restaurants filtered & updated virtual DOM meaning the new
                  virtual DOM after restaurants filtered & it will then actually
                  update the DOM on every render cycle. So basically, this
                  reconciliation algorithm or react fiber is the new way to find
                  out the difference between two virtual DOMs & update or
                  manipulate the DOM efficiently on every render cycle because
                  this is the core job of react. So this whole algorithm is
                  known as a reconciliation algorithm.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">JavaScript Q&A</h1>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. Find missing elements like 3 and 9 into this array: let arr =
                [1,2,4,5,6,7,8,10]?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex items-start">
                  <p>A.</p>
                  <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                    <code>
                      {`
                      let arr = [1, 2, 4, 5, 6, 7, 8, 10];
                      let missingElements = [];

                      for (let i = 1; i <= 10; i++) {
                        if (!arr.includes(i)) {
                          missingElements.push(i);
                        }
                      }

                      console.log(missingElements); // Output: [3, 9]
                    `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Difference between equality or comparison operator that are
                double equal (==) and triple equal (===)?
              </div>
              <div className="collapse-content">
                <div className="flex items-start">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>
                      The double equal (==) means loose equality operator & it
                      is loose equality because it does perform type coercion so
                      it will return true when both values aren't exactly the
                      same.
                    </li>
                    <li>
                      The triple equal (===) means it is a strict equality
                      operator & it is strict because it doesn't perform type
                      coercion so it will return true when both values are
                      exactly the same.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">HTML Q&A</h1>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. Disadvantages or cons of HTML5?
              </div>
              <div className="collapse-content">
                <div className="flex items-start">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>Client-side rendering.</li>
                    <li>Local storage is less secure.</li>
                    <li>Different video supports for different browsers.</li>
                    <li>Doesn't support old browsers.</li>
                    <li>Media licensing cost.</li>
                    <li>
                      Tough to handle responsiveness on the range of devices.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. What is a semantic tag?
              </div>
              <div className="collapse-content">
                <p>
                  A. Semantic HTML tags are tags that define the meaning of the
                  content they contain. For example, tags like
                  {` <header>, <article>`}, etc.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. Define meta tag? And where do we put meta tags?
              </div>
              <div className="collapse-content">
                <p>
                  A. The {`<meta>`} tag defines metadata about HTML documents.
                  Metadata is data (information) about data. {`<meta>`} tags
                  always go inside the {`<head>`} element, and are typically
                  used to specify character set, page description, keywords,
                  author of the document, and viewport settings.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Difference between div & span?
              </div>
              <div className="collapse-content">
                <p>
                  A. {`<div>`} is a block-level element and {`<span>`} is an
                  inline element.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. What do we put inside the div?
              </div>
              <div className="collapse-content">
                <p>
                  A. The {`<div>`} tag defines a division or a section in an
                  HTML document. The {`<div>`} tag is used as a container for
                  HTML elements - which is then styled with CSS or manipulated
                  with JavaScript. The {`<div>`} tag is easily styled by using
                  the class or id attribute. Any sort of content can be put
                  inside the {`<div>`} tag!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. What is the srcset attribute of source tag?
              </div>
              <div className="collapse-content">
                <p>
                  A. srcset defines the set of images we will allow the browser
                  to choose between, and what size each image is.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                7. Difference between rem & px?
              </div>
              <div className="collapse-content">
                <p>
                  A. Pixels are an absolute unit, so when you set the font size
                  to 24 pixels, it's going to be 24 pixels. Rems, on the other
                  hand, are relative units that are based on the document's
                  font-size
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                8. Difference between flex and grid?
              </div>
              <div className="collapse-content">
                <p>
                  A. Flexbox was designed for layout in one dimension - either a
                  row or a column. Grid was designed for two-dimensional layout
                  - rows, and columns at the same time.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                9. Difference between opacity & alpha?
              </div>
              <div className="collapse-content">
                <p>
                  A. Opacity is a property of an object, while alpha is a
                  property of colour. Opacity affects the entire object, while
                  alpha affects only the transparency of the stroke or fill of
                  the object.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                10. Difference between responsive and adaptive design?
              </div>
              <div className="collapse-content">
                <p>
                  A. Responsive and adaptive design are both types of web design
                  that adapt to different screen sizes. Responsive design uses a
                  single layout that adjusts to the screen size. Adaptive design
                  uses multiple fixed layouts and chooses the best configuration
                  for the available space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
