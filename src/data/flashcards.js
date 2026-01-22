export const data = [
  {
    "role": "Scrum Product Owner",
    "focus": "Backlog management, maximizing value, stakeholder management (Aligns with CSPO)",
    "flashcards": [
      {
        "id": 1,
        "question": "You have a long list of features stakeholders want, but the team can only finish three this sprint. How do you decide which ones to build?",
        "options": {
          "A": "Ask the Lead Developer which ones are the easiest to code.",
          "B": "Choose the features that deliver the highest value to the customer right now.",
          "C": "Pick the features requested by the most senior manager.",
          "D": "Randomly select three to keep it fair."
        },
        "answer": "B",
        "rationale": "The Product Owner's main responsibility is to maximize the value of the product. You prioritize based on business value and user needs, not just ease or authority."
      },
      {
        "id": 2,
        "question": "A developer asks you to clarify a requirement for a user story during the Sprint. What is the best immediate action?",
        "options": {
          "A": "Tell them to wait until the next Sprint Planning meeting.",
          "B": "Write a formal document and email it to the whole company.",
          "C": "Collaborate with them immediately to clarify the acceptance criteria.",
          "D": "Ask the Scrum Master to answer the question."
        },
        "answer": "C",
        "rationale": "Agile emphasizes collaboration. The PO should be available to clarify details so the team is not blocked."
      },
      {
        "id": 3,
        "question": "What is the primary purpose of the Product Backlog?",
        "options": {
          "A": "To track every hour the developers work.",
          "B": "To serve as a fixed contract that cannot be changed.",
          "C": "To be a dynamic list of everything that might be needed in the product.",
          "D": "To record the minutes of the Daily Scrum."
        },
        "answer": "C",
        "rationale": "The backlog is a living document. It contains all desired work but is constantly updated (refined) as new information is learned."
      },
      {
        "id": 4,
        "question": "\"Acceptance Criteria\" are important because they:",
        "options": {
          "A": "Tell the developers exactly how to write the code (e.g., which variable names to use).",
          "B": "Define the specific conditions that must be met for a user story to be considered complete.",
          "C": "Allow the Scrum Master to punish the team if they fail.",
          "D": "List the names of the stakeholders who requested the feature."
        },
        "answer": "B",
        "rationale": "Acceptance criteria provide the \"definition of done\" for a specific item, ensuring everyone agrees on what the final output should look like."
      },
      {
        "id": 5,
        "question": "If the Development Team says they cannot finish all the work selected for the Sprint, who decides which items to remove?",
        "options": {
          "A": "The Scrum Master.",
          "B": "The Product Owner, in consultation with the Development Team.",
          "C": "The CEO.",
          "D": "No one; the team must work overtime to finish everything."
        },
        "answer": "B",
        "rationale": "The Developers know how much they can do, but the Product Owner decides what is most important. They work together to adjust the scope while protecting the Sprint Goal."
      }
    ]
  },
  {
    "role": "Scrum Master",
    "focus": "Servant leadership, coaching, removing impediments (Aligns with CSM)",
    "flashcards": [
      {
        "id": 6,
        "question": "During the Daily Scrum (Stand-up), two developers start a long technical debate that is dragging the meeting out. What should you do?",
        "options": {
          "A": "Let them finish; it’s important they solve it now.",
          "B": "Suggest they continue the discussion after the meeting so the rest of the team can get back to work.",
          "C": "Tell them to stop talking and move on to the next person without solving the issue.",
          "D": "Cancel the rest of the meeting."
        },
        "answer": "B",
        "rationale": "The Daily Scrum is for synchronization, not deep problem solving. A Scrum Master ensures the meeting stays within the 15-minute timebox."
      },
      {
        "id": 7,
        "question": "What is the main accountability of a Scrum Master regarding the team’s impediments (blockers)?",
        "options": {
          "A": "To write the code to fix the blocker.",
          "B": "To complain to management about the team.",
          "C": "To cause the removal of impediments that the team cannot resolve themselves.",
          "D": "To ignore them and hope the team figures it out."
        },
        "answer": "C",
        "rationale": "The Scrum Master is a servant-leader whose job is to clear the path for the team so they can focus on their work."
      },
      {
        "id": 8, 
        "question": "Who is responsible for hiring and firing members of the Scrum Team?",
        "options": {
          "A": "The Scrum Master.",
          "B": "The Product Owner.",
          "C": "The Scrum Team manages itself, but hiring/firing is typically an external management function, not a Scrum Master responsibility.", 
          "D": "The Senior Developer." 
        }, 
        "answer": "C",
        "rationale": "A Scrum Master is a coach, not a manager or boss. They do not typically have hiring/firing power." 
      },
      {
        "id": 9,
        "question": "A stakeholder walks into the team room and asks a developer to work on a \"super urgent\" task that is not in the Sprint Backlog. What should the Scrum Master do?",
        "options": {
          "A": "Tell the developer to stop their current work and do the urgent task.",
          "B": "Intervene and explain that new requests must go through the Product Owner to protect the team's focus.",
          "C": "Add the task to the Sprint Backlog immediately.",
          "D": "Do the task themselves."
        },
        "answer": "B", 
        "rationale": "The Scrum Master protects the team from outside interference. All work should be prioritized by the Product Owner." 
      },
      {
        "id": 10,
        "question": "Which Scrum event is primarily designed for the team to inspect their own processes and improve how they work together?",
        "options": {
          "A": "Sprint Planning.",
          "B": "Daily Scrum.",
          "C": "Sprint Review.",
          "D": "Sprint Retrospective."
        },
        "answer": "D", 
        "rationale": "The Retrospective is the \"improvement meeting\" where the team discusses what went well, what didn't, and how to work better next time."
      }
    ]
  },
  {
    "role": "UI/UX Designer",
    "focus": "Accessibility, Responsiveness, Design Thinking (No code)",
    "flashcards": [      
      {
        "id": 11,
        "question": "When designing a form, why is it important to have high contrast between the text color and the background color?",
        "options": {
          "A": "It makes the design look more expensive.",
          "B": "It ensures users with visual impairments can read the text easily.",
          "C": "It allows the form to load faster.",
          "D": "It helps the developers write better CSS."
        },
        "answer": "B",
        "rationale": "Contrast is a key Accessibility (A11y) concept. If text doesn't stand out from the background, many people cannot read it."
      },
      {
        "id": 12,
        "question": "What does \"Responsive Design\" mean?",
        "options": {
          "A": "The website responds quickly when you click a button.",
          "B": "The design automatically adjusts its layout to look good on phone, tablet, and desktop screens.",
          "C": "The designer responds to emails within 24 hours.",
          "D": "The colors change based on the time of day."
        },
        "answer": "B",
        "rationale": "Responsive design ensures a usable experience across all device sizes, which is standard for modern web design."
      },
      {
        "id": 13,
        "question": "You are designing a button. Why might you use a \"Wireframe\" before creating the final colorful version?",
        "options": {
          "A": "To figure out the layout and structure without getting distracted by colors and details.",
          "B": "Because wireframes are cheaper to sell to clients.",
          "C": "To test if the code works.",
          "D": "To pick the best font family."
        },
        "answer": "A",
        "rationale": "Wireframing is a low-fidelity step to validate the \"skeleton\" of the page and user flow before investing time in visual polish."
      },
      {
        "id": 14,   
        "question": "A user tells you, \"I can't find the 'Checkout' button.\" What is the best design solution?",  
        "options": {  
          "A": "Make the button bigger and use a more distinct color to improve visual hierarchy.",
          "B": "Add a pop-up that says \"Click here to buy.\"",
          "C": "Train the user on how to use the website.",
          "D": "Leave it as is; they will find it eventually."
        },
        "answer": "A",
        "rationale": "If a user can't find a primary action, it is a UI failure. Visual hierarchy (size, color, placement) guides the user's eye to the most important elements." 
      },
      {
        "id": 15,
        "question": "What is the purpose of \"Alt Text\" on images in your design specs?",
        "options": {
          "A": "To hide secret messages.",
          "B": "To describe the image for users using screen readers (blind or low-vision users).",
          "C": "To make the image file size smaller.",
          "D": "To label the image for the marketing team."
        },
        "answer": "B",
        "rationale": "Alt text is crucial for accessibility. It allows software to \"read\" the image to users who cannot see it."
      }
    ]
  },
  {
    "role": "Web Developer",
    "focus": "Web fundamentals + Data Structures & Algorithms (DSA)",
    "flashcards": [      
      {
        "id": 16,
        "question": "You need to look up a customer's order using their unique Order ID. Which data structure would likely be the fastest for this lookup?",
        "options": {
          "A": "An Array (List)",
          "B": "A Linked List",
          "C": "A Hash Map (or Object/Dictionary)",
          "D": "A Stack"
        },
        "answer": "C",
        "rationale": "A Hash Map allows for \"Key-Value\" lookups. Searching for a unique ID (Key) in a Hash Map is generally instantaneous (O(1) time complexity)."
      },
      {
        "id": 17,
        "question": "What is the difference between == and === in JavaScript?",
        "options": {
          "A": "They are exactly the same.",
          "B": "== checks for equality but allows type conversion (e.g., \"5\" equals 5), while === checks for strict equality (type must match).",
          "C": "=== is used for math, == is used for text.",
          "D": "== is a typo; only === is valid."
        },
        "answer": "B",
        "rationale": "This is a classic interview question. == performs type coercion (making it \"loose\"), whereas === is \"strict\" and safer to use to avoid bugs."
      },
      {
        "id": 18,
        "question": "Which HTML tag is used to create the largest heading on a page?",
        "options": {
          "A": "<head>",
          "B": "<h6>",
          "C": "<h1>",
          "D": "<header>"
        },
        "answer": "C",
        "rationale": "<h1> represents the main heading. <h6> is the smallest heading. <head> is for metadata, not visible text."
      },
      {
        "id": 19,
        "question": "In an algorithm, if you have a loop inside another loop (nested loops) that both iterate through a list of size N, what is the Time Complexity?",
        "options": {
          "A": "O(1) - Constant Time",
          "B": "O(N) - Linear Time",
          "C": "O(N^2) - Quadratic Time",
          "D": "O(log N) - Logarithmic Time"
        },
        "answer": "C",
        "rationale": "For every item in the first loop, you run the second loop N times. N * N = N^2. This is often considered slow for large datasets."
      },
      {
        "id": 20,
        "question": "You want to center a div both horizontally and vertically using CSS Flexbox. Which properties do you need on the parent container?",
        "options": {
          "A": "display: block; text-align: center;",
          "B": "display: flex; justify-content: center; align-items: center;",
          "C": "float: center; margin: auto;",
          "D": "position: absolute; left: 50%;"
        },
        "answer": "B",
        "rationale": "Flexbox is the modern standard for layout. justify-content handles the main axis (horizontal usually), and align-items handles the cross axis (vertical)."
      }
    ]
  },
  {
    "role": "Python Developer",
    "focus": "Python syntax + Data Structures & Algorithms (DSA)",
    "flashcards": [      
      {
        "id": 21,
        "question": "Which Python data structure is \"immutable\" (meaning it cannot be changed after it is created)?",
        "options": {
          "A": "List [1, 2]",
          "B": "Dictionary {'a': 1}",
          "C": "Tuple (1, 2)",
          "D": "Set {1, 2}"
        },
        "answer": "C",
        "rationale": "Tuples are immutable lists. Once defined, you cannot add, remove, or change items. This makes them faster and safer for fixed data."
      },
      {
        "id": 22,
        "question": "You have a list of 1,000 numbers and you need to sort them from smallest to largest. What is the average time complexity of Python's built-in sort() function?",
        "options": {
          "A": "O(N)",
          "B": "O(N log N)",
          "C": "O(N^2)",
          "D": "O(1)"
        },
        "answer": "B",
        "rationale": "Python uses \"Timsort,\" which is a very efficient sorting algorithm with an average complexity of O(N log N). This is much faster than O(N^2) bubble sort."
      },
      {
        "id": 23,
        "question": "What does the keyword def do in Python?",
        "options": {
          "A": "It defines a variable.",
          "B": "It defines a function.",
          "C": "It deletes a file.",
          "D": "It downloads a library."
        },
        "answer": "B",
        "rationale": "def function_name(): is the syntax used to create a reusable block of code called a function."
      },
      {
        "id": 24,
        "question": "You are writing a program to detect if a specific word exists in a large book. Which data structure is best to store the words of the book for fast searching?",
        "options": {
          "A": "A List",
          "B": "A Set",
          "C": "A Tuple",
          "D": "A String"
        },
        "answer": "B",
        "rationale": "Checking if an item exists in a Set is very fast (O(1) on average) because it uses hashing. Checking a List requires looking at every item one by one (O(N))."
      },
      {
        "id": 25,
        "question": "What is the purpose of a \"Virtual Environment\" (venv) in Python development?",
        "options": {
          "A": "To simulate a video game.",
          "B": "To run Python on a different computer.",
          "C": "To isolate the dependencies (libraries) for a specific project so they don't conflict with other projects.",
          "D": "To make the code run faster."
        },
        "answer": "C",
        "rationale": "Virtual environments are critical professional practice. They ensure that Project A can use version 1.0 of a library while Project B uses version 2.0 without breaking each other."
      }      
    ]
  }
]