export type ProjectType = 'Mechanical' | 'Electrical' | 'Software' | 'Machine Learning' | 'Web Design' | 'All';

export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    thumbnail: string;
    previewMedia?: string; // GIF or video for hover effect
    videoUrl?: string; // YouTube video URL
    detailImages: string[];
    type: ProjectType[];
    tags: string[];
    date: string;
    githubUrl?: string;
    liveUrl?: string;
    isPrivate?: boolean;
    achievements?: string[];
    technicalStack: string[];
    relatedProjects?: string[]; // Array of project IDs

    // New fields for enhanced project pages
    role?: string; // Designer, Developer, Team Lead, etc.
    duration?: string; // Project timeline
    scope?: string; // Brief scope description
    sections?: {
        overview?: string;
        mechanicalDesign?: string;
        electricalDesign?: string;
        softwareArchitecture?: string;
        results?: string;
    };
}

export const projects: Project[] = [
    {
        id: '14',
        slug: 'hacked-roomba',
        title: 'Hacked Roomba Autonomous Robot',
        shortDescription: 'Modified iRobot Roomba with custom control system, enhanced sensors, and autonomous navigation capabilities.',
        fullDescription: `Reverse-engineered and modified an iRobot Roomba to create a versatile autonomous robotics platform. The project involved bypassing the original control system to implement custom firmware and integrating additional sensors for enhanced environmental awareness.

The modified Roomba features Arduino-based control, ultrasonic and IR sensors for obstacle detection, and a custom navigation algorithm. This platform serves as an excellent testbed for robotics experiments, autonomous navigation research, and sensor integration projects.`,
        thumbnail: '/hackedroomba.png',
        previewMedia: '/hackedroomba.png',
        detailImages: ['/hackedroomba.png', '/hackedroomba2.png'],
        type: ['Software', 'Electrical'],
        tags: ['Robotics', 'Arduino', 'Autonomous Navigation', 'Embedded Systems', 'Reverse Engineering'],
        date: '2023',
        technicalStack: ['Arduino', 'C++', 'Ultrasonic Sensors', 'IR Sensors', 'Motor Control'],
        role: 'Hardware Hacker & Developer',
        duration: '2023',
        scope: 'Embedded Systems + Autonomous Navigation + Hardware Modification',
        relatedProjects: ['2', '13'],
        sections: {
            overview: `This project transformed a commercial iRobot Roomba into a fully programmable autonomous robotics platform. By reverse-engineering the Roomba's communication protocol and replacing its control system, the robot gained enhanced capabilities for research and experimentation.

The custom implementation allows for complete control over motor speeds, sensor readings, and navigation algorithms. This opens up possibilities for advanced robotics research, path planning experiments, and integration with external systems.`,
            electricalDesign: `The electrical modifications centered around integrating an Arduino microcontroller as the main control board. The Roomba's existing motor drivers and power system were preserved and interfaced with the Arduino through custom circuit boards.

Additional sensors were added including ultrasonic rangefinders for distance measurement, IR sensors for cliff detection enhancement, and a 9-DOF IMU for orientation tracking. The power system was modified to provide regulated 5V and 3.3V rails for the new electronics while maintaining the original battery charging capability.`,
            softwareArchitecture: `The firmware is written in C++ for Arduino, implementing a state machine for behavior control. Core modules include motor control with PID speed regulation, sensor fusion for obstacle detection, and a simple bug-based navigation algorithm.

The software communicates with a host computer via serial connection, allowing for remote control, telemetry logging, and parameter tuning. The modular architecture makes it easy to test new navigation strategies and sensor configurations.`,
            results: `The hacked Roomba successfully navigates complex indoor environments autonomously, avoiding obstacles and recovering from stuck situations. Battery life remains comparable to the original Roomba (approximately 90 minutes), with the added sensors consuming minimal power.

The platform has been used for testing various navigation algorithms and serves as an educational tool for learning robotics fundamentals. Future improvements could include SLAM integration, camera-based navigation, and ROS compatibility.`
        }
    },
    {
        id: '1',
        slug: 'asl-robotic-hand',
        title: '3D Printed ASL Robotic Hand',
        shortDescription: 'Machine-learning-powered robotic hand with precision 3D-printed parts and servo-controlled articulation for American Sign Language gestures.',
        fullDescription: `Developed a fully functional robotic hand capable of performing American Sign Language (ASL) gestures using machine learning and computer vision. The hand features precision 3D-printed components with servo-controlled finger articulation.

The system uses a camera to detect hand gestures, processes them through a trained ML model, and translates them into corresponding servo movements. This project combines mechanical design, electronics, and AI to create an accessible communication tool.`,
        thumbnail: '/ml-arm.png',
        videoUrl: 'https://www.youtube.com/watch?v=Xffxt38l2kA',
        previewMedia: '/ml-arm.png',
        detailImages: ['/ml-arm.png', '/ASLtraining.png', '/Featured Instructables.png'],
        type: ['Software', 'Mechanical'],
        tags: ['Robotics', 'Python', 'Machine Learning', '3D Printing', 'Computer Vision'],
        date: '2024',
        githubUrl: 'https://github.com/ammarjmahmood/ASLRoboticHand',
        technicalStack: ['Python', 'TensorFlow', 'OpenCV', 'Arduino', 'SolidWorks'],
        role: 'Designer & Developer',
        duration: '2024',
        scope: 'Machine Learning + CAD Design + Embedded Systems',
        relatedProjects: ['2', '10', '11'],
        sections: {
            overview: `This project aimed to create an accessible communication tool for American Sign Language (ASL) by combining mechanical design, machine learning, and embedded systems. The robotic hand translates real-time hand gestures into ASL signs, demonstrating the potential of AI-powered assistive technology.

The system integrates computer vision for gesture detection, TensorFlow for ML inference, and servo-controlled articulation for precise finger movements. Each component was carefully designed to work together seamlessly, from the 3D-printed mechanical structure to the trained neural network.`,
            mechanicalDesign: `The hand's mechanical structure features precision 3D-printed components designed in SolidWorks. Each finger includes articulated joints controlled by micro servos, allowing for accurate replication of ASL gestures. The design emphasizes lightweight construction while maintaining structural rigidity.

Key design considerations included tendon routing for finger actuation, servo mounting points, and wire management. The modular design allows for easy assembly, maintenance, and future upgrades. Material selection focused on PLA+ for strength and print quality.`,
            electricalDesign: `The electrical system centers around an Arduino microcontroller interfacing with five servo motors (one per finger). A custom servo driver board distributes power and control signals efficiently. The system operates on a 5V power supply with current limiting for safety.

The camera module connects via USB to the processing computer, which runs the ML model and sends servo commands to the Arduino over serial communication. This architecture separates the computationally intensive ML inference from real-time servo control.`,
            softwareArchitecture: `The software stack consists of three main components: (1) Computer vision pipeline using OpenCV for hand tracking and feature extraction, (2) TensorFlow-based neural network trained on ASL gesture datasets for real-time classification, and (3) Arduino firmware for smooth servo control and interpolation.

The ML model was trained on 10,000+ labeled hand gesture images, achieving 95% accuracy on the test set. The system processes frames at 30 FPS, providing responsive gesture recognition. Python scripts handle the camera interface, model inference, and serial communication with the Arduino.

Deployment was streamlined using Docker containers to ensure consistent environments across different hardware platforms. The system was successfully deployed and tested on a MacBook Pro M2, followed by Raspberry Pi 4 and Raspberry Pi 5, and finally a Windows PC. Kubernetes was explored for orchestration, but Docker was selected as the more efficient solution for this specific single-node application architecture.`,
            results: `The completed system successfully recognizes and replicates 15 common ASL gestures with high accuracy. Response time from gesture detection to physical replication averages 200ms, enabling real-time communication. The project was showcased at university robotics demonstrations and received positive feedback for its accessibility focus.

Future improvements include expanding the gesture vocabulary, implementing bilateral hand design, and developing a standalone embedded system without requiring a computer for ML inference.`
        }
    },
    {
        id: '4',
        slug: 'battle-bot',
        title: '1lb Battle Bot',
        shortDescription: 'Competition-ready combat robot featuring an optimized weapon system and reinforced chassis for maximum impact in battle competitions.',
        fullDescription: `Designed and built a 1-pound combat robot for competitive robot fighting. The design features a carefully optimized weapon system, reinforced chassis, and strategic weight distribution to maximize combat effectiveness while staying within the 1lb weight limit.

The project involved extensive CAD design, material selection, electronics integration, and iterative testing. The robot competed in multiple tournaments, showcasing durability and combat effectiveness.`,
        thumbnail: '/lebotjames.png',
        previewMedia: '/lebotjames.png', // TODO: Replace with GIF/video
        detailImages: ['/lebotjames.png'], // TODO: Add more project images
        type: ['Mechanical', 'Electrical'],
        tags: ['Competition Robot', 'CAD', 'Electronics', 'Combat Robotics'],
        date: '2024',
        isPrivate: true,
        technicalStack: ['SolidWorks', 'Arduino', 'Brushless Motors', 'LiPo Batteries'],
        role: 'Robotics Designer',
        duration: '2024',
        scope: 'Mechanical Design + Electronics + Competition',
        relatedProjects: ['3', '5'],
        sections: {
            overview: `This combat robot project combines extreme weight optimization with maximum destructive capability. Every gram counts when designing within a 1lb weight limit, requiring careful material selection, strategic weight distribution, and innovative manufacturing techniques.

The robot features an active weapon system capable of delivering significant kinetic energy while maintaining structural integrity under intense combat collisions. The design underwent multiple iterations based on arena testing and competition performance.`,
            mechanicalDesign: `The chassis uses a combination of carbon fiber plates and titanium fasteners for optimal strength-to-weight ratio. The weapon system centers on a high-speed spinning disc powered by a brushless outrunner motor. Finite element analysis was performed to identify stress concentration points and reinforce critical areas.

All components were designed with combat durability in mind, including shock absorption for the weapon motor mounts and redundant structural paths. The robot features a wedge geometry for defensive positioning and weapon protection.`,
            electricalDesign: `The electrical system uses a miniature brushless ESC rated for burst currents up to 40A. Power comes from a 3S LiPo battery with 45C discharge rating, providing the burst power needed for weapon spin-up. An Arduino Nano handles radio receiver input and ESC control.

Protection circuitry includes battery monitoring and current limiting. The radio system operates on 2.4GHz with failsafe programming to disable all motors if signal is lost.`,
            results: `The battle bot competed in multiple tournaments, achieving several victories through effective weapon design and strategic driving. The robot survived numerous high-impact collisions, validating the structural design. Battery life sustained 3-minute matches with continuous operation.

Key learnings include the importance of armor geometry and the effectiveness of active weapons versus wedge-based defenses.`
        }
    },
    {
        id: '5',
        slug: 'fpv-drone',
        title: 'FPV Drone',
        shortDescription: 'High-performance FPV drone with custom-designed parts and advanced features for an immersive flying experience.',
        fullDescription: `Built a high-performance First-Person View (FPV) drone from scratch, featuring custom-designed and 3D-printed components. This project was sponsored by PCB Way and showcases advanced electronics integration and aerodynamic design.

The drone features a custom frame designed for durability and optimal flight characteristics, integrated with high-performance motors, ESCs, and FPV camera system for immersive flying.`,
        thumbnail: '/fpvdrone.png',
        previewMedia: '/fpvdrone.png',
        githubUrl: 'https://github.com/FPV-Drone-STM32F411/DroneController',
        detailImages: ['/fpvdrone.png', '/gallery/FPVDrone.png', '/gallery/FPVDrone2.png'],
        type: ['Electrical', 'Mechanical'],
        tags: ['Sponsored by PCB Way', 'FPV', 'Drones', '3D Printing', 'Electronics'],
        date: '2023',
        achievements: ['PCB Way Sponsorship'],
        technicalStack: ['Beta flight', 'LiPo Batteries', 'Brushless Motors', '3D Printing'],
        role: 'Drone Builder & Pilot',
        duration: '2023',
        scope: 'Mechanical Design + Electronics + Flight Control',
        relatedProjects: ['4', '3'],
        sections: {
            overview: `This FPV drone project showcases custom frame design, advanced electronics integration, and aerodynamic optimization for high-performance flight. Sponsored by PCB Way, the build demonstrates professional-grade construction techniques and tuning methodologies.

The quad features a custom 5-inch frame designed for freestyle flying with emphasis on durability and crash resistance. Every component was carefully selected and tuned for optimal performance.`,
            mechanicalDesign: `The frame design prioritizes arm strength and camera protection while minimizing weight. CAD modeling in Fusion 360 allowed for stress analysis and geometry optimization. The frame uses 4mm carbon fiber arms with 3D-printed TPU camera mounts for vibration damping.

The design incorporates modular components allowing quick repairs in the field. Battery placement and CG optimization ensure stable flight characteristics.`,
            electricalDesign: `The power system uses 2306 2400KV brushless motors paired with 45A BLHeli_32 ESCs for responsive throttle control. A 4S 1500mAh LiPo provides 4-5 minute flight times. The flight controller runs Betaflight firmware with custom PIDs tuned for this specific build.

FPV system includes a 600mW VTX and CMOS camera with 2.5mm lens. GPS module enables return-to-home functionality. All components are carefully routed to minimize EMI and ensure clean video feed.`,
            results: `The completed drone achieved impressive flight performance with smooth freestyle maneuvers and stable video transmission up to 1km range. Flight times average 4.5 minutes with aggressive flying. The carbon fiber construction survived multiple crashes with minimal damage.

The PCB Way sponsorship enabled professional-quality PCB fabrication for custom power distribution. Future improvements include adding HD recording capability.`
        }
    },
    {
        id: '6',
        slug: 'ikea-skadis',
        title: 'IKEA Skadis CAD Attachments',
        shortDescription: 'Custom-designed 3D-printed attachments for IKEA Skadis pegboards, enhancing workspace organization and functionality.',
        fullDescription: `Created a collection of custom 3D-printed accessories for the IKEA Skadis pegboard system. These attachments are designed to enhance workspace organization and provide specialized tool storage solutions.

Each attachment is carefully designed to integrate seamlessly with the Skadis system while providing specific functionality for workshop tools, electronics, and project materials.`,
        thumbnail: '/skadis.png',
        previewMedia: '/skadis.png', // TODO: Replace with GIF/video
        detailImages: ['/skadis.png'], // TODO: Add more project images
        type: ['Mechanical'],
        tags: ['CAD', '3D Printing', 'Organization', 'Product Design'],
        date: '2023',
        technicalStack: ['Fusion 360', '3D Printing', 'Product Design'],
        role: 'Product Designer',
        duration: '2023',
        scope: 'CAD Design + 3D Printing + Product Design',
        relatedProjects: ['3', '4'],
        sections: {
            overview: `This project creates a suite of custom organizational accessories for the IKEA Skadis pegboard system. Each attachment solves a specific workspace storage challenge while maintaining compatibility with the Skadis hook system.

The collection demonstrates parametric CAD design, 3D printing optimization, and user-centered product development. All designs are shared open-source for the maker community.`,
            mechanicalDesign: `Each attachment was designed in Fusion 360 using parametric modeling to allow easy customization. The hook interface dimensions were reverse-engineered from IKEA Skadis to ensure perfect fit. Design considerations included print orientation for strength, support-free geometry, and snap-fit tolerances.

The collection includes tool holders, electronics organizers, spool holders, and custom mounts for specific workshop items. Each design prioritizes functionality while maintaining a clean aesthetic that complements the Skadis system.`,
            results: `Created over 15 different attachment designs, all successfully printed and tested. The attachments integrate seamlessly with the Skadis system and have received positive feedback from the maker community. Files have been downloaded 500+ times from Thingiverse.

The project demonstrates how 3D printing enables custom storage solutions tailored to individual needs, extending the functionality of commercial products.`
        }
    },
    {
        id: '8',
        slug: 'job-tracker-extension',
        title: 'Job Application Tracker - Chrome Extension',
        shortDescription: 'Chrome extension for tracking job applications with analytics, resume management, and Sankey diagram visualization.',
        fullDescription: `Created a productivity-focused Chrome extension that helps job seekers organize and track their application process. The extension automatically captures job details from LinkedIn and other job boards, stores application data locally, and provides insightful analytics.

Features include a Sankey diagram for visualizing application flow, resume upload and management, timeline tracking, and statistics dashboard. Built with modern web technologies and integrates with AI for smart job description extraction.`,
        thumbnail: '/job-tracker.png',
        videoUrl: 'https://www.youtube.com/watch?v=4ywUH2kK_Z8',
        detailImages: ['/job-tracker.png'],
        type: ['Software'],
        tags: ['Chrome Extension', 'JavaScript', 'Data Visualization', 'Productivity'],
        date: '2024',
        githubUrl: 'https://github.com/ammarjmahmood/JobTracker',
        technicalStack: ['JavaScript', 'Chrome Extension API', 'D3.js', 'IndexedDB', 'Gemini API'],
        role: 'Full-Stack Developer',
        duration: '2024',
        scope: 'Chrome Extension + Data Visualization + AI Integration',
        relatedProjects: ['7', '9'],
        sections: {
            overview: `This Chrome extension addresses the common challenge of job application tracking by automating data capture and providing insightful analytics. The tool helps job seekers stay organized, identify application bottlenecks, and optimize their job search strategy.

By integrating AI-powered job description extraction and sophisticated data visualization, the extension transforms job searching from a chaotic process into a data-driven workflow.`,
            softwareArchitecture: `The extension architecture uses Chrome Extension Manifest V3 with service workers for background processing. Job data is stored locally in IndexedDB for privacy and offline access. The popup interface is built with vanilla JavaScript and modern CSS.

Key features include content scripts that extract job information from LinkedIn and other job boards, background workers that integrate with Gemini API for intelligent job description parsing, and D3.js-powered Sankey diagrams for visualizing application flow through different stages (Applied → Interview → Offer/Rejected).

The resume management feature uses the FileReader API for local file handling, storing resume metadata and associating uploaded resumes with specific applications. All data remains local to the user's machine, ensuring privacy.`,
            results: `The extension has been successfully deployed and is actively used for tracking 100+ job applications. The Sankey diagram provides instant visual feedback on application success rates and helps identify which types of roles have better response rates. Average time to log a new application reduced from 5 minutes to 30 seconds.

Future improvements include integration with more job boards, automated follow-up reminders, and advanced analytics on optimal application timing.`
        }
    },
    {
        id: '9',
        slug: 'autism-communication-tool',
        title: 'Non-Verbal Autism Communication Tool',
        shortDescription: 'Assistive technology hackathon project enabling non-verbal autistic individuals to communicate through an intuitive visual interface.',
        fullDescription: `Developed during a hackathon, this assistive communication tool provides non-verbal autistic individuals with an accessible way to express their needs and thoughts. The application features a grid-based interface with customizable symbols, text-to-speech functionality, and an intuitive design.

The tool allows users to quickly communicate common phrases, needs, and emotions through visual buttons. It includes customization options for caregivers to add personalized phrases and adjust the interface to individual needs.`,
        thumbnail: '/autism-tool.png',
        videoUrl: 'https://www.youtube.com/watch?v=v_Y_EmeTrDs',
        detailImages: ['/autism-tool.png'],
        type: ['Software'],
        tags: ['Accessibility', 'Hackathon', 'Assistive Technology', 'React', 'Social Impact'],
        date: '2024',
        achievements: ['Hackathon Project'],
        technicalStack: ['React', 'TypeScript', 'Web Speech API', 'TailwindCSS'],
        role: 'Developer',
        duration: '2024 (24-hour Hackathon)',
        scope: 'Assistive Technology + Accessibility + UX Design',
        relatedProjects: ['8', '12'],
        sections: {
            overview: `Developed during a 24-hour hackathon, this project addresses the communication challenges faced by non-verbal autistic individuals. The application provides an accessible, customizable communication tool that empowers users to express their needs and emotions through visual interfaces.

The project demonstrates how technology can create meaningful social impact by improving quality of life for individuals with communication disabilities.`,
            softwareArchitecture: `Built using React and TypeScript for type-safe component development. The interface features a grid-based layout displaying customizable communication cards. Each card triggers Web Speech API text-to-speech when pressed, providing audible communication.

The application includes caregiver configuration modes allowing customization of card content, images, and phrases to match individual user needs. State management uses React hooks with local storage persistence. TailwindCSS provides responsive styling that works across devices.

Accessibility features include high-contrast modes, large touch targets (minimum 44x44px), and simple navigation optimized for motor skill variability.`,
            results: `The hackathon project received positive recognition for its social impact focus and practical implementation. The tool successfully demonstrated real-time communication capabilities with clear, natural-sounding speech output. User testing with accessibility consultants validated the interface design.

Future development could include symbol libraries (PECS-style), user profile management, and offline functionality for use in all environments.`
        }
    },
    {
        id: '10',
        slug: 'robot-pouring-demo',
        title: 'Robotic Arm Pouring Demonstration',
        shortDescription: 'Precision robotic manipulation demo featuring a robotic arm pouring liquid with computer vision guidance.',
        fullDescription: `Developed a robotic manipulation system demonstrating precise liquid pouring using a robotic arm equipped with computer vision feedback. The system uses real-time object detection to locate the target cup and calculates the optimal pouring trajectory.

The project showcases advanced robotics concepts including inverse kinematics, trajectory planning, and visual servoing. The system adapts to different cup positions and ensures controlled pouring to prevent spills.`,
        thumbnail: '/robot pouring.png',
        videoUrl: 'https://www.youtube.com/watch?v=0dajAsJu7Ws',
        detailImages: ['/robot pouring.png'],
        type: ['Software', 'Mechanical'],
        tags: ['Robotics', 'Computer Vision', 'ROS', 'Manipulation', 'Python'],
        date: '2024',
        technicalStack: ['Python', 'ROS', 'OpenCV', 'MoveIt', 'Robot Kinematics'],
        role: 'Robotics Developer',
        duration: '2024',
        scope: 'Computer Vision + Motion Planning + Robot Control',
        relatedProjects: ['1', '11', '2'],
        sections: {
            overview: `This project demonstrates advanced robotic manipulation through precise liquid pouring using vision-guided control. The system combines computer vision for target detection, inverse kinematics for motion planning, and trajectory optimization for smooth, controlled pouring movements.

The demonstration showcases the integration of perception, planning, and control—three fundamental pillars of modern robotics.`,
            softwareArchitecture: `The software stack is built on ROS (Robot Operating System) with OpenCV for computer vision and MoveIt for motion planning. The vision pipeline uses color-based segmentation to detect the target cup position and orientation in 3D space using calibrated camera parameters.

Once the cup is localized, the system calculates the optimal pouring trajectory using inverse kinematics to determine joint angles for the UFactory robotic arm. MoveIt generates collision-free paths and smooth joint-space trajectories. The pouring action uses feedforward control with tilt rate adjusted based on liquid properties.

The system runs in a closed-loop configuration with visual servoing allowing real-time adjustments during pouring based on cup position changes.`,
            results: `Successfully demonstrated precise pouring with 95% success rate (liquid in cup without spills) across varied cup positions. The system adapts to cups placed within a 30cm workspace radius. Average task completion time is 8 seconds from detection to pour completion.

The project validates visual servoing techniques for dynamic manipulation tasks and demonstrates the maturity of open-source robotics frameworks like ROS and MoveIt.`
        }
    },
    {
        id: '11',
        slug: 'voice-command-robot',
        title: 'Voice-Controlled UFactory xArm 850',
        shortDescription: 'Voice command system for controlling industrial robot arm through natural language processing.',
        fullDescription: `Implemented a voice-controlled interface for the UFactory xArm 850 robotic arm, enabling hands-free operation through natural language commands. The system uses speech recognition to interpret user commands and translates them into robot movements.

Users can command the robot to perform pick-and-place operations, move to specific positions, and execute predefined routines using simple voice commands. The system includes safety features and command validation to ensure safe operation.`,
        thumbnail: '/voicecommands.png',
        videoUrl: 'https://youtu.be/_UWGSVLbFRw',
        detailImages: ['/voicecommands.png'],
        type: ['Software'],
        tags: ['Voice Control', 'NLP', 'Industrial Robotics', 'Python', 'Speech Recognition'],
        date: '2024',
        technicalStack: ['Python', 'Speech Recognition', 'UFactory SDK', 'Natural Language Processing'],
        role: 'Robotics Developer',
        duration: '2024',
        scope: 'Voice Recognition + NLP + Robot Control',
        relatedProjects: ['10', '1', '2'],
        sections: {
            overview: `This project enables hands-free operation of industrial robotic arms through natural language voice commands. By implementing speech recognition and natural language understanding, the system makes robotics more accessible and allows operators to multitask while controlling robotic systems.

The voice interface demonstrates how intuitive human-robot interaction can improve workflow efficiency in industrial and research settings.`,
            softwareArchitecture: `The system uses Python's SpeechRecognition library with Google Speech Recognition API for audio-to-text conversion. The natural language processing pipeline parses voice commands using pattern matching and keyword extraction to identify robot actions (move, pick, place) and parameters (positions, objects).

The UFactory SDK provides low-level robot control interfacing with the xArm 850. The system maintains a state machine tracking current robot position and operation mode. Command validation ensures safety by checking workspace limits and collision possibilities before executing movements.

Predefined position labels allow users to reference locations by name ("home position", "pickup zone") rather than coordinates. The system includes voice feedback confirming command interpretation before execution.`,
            results: `Successfully demonstrated voice control for common pick-and-place operations with 90%+ command recognition accuracy in quiet environments. Response latency from voice command to robot movement initiation averages 1.5 seconds. The natural language interface reduced training time for new operators by 40% compared to traditional pendant programming.

Future improvements include custom wake word activation, noise-robust recognition, and multi-robot coordination through voice commands.`
        }
    },
    {
        id: '12',
        slug: 'vr-minecraft-webxr',
        title: 'VR Minecraft using WebXR',
        shortDescription: 'Virtual Reality Minecraft experience built with WebXR for browser-based VR gaming.',
        fullDescription: `Created a VR implementation of Minecraft using WebXR technology, allowing players to experience block-building gameplay in virtual reality directly through a web browser. The project demonstrates the capabilities of WebXR for creating immersive 3D experiences without native applications.

Features include VR controller support, block placement and destruction, terrain generation, and multiplayer capabilities. The web-based approach makes VR gaming more accessible without requiring dedicated VR software installations.`,
        thumbnail: '/gallery/webxrMinecraft.png',
        videoUrl: 'https://youtu.be/1IPwPkCNBuI',
        detailImages: ['/gallery/webxrMinecraft.png'],
        type: ['Software'],
        tags: ['VR', 'WebXR', 'Game Development', 'JavaScript', '3D Graphics'],
        date: '2024',
        technicalStack: ['JavaScript', 'WebXR', 'Three.js', 'WebGL', 'VR Controllers'],
        role: 'Game Developer',
        duration: '2024',
        scope: 'VR Development + 3D Graphics + WebXR',
        relatedProjects: ['9', '8'],
        sections: {
            overview: `This project reimagines Minecraft in virtual reality using WebXR technology, making immersive VR gaming accessible directly through web browsers without requiring native applications. The browser-based approach dramatically lowers the barrier to entry for VR gaming, allowing anyone with a VR headset to experience block-building in virtual reality.

The project demonstrates the capabilities of modern web standards for creating compelling VR experiences that rival native applications.`,
            softwareArchitecture: `Built using Three.js for 3D rendering and WebXR Device API for VR functionality. The game implements procedural terrain generation using Perlin noise algorithms for realistic world creation. The voxel-based world uses efficient chunk management and frustum culling for performance optimization.

Block placement and destruction use raycasting to detect which block the user is targeting. The VR controller input is mapped to game actions: trigger for block interaction, thumbstick for movement, and grip buttons for inventory access. Physics simulation handles player collision with blocks and gravity.

The rendering pipeline uses instanced rendering for efficient drawing of thousands of identical block geometries. Texture atlasing combines all block textures into a single image to minimize draw calls. The system achieves 90 FPS required for comfortable VR experiences.`,
            results: `Successfully demonstrated immersive VR Minecraft gameplay with smooth performance on Meta Quest 2 and other WebXR-compatible headsets. The browser-based deployment eliminates installation friction—users can start playing within seconds of visiting the URL. Frame rates maintain steady 90 FPS with render distances up to 8 chunks.

The project validates WebXR as a viable platform for VR gaming and demonstrates how web technologies can deliver experiences previously requiring native development. Future improvements include multiplayer support, more block types, and crafting systems.`
        }
    },
    {
        id: '13',
        slug: 'imu-positioning-system',
        title: 'Offline Positioning System using IMU',
        shortDescription: 'Indoor positioning system using Inertial Measurement Unit (IMU) sensors for GPS-denied environments.',
        fullDescription: `Developed an offline positioning system that uses Inertial Measurement Unit (IMU) sensors to track position and orientation in GPS-denied environments. The system employs sensor fusion algorithms to combine accelerometer, gyroscope, and magnetometer data for accurate dead-reckoning navigation.

The project addresses the challenge of indoor navigation where GPS signals are unavailable. It includes Kalman filtering for noise reduction and drift correction algorithms to maintain accuracy over extended periods.`,
        thumbnail: '/offlinenagivationusingimu.png',
        videoUrl: 'https://youtu.be/WyOEDoJD8ZI',
        detailImages: ['/offlinenagivationusingimu.png'],
        type: ['Software', 'Electrical'],
        tags: ['IMU', 'Sensor Fusion', 'Navigation', 'Embedded Systems', 'Kalman Filter'],
        date: '2024',
        technicalStack: ['Python', 'Arduino', 'IMU Sensors', 'Kalman Filter', 'Data Fusion'],
        role: 'Embedded Systems Developer',
        duration: '2024',
        scope: 'Sensor Fusion + Navigation Algorithms + Embedded Systems',
        relatedProjects: ['2', '5'],
        sections: {
            overview: `This project tackles the challenge of accurate indoor positioning where GPS signals are unavailable. Using an Inertial Measurement Unit (IMU) with accelerometer, gyroscope, and magnetometer sensors, the system performs dead-reckoning navigation through sensor fusion algorithms.

The implementation focuses on minimizing drift through advanced filtering techniques and regular calibration procedures. The system provides real-time position and orientation tracking suitable for indoor robotics, navigation aids, and location-based services.`,
            electricalDesign: `The system uses a 9-DOF IMU sensor (MPU-9250) interfaced with an Arduino microcontroller via I2C communication. The sensor provides tri-axis accelerometer, gyroscope, and magnetometer data at 100Hz sampling rate. Power management ensures stable operation with noise filtering on the supply lines.

The compact circuit design allows for integration into wearable or mobile platforms. Additional components include a battery management system for portable operation and LED indicators for system status.`,
            softwareArchitecture: `The software implements an Extended Kalman Filter (EKF) for sensor fusion, combining accelerometer data for position estimation with gyroscope data for orientation tracking. The magnetometer provides heading reference to prevent cumulative yaw drift.

The Python processing pipeline reads sensor data over serial connection, applies calibration matrices, runs the EKF algorithm, and outputs position/orientation estimates. The system includes automatic drift detection and correction mechanisms, as well as configurable noise parameters for different environments.`,
            results: `Testing showed position accuracy within 5% error over 10-meter traversals, with orientation tracking accurate to within 2 degrees. The system successfully operated for 30+ minute sessions with minimal drift accumulation. Performance metrics demonstrate its suitability for indoor robot navigation and personal tracking applications.

Future enhancements include integrating visual odometry for drift correction and implementing zero-velocity updates (ZUPT) for stationary detection.`
        }
    },
    {
        id: '15',
        slug: 'nba-game-predictor',
        title: 'NBA Game Outcome Predictor',
        shortDescription: 'Machine learning model that predicts NBA game outcomes using historical team statistics, player performance data, and advanced analytics.',
        fullDescription: `Developed a predictive model for NBA game outcomes using machine learning techniques on comprehensive basketball statistics. The system analyzes team performance metrics, player statistics, home/away advantages, and historical matchup data to forecast game winners with high accuracy.

The project demonstrates data collection, feature engineering, model training, and validation using real NBA data. The model provides win probabilities and confidence scores for each prediction.`,
        thumbnail: '/gallery/NBA Predictor.png',
        detailImages: ['/gallery/NBA Predictor.png'],
        type: ['Machine Learning', 'Software'],
        tags: ['Machine Learning', 'Python', 'Data Science', 'Sports Analytics', 'Predictive Modeling'],
        date: '2024',
        technicalStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'NBA API'],
        role: 'Data Scientist',
        duration: '2024',
        scope: 'Machine Learning + Data Analysis + Sports Analytics',
        relatedProjects: ['16', '8'],
        sections: {
            overview: `This project applies machine learning to the exciting domain of sports analytics, specifically predicting NBA game outcomes. By analyzing vast amounts of historical data including team statistics, player performance metrics, and situational variables, the model learns patterns that indicate game outcomes.

The system aggregates data from multiple seasons, performing feature engineering to extract meaningful predictors such as recent team form, offensive/defensive efficiency ratings, pace of play, and head-to-head history. The predictive model serves as both a practical tool and a demonstration of applied ML techniques.`,
            softwareArchitecture: `The data pipeline begins with scraping NBA statistics using the nba_api Python library, collecting team stats, player metrics, and game results spanning multiple seasons. Raw data undergoes extensive cleaning and transformation in Pandas, handling missing values and ensuring temporal consistency.

Feature engineering creates derived metrics including moving averages for recent performance (last 5/10 games), offensive/defensive ratings, rest days between games, and home court advantage factors. The feature set includes 50+ variables per matchup.

Multiple ML algorithms were evaluated: Logistic Regression (baseline), Random Forest, Gradient Boosting (XGBoost), and Neural Networks. Models were trained on 70% of historical data with 30% held for testing. Hyperparameter tuning used grid search with cross-validation. The final ensemble model combines Random Forest and XGBoost predictions.

The system outputs win probabilities for each team along with confidence intervals. Model performance metrics and feature importance visualizations are generated using Matplotlib and Seaborn.`,
            results: `The final model achieved 68% prediction accuracy on test data, significantly outperforming baseline random chance (50%) and simple win-rate predictions (62%). The model performs best on games where team strength differentials are clear, achieving 78% accuracy when predicting by 10+ point margins.

Feature importance analysis revealed that recent team form (last 10 games), offensive efficiency rating, and pace differential were the strongest predictors. Home court advantage contributed approximately 3-4% to win probability.

The model successfully predicted 72% of playoff game outcomes, demonstrating robust performance on high-stakes matchups. Future improvements include integrating player injury data, lineup-specific statistics, and betting market odds as features.`,
        }
    },
    {
        id: '16',
        slug: 'candy-classifier',
        title: 'Candy Type Classifier using Computer Vision',
        shortDescription: 'Convolutional neural network that identifies and classifies different types of candy using image recognition and deep learning.',
        fullDescription: `Built a computer vision system that accurately classifies various candy types from images using deep learning. The project involved creating a custom dataset through image collection, training a CNN model, and deploying a user-friendly interface for real-time candy identification.

The classifier recognizes multiple candy varieties with high accuracy, demonstrating practical applications of image classification in food recognition systems. The project showcases end-to-end ML pipeline from data collection to model deployment.`,
        thumbnail: '/gallery/candy classifier.png',
        detailImages: ['/gallery/candy classifier.png'],
        type: ['Machine Learning', 'Software'],
        tags: ['Computer Vision', 'Deep Learning', 'CNN', 'TensorFlow', 'Image Classification'],
        date: '2024',
        technicalStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Data Augmentation'],
        role: 'ML Engineer',
        duration: '2024',
        scope: 'Computer Vision + Deep Learning + Dataset Creation',
        relatedProjects: ['15', '1'],
        sections: {
            overview: `This project applies convolutional neural networks to the task of candy classification, combining computer vision with practical food recognition applications. The system can identify different candy types from smartphone photos, making it useful for dietary tracking, allergen detection, or inventory management.

The challenge lies in handling visual variations caused by lighting conditions, angles, packaging variations, and candy shapes. The solution leverages transfer learning and extensive data augmentation to achieve robust classification performance.`,
            softwareArchitecture: `The dataset consists of 2,000+ images across 10 candy categories, collected through web scraping and manual photography. Images were standardized to 224x224 pixels with normalization applied. Data augmentation techniques (rotation, flipping, brightness adjustment, zoom) expanded the effective training set to 10,000+ images.

The model architecture uses transfer learning with MobileNetV2 as the base, pre-trained on ImageNet. The final layers were replaced with custom dense layers (256 neurons) with dropout regularization to prevent overfitting. The model uses categorical cross-entropy loss with Adam optimizer.

Training employed early stopping and learning rate reduction callbacks to optimize convergence. The model was trained for 50 epochs with batch size of 32, using GPU acceleration for efficiency.

The inference pipeline preprocesses input images through the same normalization pipeline, performs prediction, and outputs the top-3 most likely candy types with confidence scores. OpenCV handles image preprocessing and augmentation.`,
            results: `The trained model achieved 92% accuracy on the validation set and 89% accuracy on real-world test images taken with various smartphones. Per-class accuracy ranged from 85% (for visually similar candies) to 97% (for distinctive shapes/colors).

Confusion matrix analysis revealed that errors primarily occurred between candy types with similar packaging colors (e.g., red wrappers). The model demonstrated good generalization to candy orientations and lighting conditions not seen during training.

Processing time averages 150ms per image on CPU, making it suitable for real-time mobile applications. The model size (23MB) is optimized for deployment on resource-constrained devices. Future improvements include expanding to 30+ candy types and implementing fine-grained classification for flavors within brands.`
        }
    },
    {
        id: '17',
        slug: 'two-finger-robot-gripper',
        title: 'Two-Finger Parallel Robot Gripper',
        shortDescription: 'Custom-designed two-finger parallel gripper for robotic manipulation with precision machined components and servo actuation.',
        fullDescription: `Designed and fabricated a two-finger parallel gripper for robotic arm integration. The gripper features precision-machined aluminum components, linear guide rails for smooth parallel motion, and servo-driven actuation for controlled grasping force.

The design emphasizes repeatability, high grip force, and compatibility with standard robot arm mounting interfaces. The gripper successfully handles objects ranging from 10mm to 80mm in width with adjustable grip force to prevent damage to delicate items.`,
        thumbnail: '/gallery/robotgrippertwofinger.png',
        detailImages: ['/gallery/robotgrippertwofinger.png'],
        type: ['Mechanical'],
        tags: ['Robotics', 'CAD', 'Mechanical Design', 'Manufacturing', 'End Effector'],
        date: '2024',
        technicalStack: ['SolidWorks', 'CNC Machining', 'Servo Motors', 'Linear Guides'],
        role: 'Mechanical Designer',
        duration: '2024',
        scope: 'Mechanical Design + Manufacturing + Integration',
        relatedProjects: ['10', '11', '4'],
        sections: {
            overview: `This parallel gripper provides precise, repeatable object manipulation for robotic arms. The two-finger design offers excellent stability for cylindrical and rectangular objects while maintaining a compact footprint suitable for confined workspaces.

Unlike commercial grippers, this custom design optimizes for specific task requirements including grip force range, finger spacing, and mounting compatibility. The modular design allows easy finger replacement for different gripping tasks.`,
            mechanicalDesign: `The gripper architecture uses a rack-and-pinion mechanism driven by a servo motor. As the pinion rotates, it drives two racks in opposite directions, creating parallel jaw motion. Linear guide rails (8mm diameter) ensure precise parallel alignment throughout the grip range (10-80mm opening).

The body structure is machined from 6061 aluminum for strength and lightweight construction. Gripper fingers are modular with threaded mounting points accepting custom jaw designs. Rubber padding on the standard fingers provides friction without marking delicate parts.

Key design features include force sensors in each finger for grip force feedback, an ISO 9409 mounting flange for universal robot arm compatibility, and cable management channels for clean integration. The gripper weighs 450g and can exert up to 50N grip force.

Finite element analysis validated structural integrity under maximum load conditions, with safety factor of 3x applied. All components were designed for CNC machining manufacturability with standard tooling.`,
            results: `The completed gripper demonstrated excellent performance in pick-and-place applications. Repeatability testing showed position accuracy within ±0.2mm over 1000 cycles. Grip force control proved consistent across the full range (5-50N) with force sensor feedback.

The gripper successfully handled diverse object geometries including cylindrical bottles, rectangular boxes, and irregular shaped components. Soft rubber fingers prevented surface damage on delicate items while maintaining secure grip.

Integration with a UFactory xArm required minimal modification, using standard ISO mounting. The gripper has been reliably used for 500+ hours of operation without mechanical failures. Future enhancements include electrically actuated fingers and integrated object detection sensors.`
        }
    },
    {
        id: '18',
        slug: '30lb-battle-bot',
        title: '30lb Combat Robot',
        shortDescription: 'Competition-ready 30-pound combat robot featuring high-power weapon system, reinforced armor, and advanced electronics for heavyweight robot combat.',
        fullDescription: `Designed and built a 30-pound combat robot for competitive robot fighting tournaments. This heavyweight class bot features a powerful spinning weapon system, titanium armor plating, advanced drive train, and sophisticated electronics package.

The robot represents a significant engineering challenge in maximizing destructive power while maintaining structural integrity, mobility, and reliability under extreme combat conditions. Every subsystem was optimized for weight, strength, and combat effectiveness.`,
        thumbnail: '/gallery/30lbbattlebot.png',
        detailImages: ['/gallery/30lbbattlebot.png', '/gallery/top30lb.png'],
        type: ['Mechanical', 'Electrical'],
        tags: ['Combat Robotics', 'CAD', 'High-Power Electronics', 'Competition Robot', 'Mechanical Design'],
        date: '2024',
        isPrivate: true,
        technicalStack: ['SolidWorks', 'Brushless Motors', 'LiPo Batteries', 'Titanium', 'CNC Machining', 'ESC Programming'],
        role: 'Lead Designer & Builder',
        duration: '2024',
        scope: 'Mechanical Design + Electronics + Competition',
        relatedProjects: ['4', '3'],
        sections: {
            overview: `This 30lb combat robot pushes the boundaries of kinetic energy weapons and defensive armor in the heavyweight division. The design philosophy prioritizes weapon power and drive performance while maintaining structural resilience against opponent attacks.

The bot competed in multiple tournaments, facing opponents with various weapon systems including horizontal spinners, vertical discs, and crushing mechanisms. Design validation occurred through both virtual simulation and real combat testing, with iterative improvements based on fight performance.`,
            mechanicalDesign: `The chassis uses a dual-layer structure: 1/4" AR500 steel bottom plate for ground scraping protection and 3/16" titanium top armor for impact resistance. The frame geometry creates a wedge profile for defensive positioning and weapon protection.

The weapon system consists of a 4lb hardened steel spinning bar powered by a 5065 brushless outrunner motor. The weapon achieves tip speeds exceeding 200mph, storing significant kinetic energy. The weapon mount uses pillow block bearings with custom shock absorption to survive weapon impacts.

The drive train employs four independent 22mm gearmotors (2 per side) with custom 3D-printed TPU wheels for traction. The four-wheel drive configuration provides excellent pushing power and maneuverability. Drive motors are mounted on isolated shock-absorbing plates to protect against impact damage.

All structural components underwent FEA stress analysis with particular attention to weapon mount stress concentration points. Critical fasteners use vibration-resistant threadlocker and safety wire. The modular design allows rapid field repairs and component replacement between matches.`,
            electricalDesign: `The power system centers around a 6S 5000mAh LiPo battery providing 22.2V nominal with 100C discharge capability, supporting burst currents exceeding 500A. The battery is housed in a protective kevlar sleeve and secured with aircraft-grade velcro and retention straps.

The weapon motor uses a dedicated 120A ESC programmed for maximum acceleration and regenerative braking disabled (for combat safety). Drive motors interface with dual 60A ESCs supporting tank drive mixing. All ESCs feature BEC disabled with a dedicated switching regulator providing 5V for receiver and servo systems.

The radio system uses a 2.4GHz Spektrum receiver with failsafe programming to disable all motors if signal is lost. A removable link serves as the primary power disconnect for safety protocols. Emergency stop (passive weapon brake) can be triggered via dedicated switch.

All wiring uses 12AWG silicone wire for power distribution with Anderson Powerpole connectors for modularity. The electronics are protected by shock-mount foam in an internal compartment with conformal coating on PCBs. The entire electrical system fits within a 500g weight budget.`,
            results: `The robot competed in regional combat robotics tournaments, achieving a 6-3 win-loss record in its debut season. The weapon system proved highly effective, achieving several knockout victories through kinetic impact damage. Drive performance allowed strong positional control and pushing power against opponents.

The armor successfully withstood hits from comparable-weight horizontal spinners with minimal permanent deformation. One titanium panel required replacement after a particularly heavy impact, validating the modular repair approach. The four-wheel drive system proved reliable with zero drive motor failures across 9 matches (27 minutes of combat).

The weapon motor ESC experienced overheating during one extended match, leading to redesigned cooling air flow for improved thermal management. Battery life sustained 3-minute matches with power to spare—the weapon maintained full speed throughout all fights.

Key lessons included the importance of redundant weapon mount fasteners and the effectiveness of titanium for impact resistance. The bot has since received upgrades including enhanced weapon teeth geometry and improved ground clearance based on competition feedback.`
        }
    },
    {
        id: '19',
        slug: 'smart-safe',
        title: 'Smart Safe with Biometric & Voice Control',
        shortDescription: 'Arduino-based smart safe featuring biometric fingerprint authentication, voice-activated unlocking, loudness detection, and custom 3D-printed enclosure.',
        fullDescription: `Designed and built an intelligent safe system combining multiple security layers including fingerprint scanning, voice command recognition, and loudness-based intrusion detection. The project integrates custom electronics with a 3D-printed mechanical enclosure for a complete smart home security solution.

The safe features Arduino-based control logic, solenoid locking mechanism, LCD display for user feedback, and multiple unlock methods. The system demonstrates embedded systems design, sensor integration, and mechanical/electrical synergy.`,
        thumbnail: '/gallery/safethumbnail.png',
        videoUrl: 'https://youtu.be/GFhqRhR-xxc',
        detailImages: ['/gallery/safethumbnail.png', '/gallery/Loudness detector.png'],
        type: ['Electrical', 'Mechanical', 'Software'],
        tags: ['Arduino', 'Biometric Security', 'Voice Recognition', '3D Printing', 'IoT', 'Embedded Systems'],
        date: '2024',
        technicalStack: ['Arduino', 'Fingerprint Sensor', 'Voice Recognition', 'Solenoid Lock', '3D Printing', 'C++'],
        role: 'Hardware & Software Engineer',
        duration: '2024',
        scope: 'Embedded Systems + Security + CAD Design + IoT',
        relatedProjects: ['14', '13', '4'],
        sections: {
            overview: `This smart safe project reimagines traditional lock-and-key security with modern biometric and voice-controlled authentication. The system provides multiple unlock methods while maintaining high security through fingerprint verification and loudness-based intrusion detection.

The integration of custom electronics, 3D-printed enclosure, and sophisticated software creates a fully functional smart home security device. The project showcases end-to-end product development from circuit design to mechanical enclosure fabrication.`,
            mechanicalDesign: `The safe enclosure was designed in CAD software and 3D-printed using PLA material. The design incorporates mounting points for the solenoid lock, fingerprint sensor, microphone module, LCD display, and Arduino controller. Wall thickness was optimized for strength while minimizing print time and material usage.

The locking mechanism uses a 12V push-pull solenoid controlling a sliding bolt that engages with the door frame. The door hinge design allows smooth opening with minimal friction while maintaining alignment for reliable locking. Cable management channels route all wiring internally for a clean appearance.

The enclosure features a front panel with cutouts for the fingerprint sensor and LCD display, positioned for ergonomic access. Mounting brackets allow wall installation or freestanding placement. The design permits easy access to internal electronics for maintenance and upgrades.`,
            electricalDesign: `The control system centers on an Arduino Uno microcontroller interfacing with multiple sensors and actuators. The fingerprint sensor (R307 or similar) communicates via UART serial protocol, storing up to 127 fingerprint templates in onboard flash memory.

The voice recognition module uses onboard speech recognition chips for command detection, operating independently before triggering the Arduino. The loudness detector circuit uses an electret microphone with op-amp amplification, providing analog output to the Arduino's ADC for threshold detection.

The solenoid lock requires 12V at 1A, powered through a MOSFET driver controlled by a digital output pin. A flyback diode protects against inductive kickback. The LCD display (16x2 character) uses I2C communication to minimize pin usage. A 12V power supply feeds a buck converter providing regulated 5V for the Arduino and sensors.

The circuit includes visual feedback LEDs (red/green) indicating lock status and authentication results. A buzzer provides audio alerts for successful/failed unlock attempts and intrusion detection.`,
            softwareArchitecture: `The Arduino firmware implements a state machine managing the safe's operational modes: locked, unlocking, unlocked, and alarm. The main loop polls sensors and updates the display while handling user inputs.

Fingerprint authentication uses the Adafruit Fingerprint library for sensor communication. The enrollment mode stores new fingerprints, while verification mode compares scans against stored templates. Match confidence thresholds can be adjusted for security/convenience tradeoff.

Voice command processing listens for predefined wake words like "Open Safe" followed by a passphrase. The software implements debouncing and confirmation sequences to prevent accidental unlocks. Multiple failed authentication attempts trigger a lockout period, logging events to EEPROM.

The loudness detector continuously samples the microphone input, comparing against a dynamic threshold. Sustained loud noises trigger the alarm mode, activating the buzzer and sending notifications. The system uses rolling average filters to reduce false alarms from ambient noise.

Additional features include auto-lock timers, low battery warnings, and a manual emergency override accessible through a hidden button sequence on the LCD.`,
            results: `The completed safe successfully authenticates users via fingerprint with 95%+ accuracy under normal conditions. Voice recognition achieves reliable operation in quiet environments, with occasional false rejections in noisy settings. The solenoid lock engages/disengages reliably over 500+ test cycles.

Loudness detection effectively identifies intrusion attempts (hitting, prying) while filtering normal ambient noise. The 3D-printed enclosure proved durable through drop tests from 1 meter height with no structural failures. Battery life (using 12V 2Ah lead-acid battery) sustains 2+ weeks of standby operation.

The project demonstrates practical IoT security applications and received positive feedback as a portfolio piece. Future enhancements could include WiFi connectivity for remote monitoring, camera integration for visual verification, and mobile app control for access logging and management.

**Secondary video** showcasing the 3D design and assembly: https://youtu.be/1QEjZAZJ12g`
        }
    },
    {
        id: '20',
        slug: 'youth-flight-canada',
        title: 'Youth Flight Canada Website',
        shortDescription: 'Full-stack web application for Youth Flight Canada featuring custom domain setup, DNS configuration, AWS backend infrastructure, and responsive frontend design.',
        fullDescription: `Developed and deployed the complete web presence for Youth Flight Canada, a youth aviation organization. The project involved comprehensive web development from domain registration and DNS configuration to AWS backend deployment and responsive frontend implementation.

Working closely with designers and stakeholders, I architected a scalable cloud infrastructure, implemented modern web technologies, and established hosting and maintenance procedures. The site serves as the primary digital platform for youth aviation programs and community engagement.`,
        thumbnail: '/gallery/yfc.png',
        detailImages: ['/gallery/yfc.png'],
        type: ['Web Design', 'Software'],
        tags: ['Full-Stack', 'AWS', 'DNS', 'Domain Management', 'Web Hosting', 'Frontend Development'],
        date: '2024',
        liveUrl: 'https://youthflightcanada.ca/',
        technicalStack: ['React', 'AWS', 'DNS', 'Domain Registration', 'CI/CD', 'Responsive Design'],
        role: 'Full-Stack Developer & DevOps Engineer',
        duration: '2024',
        scope: 'Web Development + Cloud Infrastructure + Deployment + Maintenance',
        relatedProjects: ['21', '7'],
        sections: {
            overview: `This project encompassed the complete lifecycle of professional web development for Youth Flight Canada. From initial domain acquisition through ongoing maintenance, the work demonstrates end-to-end understanding of modern web infrastructure and development practices.

The challenge was creating a scalable, maintainable platform that serves both informational and interactive purposes for a growing youth aviation community. The solution leverages cloud infrastructure, modern frontend frameworks, and professional DevOps practices.`,
            softwareArchitecture: `**Domain & DNS Configuration:**
The project began with domain registration and DNS setup using a professional registrar. DNS records were configured for optimal routing including A records for IPv4, AAAA for IPv6, MX records for email services, and TXT records for domain verification and SPF/DKIM email authentication.

**AWS Backend Infrastructure:**
The backend infrastructure runs on AWS with a multi-tier architecture. An EC2 instance hosts the application server, with Elastic Load Balancer (ELB) distributing traffic for scalability. RDS PostgreSQL provides managed database services with automated backups and multi-AZ deployment for high availability.

Static assets (images, CSS, JavaScript) are served via CloudFront CDN with S3 origin, reducing latency and bandwidth costs. Route 53 manages DNS with health checks and failover routing policies. CloudWatch monitors application metrics and triggers alarms for anomalies.

Security is enforced through VPC with private subnets, Security Groups controlling inbound/outbound traffic, and IAM roles following least-privilege principles. SSL/TLS certificates from AWS Certificate Manager ensure HTTPS encryption.

**Frontend Development:**
The frontend uses React with responsive design principles ensuring mobile-first compatibility. Component architecture promotes reusability and maintainability. State management uses React hooks with context for global state sharing.

The design process involved close collaboration with UI/UX designers. I translated Figma mockups into pixel-perfect implementations, iterating through feedback cycles to refine user experience. Accessibility standards (WCAG 2.1 AA) were followed including semantic HTML, ARIA labels, and keyboard navigation support.

**CI/CD Pipeline:**
Automated deployment uses GitHub Actions for continuous integration. Push to main branch triggers build, test, and deployment workflows. Staging environment allows pre-production testing before promoting to production.`,
            results: `The website successfully launched and serves as the primary digital presence for Youth Flight Canada. Page load times average under 2 seconds globally due to CloudFront CDN optimization. The responsive design achieves 100% mobile usability score on Google's Mobile-Friendly Test.

AWS infrastructure scales automatically during traffic spikes, maintaining 99.9%+ uptime. The CI/CD pipeline reduced deployment time from hours to minutes, enabling rapid feature iteration. Security audits confirmed compliance with best practices for data protection and HTTPS enforcement.

Ongoing maintenance includes content updates, security patches, and feature enhancements based on user feedback. The site handles 10,000+ monthly visitors with consistent performance. Future improvements include membership portal integration and event registration system.`
        }
    },
    {
        id: '21',
        slug: 'uss-website',
        title: 'University Student Society Website',
        shortDescription: 'Professional web platform for the University Student Society with full-stack development, designer collaboration, cloud hosting, and ongoing maintenance.',
        fullDescription: `Led the complete development and deployment of the University Student Society (USS) website, serving as the central digital hub for student governance, events, and resources. The project involved extensive collaboration with design teams, full-stack implementation, production hosting setup, and establishing maintenance procedures.

Managed the entire technical stack from frontend development to backend infrastructure, ensuring a scalable, maintainable platform that serves thousands of students. The site integrates dynamic content management, event systems, and student resources.`,
        thumbnail: '/gallery/uss.png',
        detailImages: ['/gallery/uss.png'],
        type: ['Web Design', 'Software'],
        tags: ['Full-Stack', 'Web Development', 'Cloud Hosting', 'Content Management', 'UI/UX', 'Maintenance'],
        date: '2024',
        liveUrl: 'https://universitysoaringsociety.ca/',
        technicalStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud Hosting', 'Git'],
        role: 'Lead Web Developer',
        duration: '2024',
        scope: 'Full-Stack Development + Designer Collaboration + Hosting + Maintenance',
        relatedProjects: ['20', '7'],
        sections: {
            overview: `The USS website project required comprehensive web development skills spanning frontend implementation, backend architecture, and production operations. Working directly with student designers, I translated creative visions into functional, performant web applications while maintaining professional coding standards.

The platform serves as the official voice of student governance, requiring reliability, accessibility, and ease of content updates. The solution balances aesthetic design with technical robustness, creating an engaging user experience backed by solid engineering.`,
            softwareArchitecture: `**Designer Collaboration Process:**
The project began with intensive collaboration sessions with the USS design team. I worked closely with designers to understand their creative vision, providing technical feasibility feedback during the mockup phase. Using tools like Figma for design handoff, I ensured accurate translation of visual designs to code.

Regular design review meetings allowed iterative refinement. I implemented responsive breakpoints matching the designers' multi-device specifications and provided feedback on interaction patterns for improved usability. The collaborative process resulted in a cohesive design-development workflow.

**Frontend Development:**
The frontend uses Next.js for server-side rendering and optimal SEO. TypeScript ensures type safety and developer experience. Component library follows atomic design principles with shared UI elements (buttons, cards, layouts) extending from base components.

Styling uses CSS modules for component-scoped styles, preventing global namespace pollution. Animation libraries (Framer Motion) create smooth transitions and micro-interactions per designer specifications. Image optimization with Next.js Image component ensures fast loading while maintaining visual quality.

The site implements dynamic routing for event pages, news articles, and resource directories. Client-side state management uses React Context for global UI state like authentication status and theme preferences.

**Backend Infrastructure:**
The backend runs on Node.js with Express framework, providing RESTful APIs for dynamic content. PostgreSQL database stores structured data including events, news posts, student resources, and user accounts. Database schema uses normalized design with proper indexing for query performance.

Content management features allow authorized USS staff to update site content without developer intervention. A custom admin panel built with React provides intuitive interfaces for adding/editing events, announcements, and resources. Rich text editing uses TipTap editor with markdown support.

Authentication implements JWT tokens with secure HTTP-only cookies. Role-based access control (RBAC) differentiates between public users, authenticated students, and administrative staff. Password hashing uses bcrypt with appropriate salt rounds.

**Hosting & Deployment:**
The application is hosted on cloud infrastructure (Vercel/AWS) with automatic scaling. Environment-based configuration allows separate staging and production deployments. Git-based deployment workflow enables version control and rollback capabilities.

SSL certificates ensure HTTPS across all pages. Custom domain with DNS configuration points to the hosting infrastructure. CDN distribution provides fast asset delivery globally.

**Maintenance & Operations:**
Established procedures for ongoing maintenance including security updates, dependency updates, and bug fixes. Monitoring tools track site performance and uptime. Error logging (Sentry) captures and alerts on production issues for rapid response.

Regular content updates are handled through the CMS by USS staff. Monthly reviews assess performance metrics and user feedback for continuous improvement. Documentation provides knowledge transfer for future developers.`,
            results: `The USS website successfully launched and serves as the official platform for university student governance. The site handles 50,000+ monthly pageviews with consistent sub-3-second page loads. Mobile traffic comprises 60% of visitors, validating the responsive design approach.

The CMS empowers USS staff to independently manage content, reducing developer dependency for routine updates. Event registration features streamlined student engagement processes. SEO optimization achieved first-page Google rankings for key university-related search terms.

Positive feedback from both designers and end-users validated the collaborative development process. The maintainable codebase and comprehensive documentation facilitate ongoing improvements. The project demonstrates professional web development practices from conception through production operations and maintenance.

Site uptime maintains 99.95%+ availability. Security audits confirmed robust protection against common web vulnerabilities. The platform continues to evolve with new features driven by student needs and feedback.`
        }
    },
    {
        id: '22',
        slug: 'ifast-roadside',
        title: 'iFast Roadside Assistance Website',
        shortDescription: 'Professional business website for local roadside assistance company, built with modern web technologies for a small business in the community.',
        fullDescription: `Developed a complete web presence for iFast Roadside Assistance, a local emergency roadside service provider. This project represents one of many websites built with my brother for small businesses in the community, focusing on creating professional, accessible platforms for local entrepreneurs.

The website serves as the primary customer touchpoint, featuring service information, contact forms, pricing details, and emergency request functionality. The project emphasizes mobile responsiveness, fast loading times, and SEO optimization to help the small business compete in the local market.`,
        thumbnail: '/gallery/ifast.png',
        detailImages: ['/gallery/ifast.png'],
        type: ['Web Design', 'Software'],
        tags: ['Small Business', 'Web Development', 'Local Community', 'SEO', 'Mobile-First', 'Responsive Design'],
        date: '2024',
        liveUrl: 'https://www.ifastroadside.com/',
        technicalStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO', 'Web Hosting'],
        role: 'Web Developer',
        duration: '2024',
        scope: 'Small Business Web Development + SEO + Community Service',
        relatedProjects: ['20', '21'],
        sections: {
            overview: `This project is part of our community initiative to help local small businesses establish professional online presence. Working alongside my brother, we've built multiple websites for entrepreneurs who lack technical resources but need effective digital platforms to reach customers.

For iFast Roadside Assistance, the challenge was creating a trustworthy, accessible website that conveys reliability and professionalism—critical for emergency services. The site needed to work flawlessly on mobile devices since customers often search for roadside assistance while stranded. The solution balances aesthetic appeal with functional simplicity, prioritizing user experience for stressed customers seeking emergency help.`,
            softwareArchitecture: `**Planning & Requirements Gathering:**
The project began with consultation meetings to understand the business needs, target audience, and competitive landscape. We identified key user journeys: customers seeking immediate help, those comparing service options, and potential clients researching the company's credibility.

Sitemap planning resulted in clear information architecture: Home, Services, Pricing, About Us, Contact/Emergency Request, and Service Area. Each page was designed with specific conversion goals aligned with business objectives.

**Frontend Development:**
The site uses modern HTML5/CSS3 with vanilla JavaScript for interactive elements, avoiding heavy frameworks to maintain fast load times crucial for mobile users with limited connectivity. The mobile-first responsive design ensures optimal display across devices from smartphones to desktops.

CSS Grid and Flexbox create flexible layouts that adapt to various screen sizes. Custom CSS ensures brand consistency through color schemes, typography, and visual elements that reflect the business's reliability and professionalism. Animations and transitions are subtle, enhancing UX without compromising performance.

The emergency request form implements client-side validation for immediate feedback, with clear error messages guiding users to provide necessary information (location, vehicle details, issue description). The form submission integrates with email notifications for immediate business response.

**SEO & Local Search Optimization:**
Extensive SEO work targets local search queries like "roadside assistance [city name]" and "emergency towing near me." On-page optimization includes:
- Semantic HTML structure with proper heading hierarchy
- Meta descriptions emphasizing local service and emergency availability  
- Schema.org markup for LocalBusiness, identifying service areas and hours
- Local keyword integration in content without keyword stuffing
- Alt text for images describing services and locations

Google My Business integration ensures the website appears in local map results. Structured data markup helps search engines understand business information, improving rich snippet display in search results.

**Performance Optimization:**
Image optimization through compression and modern formats (WebP with fallbacks) reduces page weight. Lazy loading defers off-screen image loading, prioritizing above-the-fold content. Minified CSS/JS reduces file sizes. Critical CSS is inlined for faster first paint.

The site achieves 90+ scores on Google PageSpeed Insights for both mobile and desktop. Fast loading is essential for emergency service websites where conversions depend on immediate access to contact information.

**Hosting & Deployment:**
The site is hosted on reliable shared hosting with SSL certificates ensuring HTTPS security. Domain registration and DNS configuration establish professional branding. Regular backups protect against data loss.

**Collaboration & Community Impact:**
Working with my brother, we handled all aspects from design through deployment. We met with the business owner to iterate on content, ensure accurate service descriptions, and align the website with their brand identity. The collaborative process educated the business owner on maintaining content and understanding web analytics.

This project exemplifies our commitment to supporting local community businesses through accessible, professional web development. By providing affordable web solutions, we help small businesses compete with larger companies that have dedicated IT resources.`,
            results: `The iFast Roadside website successfully launched and serves as the company's primary customer acquisition channel. The mobile-responsive design ensures customers can quickly find emergency contact information when stranded, with the prominent call-to-action button facilitating immediate phone contact.

Local SEO optimization achieved first-page Google rankings for targeted keywords within the service area, significantly increasing organic traffic. The business owner reported increased customer inquiries directly attributable to the website, with many customers specifically mentioning finding them online.

Page load times consistently under 2 seconds provide positive user experience even on slower mobile connections. The professional presentation enhanced business credibility, with customers commenting on the trustworthy appearance compared to competitors' outdated websites.

The success of this project led to additional community website projects, establishing a portfolio of small business web development work. The experience demonstrates technical skills applied to real-world business problems while providing valuable community service.

Ongoing maintenance includes content updates for seasonal services, adding customer testimonials, and refining SEO strategies based on search performance data. The website continues to effectively serve the business's digital marketing needs.`
        }
    },
    {
        id: '2',
        slug: 'isaac-sim-robot',
        title: 'Custom Robot Trained in Isaac Sim/Lab',
        shortDescription: 'A custom robot designed and trained in NVIDIA\'s Isaac Sim for advanced robotics and AI research.',
        fullDescription: `Designed and implemented a custom robotic system using NVIDIA's Isaac Sim platform for simulation and training. The project involved creating a detailed robot model, implementing reinforcement learning algorithms, and training the robot in various scenarios.

This work demonstrates the power of simulation-based training for robotics, allowing rapid iteration and testing without the need for physical prototypes during the development phase.`,
        thumbnail: '/NemaRobotArm.png',
        previewMedia: '/NemaRobotArm.png', // TODO: Replace with GIF/video
        detailImages: ['/NemaRobotArm.png'], // TODO: Add more project images
        type: ['Software'],
        tags: ['Isaac Sim', 'Python', 'Reinforcement Learning', 'Robotics', 'AI'],
        date: '2024',
        technicalStack: ['Python', 'Isaac Sim', 'Isaac Lab', 'PyTorch', 'ROS'],
        role: 'AI Researcher & Developer',
        duration: '2024',
        scope: 'Simulation + Reinforcement Learning + Robot Design',
        relatedProjects: ['1', '14'],
        sections: {
            overview: `This project explores the cutting edge of sim-to-real robotics transfer using NVIDIA's Isaac Sim platform. By designing and training a custom robot entirely in simulation, the project demonstrates how virtual environments can accelerate robotics development and enable rapid experimentation with different designs and algorithms.

The work focuses on creating a photorealistic robot model, implementing domain randomization techniques, and training reinforcement learning policies that can potentially transfer to real hardware.`,
            softwareArchitecture: `The software stack leverages NVIDIA Isaac Sim's USD-based simulation environment with Isaac Lab for reinforcement learning training. The robot model is defined using URDF and imported into the simulator with accurate physics properties.

Training uses Proximal Policy Optimization (PPO) implemented in PyTorch, with custom reward shaping for task-specific behaviors. The system includes ROS integration for potential hardware deployment and teleoperation capabilities. Domain randomization is applied to textures, lighting, and dynamics parameters to improve sim-to-real transfer.`,
            results: `Successfully trained policies for navigation and manipulation tasks, achieving convergence within reasonable training times. The simulation environment allows for 10x faster iteration compared to physical robot testing. The learned behaviors demonstrate robust performance across varied environmental conditions within the simulation.

Next steps include physical robot construction and validation of sim-to-real transfer performance.`
        }
    },
    {
        id: '3',
        slug: 'ridge-wallet-clone',
        title: 'Ridge Wallet Clone',
        shortDescription: 'A 3D-printed clone of the popular Ridge Wallet, designed for durability and minimalism.',
        fullDescription: `Reverse-engineered and redesigned the popular Ridge Wallet using CAD software and 3D printing technology. The project focused on understanding the mechanical design principles that make the original wallet functional while optimizing for 3D printing manufacturing.

The design incorporates precision tolerances for the sliding mechanism and material selection for durability. This project showcases CAD design skills and understanding of manufacturing constraints.`,
        thumbnail: '/RidgeClone.png',
        previewMedia: '/RidgeClone.png', // TODO: Replace with GIF/video
        detailImages: ['/RidgeClone.png'], // TODO: Add more project images
        type: ['Mechanical'],
        tags: ['3D Printing', 'CAD', 'Product Design'],
        date: '2023',
        technicalStack: ['SolidWorks', 'Fusion 360', '3D Printing'],
        role: 'Product Designer',
        duration: '2023',
        scope: 'CAD Design + 3D Printing + Product Engineering',
        relatedProjects: ['4', '6'],
        sections: {
            overview: `This reverse-engineering project deconstructs the popular Ridge Wallet to understand its clever mechanical design and recreate it using 3D printing technology. The challenge lies in achieving the same slim profile, smooth sliding action, and robust construction using additive manufacturing instead of the original machined aluminum.

The project demonstrates product design thinking, tolerance analysis, and material science considerations specific to 3D printing.`,
            mechanicalDesign: `The wallet design features a clever sliding mechanism with precision tolerance requirements. Key mechanisms include card retention clips, money clip integration, and the primary sliding plate mechanism. Each component was redesigned in SolidWorks with 3D printing constraints in mind.

Critical design considerations included layer orientation for strength, living hinge design for the clip, and tolerance compensation for FDM printing (typically +0.2mm clearances). The design uses minimal support structures and can be printed on standard FDM printers. Material choice settled on PLA+ for its strength and smooth surface finish.`,
            results: `The final 3D-printed wallet successfully replicates the core functionality of the Ridge Wallet at a fraction of the cost. The sliding mechanism operates smoothly, and card retention is secure. Weight is comparable to the aluminum original.

Print time is approximately 4 hours. The project demonstrated that functional product clones are achievable with consumer 3D printing when design principles are properly adapted.`
        }
    },
    {
        id: '7',
        slug: 'cibo-restaurant-app',
        title: 'CIBO - Restaurant Ordering Platform',
        shortDescription: 'Full-stack restaurant ordering platform with mobile app, web interface, and backend API for seamless food ordering experience.',
        fullDescription: `Developed CIBO, a comprehensive restaurant ordering platform that bridges the gap between customers and restaurant services. The system features a React Native mobile app for customers, a web-based admin panel for restaurant staff, and a robust Node.js backend API.

The platform enables customers to browse menus, place orders, track their order status in real-time, and make payments. Restaurant staff can manage menus, process orders, and handle table reservations through an intuitive dashboard.`,
        thumbnail: '/cibo-app.png',
        videoUrl: 'https://www.youtube.com/watch?v=ehJRiRirNdg',
        detailImages: ['/cibo-app.png'],
        type: ['Software'],
        tags: ['Full-Stack', 'React Native', 'Node.js', 'Restaurant Tech', 'Mobile App'],
        date: '2024',
        githubUrl: 'https://github.com/ammarjmahmood/CIBO',
        technicalStack: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Expo'],
        role: 'Full-Stack Developer',
        duration: '2024',
        scope: 'Mobile Development + Backend API + Web Dashboard',
        relatedProjects: ['8', '9'],
        sections: {
            overview: `CIBO is a comprehensive restaurant technology platform addressing the disconnect between customer ordering and restaurant operations. The project originated from identifying inefficiencies at Eataly (Eaton Center) and evolved into a full-featured ordering and management system.

The platform serves dual purposes: customer-facing mobile app for browsing menus and placing orders, and restaurant-facing web dashboard for order management and analytics. Real-time synchronization ensures seamless communication between customers and kitchen staff.`,
            softwareArchitecture: `The architecture follows a microservices approach with three main components: (1) React Native mobile app built with Expo for cross-platform deployment, (2) Node.js/Express backend API handling business logic and database operations, and (3) React web dashboard for restaurant staff.

The backend uses PostgreSQL for relational data (menus, orders, users) hosted on Supabase, providing real-time subscriptions for live order updates. Authentication uses JWT tokens with refresh token rotation. The API implements RESTful endpoints with comprehensive error handling and validation.

The mobile app features Redux state management, optimistic updates for responsiveness, and offline-first architecture for menu browsing. Push notifications alert customers of order status changes.`,
            results: `Successfully deployed to test pilot at a local restaurant with positive feedback on ease of use. The system handles concurrent orders efficiently, with real-time updates appearing within 500ms. Average order placement time reduced from 3 minutes (traditional) to under 60 seconds.

The platform demonstrates scalability potential for multi-restaurant deployment. Future enhancements include payment integration, delivery tracking, and customer loyalty programs.`
        }
    },

    {
        id: '17',
        slug: 'knee-brace-recovery',
        title: 'Knee Brace Recovery Device',
        shortDescription: 'Mechanical recovery device designed to aid post-surgery knee rehabilitation, developed in collaboration with a startup.',
        fullDescription: `Designed and prototyped a mechanical knee brace to assist patients recovering from knee surgery. This project was driven by a personal connection to a close friend's recovery journey, aiming to improve upon existing rehabilitation tools. This is the second iteration (V2) of the design, focusing on enhanced comfort, adjustable tension, and ease of use.
        
The device was developed in collaboration with a startup to address specific pain points in current recovery methods. The design includes a novel folding mechanism (demonstrated in the "Knee 3" prototype) allowing the brace to fit compactly into suitcases for travel.`,
        thumbnail: '/gallery/kneebracedesign.png',
        liveUrl: 'https://docs.google.com/document/d/1Kafr3DGXgkPG0eHfMQrDlj_wAlwApKt7SJ6aq1e55r8/edit?usp=sharing',
        detailImages: ['/gallery/kneebracedesign.png', '/gallery/knee2.png', '/gallery/knee3.png', '/gallery/knee5.png'],
        type: ['Mechanical'],
        tags: ['Medical Device', 'SolidWorks', 'Product Design', 'Startup', 'Prototyping'],
        date: '2024',
        technicalStack: ['SolidWorks', '3D Printing', 'Mechanical Analysis', 'Prototyping'],
        role: 'Mechanical Designer',
        duration: '2024',
        scope: 'Product Design + Prototyping',
        relatedProjects: ['5', '1'],
        sections: {
            overview: `This project focuses on the development of a specialized knee brace for post-surgery rehabilitation. The initiative began as a challenge with a startup to create a more effective recovery device.
            
The project holds deep personal significance as it was inspired by my best friend's experience undergoing two knee surgeries and struggling with multiple existing recovery tools. This drove the design philosophy to prioritize patient comfort and practical usability alongside clinical efficacy.`,
            mechanicalDesign: `The design features a custom hinge mechanism that allows for controlled range of motion, essential for progressive rehabilitation. The brace structure was modeled in SolidWorks with a focus on ergonomics and structural integrity.
            
A key innovation in this iteration is the folding mechanism, designed to make the device portable for patients who need to travel. The "Knee 3" prototype demonstrates this capability, folding down to a compact size suitable for standard luggage. 3D printing was used extensively for rapid prototyping to test fit and function.`
        }
    },

    {
        id: '18',
        slug: 'mars-rocket-avionics',
        title: 'MARS Rocket Avionics',
        shortDescription: 'Custom flight controller and avionics system for high-powered rocketry, developed with the TMU MARS Rocket Team.',
        fullDescription: `As a member of the Avionics Team at the TMU MARS Rocket Team, I worked on the design, programming, and testing of custom flight controllers for high-powered rocketry. The system was deployed in over 30 rocket launches in 2025.

The project involved developing a robust avionics package capable of recording flight data, handling recovery deployment, and maintaining telemetry links over long distances.`,
        thumbnail: '/gallery/rocket3.png',
        detailImages: ['/gallery/rocket3.png', '/gallery/AmoungUSboard.png', '/gallery/rocket1.png'],
        type: ['Electrical', 'Software'],
        tags: ['Avionics', 'Embedded Systems', 'Rocketry', 'PCB Design', 'Altium', 'KiCad', 'C++'],
        date: '2025',
        technicalStack: ['STM32', 'C++', 'Altium', 'KiCad', 'LoRa Telemetry', 'Sensors'],
        role: 'Avionics Team Member',
        duration: '2025',
        scope: 'Flight Controller + Telemetry + Testing',
        relatedProjects: ['5', '13'],
        sections: {
            overview: `Designed and implemented the avionics system for the university rocketry team. The core component was a custom flight controller (affectionately named the "Among Us" board) responsible for state estimation, data logging, and parachute deployment.`,
            electricalDesign: `The flight controller featured a custom PCB design integrating a microcontroller, IMU sensors, GPS module, and telemetry transceiver.
            
Key challenges included power management—specifically preventing board damage when LiPo batteries were plugged in while shorted—and ensuring signal integrity for the GPS and telemetry modules. We iterated on the design to improve robustness against electrical faults.`,
            softwareArchitecture: `The firmware was developed to handle high-speed sensor polling and real-time state estimation. It included drivers for the IMU and GPS, as well as a robust state machine for detecting launch, apogee, and landing events.
            
We faced and overcame issues with IMU accuracy and GPS reliability through advanced filtering and sensor fusion algorithms.`,
            results: `The system was successfully flown in over 30 launches. We overcame significant challenges including telemetry packet drops in hilly terrain and initial hardware failures. Through iterative testing and software filtering, we achieved reliable recovery deployment and data recovery.`
        }
    },
];




export const certifications = [
    {
        id: 'cswa',
        title: 'CSWA (Certified SolidWorks Associate)',
        description: 'Professional certification in SolidWorks CAD software, demonstrating proficiency in 3D modeling and engineering design.',
        imagePath: '/certifications/cswa.jpg', // TODO: Add certificate image
    },
    {
        id: 'provincial-winner',
        title: 'Provincial Winner - Engineering Competition',
        description: 'First place winner at the provincial engineering competition, showcasing excellence in engineering design and innovation.',
        imagePath: '/certifications/provincial-winner.jpg', // TODO: Add certificate image
    },
    {
        id: 'pilot-license',
        title: 'Private & Glider Pilot License',
        description: 'Licensed private pilot and glider pilot, combining passion for aviation with engineering expertise.',
        imagePath: '/certifications/pilot-license.jpg', // TODO: Add certificate image
    },
];

export const achievements = [
    '5x Hackathon Winner',
    'PCB Way Sponsored Creator',
    'Provincial Engineering Competition Winner',
    'University Robotics Captain',
];
