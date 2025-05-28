document.addEventListener('DOMContentLoaded', function() {
  const skillModal = new bootstrap.Modal(document.getElementById('expModal'));
  const skillModalLabel = document.getElementById('expModalLabel');
  const skillModalBody = document.getElementById('expModalBody');

  // Map card IDs to modal content keys
  const cardMap = {
    'cttc': 'cttc',
    'tads': 'tads',
    'backend-card': 'backend',
    'software-card': 'software',
    'softskills-card': 'softskills'
  };

  Object.keys(cardMap).forEach(cardId => {
    const card = document.getElementById(cardId);
    if (card) {
      card.addEventListener('click', function() {
        const key = cardMap[cardId];
        skillModalLabel.textContent = modalContents[key].title;
        skillModalBody.innerHTML = modalContents[key].body;
        skillModal.show();
      });
    }
  });
});

const modalContents = {
  cttc: {
    title: "AIMl Intern",
    body: `
      <h5>AI Research Intern – CTTC Bhubaneswar, Odisha</h5>
<i>
    <h6>Duration: June 2024 – July 2024</h6>
    <h6>Tools & Technologies: Python, OpenCV, TensorFlow/Keras, Pandas, NumPy, Spyder IDE</h6>
</i>
<p>
    As an AI Research Intern at CTTC, I led a collaborative project focused on developing a real-time facial recognition system for surveillance and robotic vision. I managed a team of interns, coordinated Agile stand-ups, assigned roles, and ensured continuous integration of tasks to meet tight deadlines.
</p>
<ul>
    <li>
        Designed and trained a deep learning model using CNN architectures (Keras + TensorFlow) integrated with OpenCV Haar Cascade for robust face detection.
    </li>
    <li>
        Achieved 95% real-time detection accuracy, optimizing model performance across varied lighting and facial orientations.
    </li>
    <li>
        Reduced latency by 15% through asynchronous frame processing and model optimization.
    </li>
    <li>
        Actively contributed to every phase of the ML lifecycle—data cleaning, model training, hyperparameter tuning, and testing.
    </li>
    <li>
        Delivered a working prototype for live demo, showcasing adaptability and initiative in a real-world client scenario.
    </li>
</ul>
    `
  },
  tads: {
    title: "Frontend Development",
    body: `
      <h5>Associate – TADS Education, Bhubaneswar, Odisha</h5>
<i>
    <h6>Duration: December 2020 – July 2021</h6>
    <h6>Role: Associate in the Creative Writing and Leadership department</h6>
</i>
<p>At TADS Education, a platform focused on imparting real-life skills to school students, I held a leadership role within the student intern council, organizing events and contributing creatively to academic and extracurricular activities.</p>
<ul>
    <li>
        Led a student team in planning and executing interactive events aimed at developing problem-solving, communication, and leadership skills in high school students.
    </li>
    <li>
        Worked closely with the Creative Writing Department, contributing to newsletters, campaigns, and content pieces aimed at engagement and personal development.
    </li>
    <li>
        Developed strong interpersonal and project management skills, balancing creative input with logistical execution across multiple initiatives.
    </li>
    <li>
        Fostered a collaborative environment, motivating peers and juniors to take initiative and lead sub-projects.
    </li>
</ul>
    `
  },
};

