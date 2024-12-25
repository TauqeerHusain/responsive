const classData = {
    6: {
        subjects: {
            hindi: ["Chapter-2", "Malhar"],
            english: [],
           mathematics: ["Prelims", "Chapter - 1" , "Chapter - 2" , "Chapter - 3", "Chapter - 4",
            "Chapter - 5" , "Chapter - 6", "Chapter - 7" , "Chapter - 8", "Chapter - 9", "Chapter - 10"],

            vocational: ["Prelims Info", "Chapter - 1" , "Chapter- 2" , "Chapter- 3", "Chapter- 4", 
            "Chapter- 5" , "Chapter- 6"],
            
        }
    },
    7: {
        subjects: {
            hindi: ["Kavitavali", "Doha Sanchay"],
            english: ["Shakespeare", "Poetry Anthology"],
            mathematics: ["Fractions and Algebra", "Geometry Basics"],
        }
    },
    8: {
        subjects: {
            science: ["Physics Basics", "Chemistry Essentials"],
            mathematics: ["Trigonometry Basics", "Advanced Algebra"],
        }
    },
    9: {
        subjects: {
            science: ["Physics Concepts", "Chemistry Practical Guide"],
            socialScience: ["World History", "Political Science"],
        }
    },
    10: {
        subjects: {
            science: ["Advanced Physics", "Chemical Reactions"],
            socialScience: ["Indian History", "Geography"],
        }
    },
    11: {
        subjects: {
            arts: ["Art and Culture", "Modern Art"],
            physicalEducation: ["Health and Fitness", "Yoga Practice"],
        }
    },
    12: {
        subjects: {
            vocationalEducation: ["Entrepreneurship Guide", "Workshop Manuals"],
            urdu: ["Urdu Poetry", "Ghazals Compilation"],
        }
    },
};
const classSelect = document.getElementById("classSelect");
const subjectSelect = document.getElementById("subjectSelect");
const ChapertSelect = document.getElementById("ChapertSelect");
const searchIcon = document.getElementById("searchIcon");
const errorMessage = document.getElementById("errorMessage");
const textBox = document.getElementById("textBox");
const pdfViewer = document.getElementById("pdfViewer");

// Populate subjects based on the selected class
classSelect.addEventListener("change", () => {
    const selectedClass = classSelect.value;
    subjectSelect.innerHTML = `<option value="">Select the subject</option>`;
    ChapertSelect.innerHTML = `<option value="">Select the book title</option>`;

    if (classData[selectedClass]) {
        const subjects = classData[selectedClass].subjects;
        for (const subject in subjects) {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
            subjectSelect.appendChild(option);
        }
    }
});

// Populate books based on the selected subject
subjectSelect.addEventListener("change", () => {
    const selectedClass = classSelect.value;
    const selectedSubject = subjectSelect.value;
    ChapertSelect.innerHTML = `<option value="">Select the book title</option>`;

    if (classData[selectedClass] && classData[selectedClass].subjects[selectedSubject]) {
        const books = classData[selectedClass].subjects[selectedSubject];
        books.forEach((book) => {
            const option = document.createElement("option");
            option.value = book;
            option.textContent = book;
            ChapertSelect.appendChild(option);
        });
    }
});

// Update the iframe when the search icon is clicked
searchIcon.addEventListener("click", () => {
    const selectedClass = classSelect.value;
    const selectedSubject = subjectSelect.value;
    const selectedBook = ChapertSelect.value; // Correct select for book dropdown

    if (selectedClass && selectedSubject && selectedBook) {
        errorMessage.style.display = "none"; // Hide error if all selections are valid

        // Construct the PDF file URL based on the selected class, subject, and book
        const pdfUrl = `/PDF File/${selectedClass}th class/${selectedSubject}/${selectedBook}.pdf`;
        pdfViewer.src = pdfUrl;

        // Show the PDF viewer
        textBox.style.display = "block";
    } else {
        errorMessage.style.display = "block"; // Show error message
        textBox.style.display = "none"; // Hide PDF viewer
    }
});
