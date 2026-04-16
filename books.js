// Books data
const books = {
    wantToRead: [
        {
            title: "Sixteen Stormy Days",
            author: "Tripurdaman Singh",
            genre: "Non-fiction"
        },
        {
            title: "Godaan",
            author: "Munshi Premchand",
            genre: "Fiction",
            language: "Hindi"
        }
    ],
    inProgress: [
        {
            title: "Raag Darbari",
            author: "Shrilal Shukla",
            language: "Hindi",
            genre: "Non-fiction"
        },
        {
            title: "A Man Called Ove",
            author: "Fredrik Backman",
            genre: "Fiction"
        }
    ],
    completed: [
        {
            title: "Dongri to Dubai: Six Decades of the Mumbai Mafia",
            author: "S. Hussain Zaidi",
            genre: "Non-fiction",
            rating: "5/5",
            opinion: "Reads like a movie. Must read for crime and mafia movie enthusiasts. Very well written."
        }
    ]
};

// Function to get Google search link
function getGoogleSearchLink(title) {
    return `https://www.google.com/search?q=${encodeURIComponent(title)}`;
}

// Function to create book card HTML
function createBookCard(book, showRating = false, showOpinion = false) {
    const genreClass = book.genre === "Fiction" ? "fiction" : "nonfiction";
    const isHindi = book.language && book.language.toLowerCase() === "hindi";
    
    let html = `
        <div class="book-card">
            <span class="genre-label ${genreClass}">${book.genre}</span>
            ${isHindi ? `<span class="language-label">${book.language}</span>` : ""}
            <h3><a href="${getGoogleSearchLink(book.title)}" target="_blank" class="title-link">${book.title}</a></h3>
            <p class="author">${book.author}</p>
    `;
    
    if (showRating && book.rating) {
        html += `
            <div class="rating">
                <span class="rating-label">My Rating:</span>
                <span class="stars">★</span>
                <span class="rating-value">${book.rating}</span>
            </div>
        `;
    }
    
    if (showOpinion && book.opinion) {
        html += `
            <p class="opinion">${book.opinion}</p>
        `;
    }
    
    html += `
        </div>
    `;
    
    return html;
}

// Function to render kanban board
function renderKanbanBoard() {
    // Render Want to Read column
    const wantToReadColumn = document.getElementById("want-to-read-books");
    if (wantToReadColumn) {
        wantToReadColumn.innerHTML = books.wantToRead
            .map(book => createBookCard(book))
            .join("");
    }

    // Render In Progress column
    const inProgressColumn = document.getElementById("in-progress-books");
    if (inProgressColumn) {
        inProgressColumn.innerHTML = books.inProgress
            .map(book => createBookCard(book))
            .join("");
    }

    // Render Completed column
    const completedColumn = document.getElementById("completed-books");
    if (completedColumn) {
        completedColumn.innerHTML = books.completed
            .map(book => createBookCard(book, true, true))
            .join("");
    }
}

// Render when DOM is loaded
document.addEventListener("DOMContentLoaded", renderKanbanBoard);
