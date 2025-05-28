document.addEventListener('DOMContentLoaded', function() {
  const skillModal = new bootstrap.Modal(document.getElementById('skillModal'));
  const skillModalLabel = document.getElementById('skillModalLabel');
  const skillModalBody = document.getElementById('skillModalBody');

  // Map card IDs to modal content keys
  const cardMap = {
    'aiml-card': 'aiml',
    'frontend-card': 'frontend',
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
  aiml: {
    title: "AIML & Robotics",
    body: `
      <ul>
        <li><strong>Programming Languages:</strong> Python (used in projects like Real-Time Facial Recognition System with 95% accuracy), C, C++ (explored for model optimization in resource-constrained systems).</li>
        <li><strong>Machine Learning Algorithms:</strong> Linear/Logistic Regression, Decision Trees, Random Forest, SVM, KNN, Naive Bayes, Clustering (applied in data preprocessing for various projects), Haar Cascade Classifier (used in facial recognition at CTTC internship).</li>
        <li><strong>Deep Learning Algorithms:</strong> CNN, ResNet50 (achieved 92.3% accuracy in Automated Rotten Fruit Detection System), YOLO (YOLOv8 used for Construction Site Safety Detection with 90% accuracy).</li>
        <li><strong>Libraries & Frameworks:</strong> TensorFlow, Keras (core frameworks for deep learning projects), OpenCV (for computer vision tasks like object detection), NumPy, Pandas (data manipulation in all AI projects), Scikit-Learn (ML model training), Matplotlib, Seaborn (data visualization for project insights).</li>
        <li><strong>Robotics:</strong> Computer Vision (real-time detection for robotic sorting), Object Detection (YOLOv8 in safety systems), Model Optimization for Resource-Constrained Systems (reduced latency by 25% in fruit detection project).</li>
      </ul>
    `
  },
  frontend: {
    title: "Frontend Development",
    body: `
      <ul>
        <li><strong>Languages & Technologies:</strong> HTML/CSS (structured portfolio layouts), JavaScript (dynamic webpage interactivity), Bootstrap (responsive design and components), Font Awesome (icons), Google Fonts (typography).</li>
      </ul>
    `
  },
  backend: {
    title: "Backend Development",
    body: `
      <ul>
        <li><strong>Languages & Frameworks:</strong> Java (core language for Spring Boot projects), Spring Boot (developed Library Management System backend).</li>
        <li><strong>Databases:</strong> MySQL (database management for web projects), MongoDB (used in Library Management System with initial book data seeding).</li>
        <li><strong>Tools & Technologies:</strong> Docker, Docker Compose (containerized and orchestrated Library Management System for deployment).</li>
      </ul>
    `
  },
  software: {
    title: "Software Development & Tools",
    body: `
      <ul>
        <li><strong>Concepts:</strong> OOP (applied in Java and Python projects), Data Structures & Algorithms (optimized project performance), Agile Project Management (used during CTTC internship for team collaboration).</li>
        <li><strong>Tools:</strong> Jupyter Notebook, Google Colab (AI/ML model development with T4 GPU support), VSCode, Spyder (coding environments for Python projects), Git, GitHub (version control for all projects, including public repos for portfolio).</li>
      </ul>
    `
  },
  softskills: {
    title: "Soft Skills",
    body: `
      <ul>
        <li><strong>Problem-Solving:</strong> Optimized models to reduce latency by 18–25% across projects.</li>
        <li><strong>Attention to Detail:</strong> Fine-tuned datasets for better model generalization.</li>
        <li><strong>Team Collaboration:</strong> Worked effectively during CTTC internship and TADS Education internship in 2020–2021.</li>
      </ul>
    `
  }
};

