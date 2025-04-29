// survey.js

// Function to add a new course field
function addCourse() {
    const container = document.getElementById('coursesContainer');

    const div = document.createElement('div');
    div.className = 'course-item';

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'course';
    input.placeholder = 'Enter course name';
    input.required = true;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = () => container.removeChild(div);

    div.appendChild(input);
    div.appendChild(deleteBtn);
    container.appendChild(div);
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('introForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            alert('Please fill out all required fields.');
            return;
        }

        // Collect form data
        const name = document.getElementById('name').value;
        const mascot = document.getElementById('mascot').value;
        const imageCaption = document.getElementById('imageCaption').value;
        const personalBackground = document.getElementById('personalBackground').value;
        const professionalBackground = document.getElementById('professionalBackground').value;
        const academicBackground = document.getElementById('academicBackground').value;
        const webDevBackground = document.getElementById('webDevBackground').value;
        const platform = document.getElementById('platform').value;
        const funnyThing = document.getElementById('funnyThing').value;
        const anythingElse = document.getElementById('anythingElse').value;
        const courses = Array.from(document.querySelectorAll('input[name="course"]')).map(input => input.value);

        // Replace form with output
        const output = document.getElementById('output');
        output.innerHTML = `
      <section>
        <h2>Welcome ${name}!</h2>
        <h3>Mascot: ${mascot}</h3>
        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Background in Web Development:</strong> ${webDevBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${platform}</p>
        <h3>Courses Currently Taking:</h3>
        <ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>
        <p><strong>Funny Thing:</strong> ${funnyThing}</p>
        <p><strong>Anything Else:</strong> ${anythingElse}</p>
        <p><strong>Image Caption:</strong> ${imageCaption}</p>
      </section>
      <br>
      <button onclick="window.location.reload()">Reset and Start Over</button>
    `;

        form.style.display = 'none';
    });
});
