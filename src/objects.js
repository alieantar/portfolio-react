const navBarObjects = [
    {
        objectId: 0,
        title: "About Me",
    },
    {
        objectId: 1,
        title: "Projects",
    },
    {
        objectId: 2,
        title: "Experience",
    },
    {
        objectId: 3,
        title: "Contact",
    }
];

const content = [
    {
        objectId: 0,
        tag: "about-paragraph",
        contentDisplay: "I’m a software developer specializing in game and web development, where my creativity meets code. With an artistic flair, I transform digital experiences into captivating journeys. When I’m not coding, you’ll find me immersed in music, pondering physics, or exploring the wonders of science. It’s a harmonious blend of logic and artistry, and I love crafting vibrant experiences in the digital realm! My journey in tech began with a fascination for storytelling and innovation, and I've since honed my skills in various programming languages and frameworks. I believe that every line of code can tell a story, and I strive to create engaging narratives that resonate with users. Whether it's designing immersive gameplay mechanics or building intuitive web interfaces, my goal is to leave a lasting impact. In addition to my development work, I enjoy collaborating with other creatives and sharing insights on emerging technologies. I’m always eager to learn and grow, and I find inspiration in both the challenges and successes of my projects. Join me as I continue to explore the intersection of technology and creativity!"
    }
]

const projects = [
    {
        objectId: 0,
        category: "Game Dev",
        projectsArray: [
            {
                objectId: 3,
                title: "Rocky the Rocket",
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://www.youtube.com/watch?v=Lgq4coZnWM4"
            },
            {
                objectId: 4,
                title: "Obstacle Course VR",
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://www.youtube.com/watch?v=jcTUmnbQvEk"
            },
            {
                objectId: 5,
                title: "Jedi Trainer",
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://www.youtube.com/watch?v=n6IBGKmVrFA"
            },
            {
                objectId: 6,
                title: "3D Fruit Ninja",
                description: "DESCRIBE ME",
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
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://github.com/alieantar/BreastCancerClassification"
            },
            {
                objectId: 8,
                title: "Heart Disease Classifier",
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://github.com/alieantar/HeartDiseaseClassifier"

            },
            {
                objectId: 9,
                title: "Image Edge Detection",
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://drive.google.com/drive/folders/1cS3kjNdI2ZZb4urzlZAh4Ea2vXhddMk2"
            },
            {
                objectId: 10,
                title: "Image Segmentation",
                description: "DESCRIBE ME",
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
                description: "DESCRIBE ME",
                imagePath: "DONT FORGET ME",
                URL: "https://github.com/alieantar/blog"
            },            
        ]
    }



]

export {navBarObjects, content, projects};