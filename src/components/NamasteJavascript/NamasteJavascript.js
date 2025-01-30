import React from "react";

const NamasteJavascript = () => {
  return (
    <div className="lg:w-6/12 w-full mx-auto flex flex-wrap gap-y-4 px-4 lg:px-0">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. What is the first core fundamental in JavaScript?
        </div>
        <div className="collapse-content">
          <p>
            A. Everything in javascript happens inside an execution context.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium">
          2. Define execution context?
        </div>
        <div className="collapse-content">
          <p>
            A. Execution context is a big box and it has two components in it:
          </p>
          <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
            <li>
              The first component of execution context is known as memory
              component so this is a place where all the variables & functions
              are stored as a key value pair and this memory component is also
              known as variable environment.
            </li>
            <li>
              The Second component of execution context is the code component so
              this is the place where code is executed one line at a time and
              this code component is also known as thread of execution.
            </li>
          </ol>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium">
          3. Define JavaScript?
        </div>
        <div className="collapse-content flex flex-col gap-y-2">
          <p>A. JavaScript is a synchronous single-threaded language.</p>
          <p>
            So when we say single-threaded that means javascript can only
            execute one command at a time.
          </p>
          <p>
            And when we say synchronous single-threaded that means javascript
            can only execute one command at a time and in a specific order that
            means it will only go to the next line once the current line is
            finish executing.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex items-start">
            <span>4.</span>
            <pre>
              <code>
                {`
                var n = 2;
                function square (num) {
                  var ans = num * num;
                  return ans;
                }
                var square2 = square(n);
                var square4 = square(4);
              `}
              </code>
            </pre>
          </div>
          How execution context is created with the help of javascript program
          on the above example or How the above whole javascript code is run
          behind the scene?
        </div>
        <div className="collapse-content flex flex-col gap-y-2">
          <p>
            A. So when we run the whole above given javascript code then a
            global execution context is created which is like a big box and
            which has two components that are memory component and code
            component. This execution context is created in two phases so the
            first phase is known as creation phase which is also known as memory
            creation phase and it is very critical phase.
          </p>
          <p>
            So if we have the above given javascript code in the first phase of
            memory creation javascript skims through the whole program line by
            line and it will allocate memory to all the variables & functions.
            So as soon as javascript encounter line one that is var n = 2 then
            it allocate memory to n by reserving a memory space to n into memory
            component. So similarly, javascript goes to the line 2 & it sees
            that there is also a function which is named as square so it will
            also allocate a memory to square. So when it allocate memory to n it
            stores a special value which is known as undefined and in case of
            function it literally stores the whole function code inside the
            memory space. And now it also allocate memory to square2 & square4
            and as these are another variables so it store undefined for them.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="namaste-javascript" />
        <div className="collapse-title text-xl font-medium"></div>
        <div className="collapse-content">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default NamasteJavascript;
