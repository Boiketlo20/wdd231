// course.js
const courses = [
    { code: 'CSE110', name: 'Programming Building Blocks', credits: 3, completed: true },
    { code: 'WDD130', name: 'Web Fundamentals', credits: 3, completed: true },
    { code: 'CSE111', name: 'Programming with Functions', credits: 3, completed: true },
    { code: 'CSE210', name: 'Programming with Classes', credits: 3, completed: false },
    { code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 3, completed: true },
    { code: 'WDD231', name: 'Frontend Web Development I', credits: 3, completed: false },
];

const courseCards = document.querySelector('.course-cards');

function displayCourses(filter = 'all') {
    courseCards.innerHTML = '';
    let filteredCourses = courses;

    if (filter === 'wdd') {
        filteredCourses = courses.filter(course => course.code.startsWith('WDD'));
    } else if (filter === 'cse') {
        filteredCourses = courses.filter(course => course.code.startsWith('CSE'));
    }

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : 'incomplete'}`;
        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
        `;
        courseCards.appendChild(card);
    });

}

// Add event listeners to filter buttons
document.getElementById('show-all').addEventListener('click', () => displayCourses('all'));
document.getElementById('show-wdd').addEventListener('click', () => displayCourses('wdd'));
document.getElementById('show-cse').addEventListener('click', () => displayCourses('cse'));

// Display all courses by default
displayCourses(); 