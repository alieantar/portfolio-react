const navBarObjects = [
    {
        objectId: 0,
        title: "About Me",
        content: "I’m a software developer specializing in game and web development, where my creativity meets code. With an artistic flair, I transform digital experiences " +
                  "into captivating journeys. When I’m not coding, you’ll find me immersed in music, pondering physics, or exploring the wonders of science. It’s a harmoniousblend " +
                  "of logic and artistry, and I love crafting vibrant experiences in the digital realm! My journey in tech began with a fascination for storytelling and innovation, " +
                  "and I've since honed my skills in various programming languages and frameworks. I believe that every line of code can tell a story, and I strive to create engaging " +
                  "narratives that resonate with users. Whether it's designing immersive gameplay mechanics or building intuitive web interfaces, my goal is to leave a lasting impact. " +
                  "In addition to my development work, I enjoy collaborating with other creatives and sharing insights on emerging technologies. I’m always eager to learn and grow, and I " +
                  "find inspiration in both the challenges and successes of my projects. Join me as I continue to explore the intersection of technology and creativity!"
    },
    {
        objectId: 1,
        title: "Projects",
        content: [
            {
                objectId: 0,
                category: "Game Dev",
                projectsArray: [
                    {
                        objectId: 3,
                        title: "Rocky the Rocket",
                        description: "Developed and released the first version of a game using Unity3D and C# where the player navigates a rocket through an environment while considering gravity, drag, and falling objects to land on a landing pad. The game is in continual progress as more features and capabilities are added.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://www.youtube.com/watch?v=Lgq4coZnWM4"
                    },
                    {
                        objectId: 4,
                        title: "Obstacle Course VR",
                        description: "Developed a three-dimensional virtual reality game using Unity3D and C# where the player navigates a course without colliding with objects in the environment. The purpose of this project was to showcase shader graph capabilities to model naturally-occurring phenomenon such as iridescence, glow effects, refraction, etc.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://www.youtube.com/watch?v=jcTUmnbQvEk"
                    },
                    {
                        objectId: 5,
                        title: "Jedi Trainer",
                        description: "Collaborated with a teammate to develop a game where the player faces attack droids in a sci-fi themed environment, and has to redirect their attacks using their light saber.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://www.youtube.com/watch?v=n6IBGKmVrFA"
                    },
                    {
                        objectId: 6,
                        title: "3D Fruit Ninja",
                        description: "Collaborated with a teammate to develop a 3D game where the player uses a sword to fight off fruits in a tropical environment.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://www.youtube.com/watch?v=bPoDIvtrQOk"
                    },
                ]
            },
            {
                objectId: 1,
                category: "Machine Learning",
                projectsArray: [
                    {
                        objectId: 7,
                        title: "Breast Tumor Classifier",
                        description: "Utilized a convolutional neural network to extract features and classify tumors as benign or malignant from a dataset of microscopic breast biopsy images.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://github.com/alieantar/BreastCancerClassification"
                    },
                    {
                        objectId: 8,
                        title: "Heart Disease Classifier",
                        description: "Developed a binary classifier using machine learning to predict whether a patient may have heart disease based on learned features from a dataset.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://github.com/alieantar/HeartDiseaseClassifier"

                    },
                    {
                        objectId: 9,
                        title: "Image Edge Detection",
                        description: "Developed a program that reads a gray-scale image, stores it as a matrix, applies convolution, non-maximum thresholding, and hysteresis thresholding to obtain a final edge map of the image.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://drive.google.com/drive/folders/1cS3kjNdI2ZZb4urzlZAh4Ea2vXhddMk2"
                    },
                    {
                        objectId: 10,
                        title: "Image Segmentation",
                        description: "Created a program that reads an image and performs binarization at three different threshold levels, as well as applies Otsu thresholding to perform image segmentation.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://drive.google.com/drive/folders/1WpbxOqUUVHW7RAJ_Y6KUonRSMfbtx_tN"
                    },
                ]
            },
            {
                objectId: 2,
                category: "Web Dev",
                projectsArray: [
                    {
                        objectId: 11,
                        title: "Blog",
                        description: "Welcome to Blog – yes, it’s just called Blog. A simple space where you can jot down your thoughts, express yourself, and let go. Write freely and when you're done, close the tab, and your posts vanish—leaving no trace. It's all about releasing what’s on your mind and moving forward.",
                        imagePath: "DONT FORGET ME",
                        URL: "https://github.com/alieantar/blog"
                    },            
                ]
            }
        ]
    },
    {
        objectId: 2,
        title: "Experience",
        content: [
            {
                objectId: 0,
                companyName: "Precise Systems",
                title: "Computer Systems Analyst - Software Engineer",
                duties: "Designed and implemented intuitive user interfaces in Unity using C#, enabling real-time instructor control in training simulations.\n\n"+
                        "Built interactive, multimedia-rich tutorials to assist with air traffic controller training, incorporating speech recognition and 3D models.\n\n"+
                        "Created a realistic Multi-Function Display (MFD) interface for jet simulations, plus GUIs for VR/AR system menus.\n\n"+
                        "Collaborated with cross-functional teams on testing and debugging to ensure high performance and user satisfaction.\n"
            },
            {
                objectId: 1,
                companyName: "University of Central Florida - Physics Department",
                title: "Teaching Assistant",
                duties: "Managed logistics for quizzes and exams, ensuring smooth operations in high-stakes academic environments.\n\n"+
                        "Assisted in grade management and collaborated with professors on grading standards and issue resolution.\n\n"+
                        "Communicated clearly with students and faculty, demonstrating reliability and precision under tight deadlines.\n"
            }
        ]
    },
    {
        objectId: 3,
        title: "Contact",
        content: []
    }
];


export {navBarObjects};