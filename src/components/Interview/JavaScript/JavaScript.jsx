const JavaScript = () => {
  return (
    <div className="lg:w-7/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">JavaScript Q&A</h1>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
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
            <div className="collapse collapse-plus bg-base-200">
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
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. What is a timer in JavaScript?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. A timer in JavaScript is used to schedule code execution
                    after a certain amount of time. There are two main
                    functions:
                  </p>
                  <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                    <li>
                      setTimeout(function, delay) runs the function once after
                      the delay.
                    </li>
                    <li>
                      setInterval(function, interval) runs the function
                      repeatedly at each interval.
                    </li>
                  </ol>
                  <p className="pl-4">Example:</p>
                  <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                    <code>
                      {`
                        setTimeout(() => console.log("Runs once after 1 second"), 1000);
                        setInterval(() => console.log("Repeats every 2 seconds"), 2000);
                      `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. What is the difference between window.onload and
                document.ready in JavaScript?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-start">
                    <p>A.</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        window.onload is a JavaScript event that fires after the
                        entire page is fully loaded, including all dependent
                        resources like images, scripts, and stylesheets.
                      </li>
                      <li>
                        document.ready (commonly used with jQuery) fires as soon
                        as the DOM is fully loaded and parsed, even if images
                        and other resources are still loading.
                      </li>
                    </ol>
                  </div>
                  <p>
                    So, document.ready is usually faster and more efficient when
                    you only need to manipulate the DOM.
                  </p>
                  <p className="pl-4">Example:</p>
                  <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                    <code>
                      {`
                        // Native JavaScript - window.onload
                        window.onload = function () {
                          console.log("Page is fully loaded (including images)");
                        };
                        
                        // jQuery - document.ready
                        $(document).ready(function () {
                          console.log("DOM is ready (but images might still be loading)");
                        });
                      `}
                    </code>
                  </pre>
                  <p>When to Use What:</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>
                      Use document.ready (or DOMContentLoaded in vanilla JS)
                      when your script only depends on the HTML being available.
                    </li>
                    <li>
                      Use window.onload if your script depends on images or
                      other external files being fully loaded.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                prototypal inheritance
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                priority between window.something and document.getElementById
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                why we need to do css in js
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                generator function in react
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                Define mockData api
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                difference between react and react-dom define
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                react-script
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>A.</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
