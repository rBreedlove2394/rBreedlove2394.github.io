function addCourse() {
    const container = document.getElementById('coursesContainer');

    // Create a div to hold the course input + delete button
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-entry';
    courseDiv.style.marginTop = '10px';

    // Create the input
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'course';
    input.placeholder = 'Enter course name';
    input.required = true;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = () => courseDiv.remove();

    // Add input and delete button to the div
    courseDiv.appendChild(input);
    courseDiv.appendChild(deleteBtn);

    // Append the div to the container
    container.appendChild(courseDiv);}
