export interface Tutorial {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    date: string;
    tags: string[];
    youtubeUrl?: string;
    instructablesUrl?: string;
    readTime: string;
    content: TutorialSection[];
}

export interface TutorialSection {
    heading: string;
    body: string;
    image?: string;
    imageAlt?: string;
    code?: string;
    codeLanguage?: string;
}

export const tutorials: Tutorial[] = [
    {
        id: '5',
        slug: 'training-humanoid-isaac-sim',
        title: 'Train a Humanoid Robot, Start to Finish — Isaac Sim/Lab Series',
        description:
            'A video series walking through training a humanoid robot end-to-end in NVIDIA Isaac Sim and Isaac Lab, from environment setup through policy training.',
        thumbnail: 'https://img.youtube.com/vi/-wHHJGRobww/maxresdefault.jpg',
        date: '2026-08-12',
        tags: ['Robotics', 'Humanoid Robot', 'NVIDIA Isaac Sim', 'Isaac Lab', 'Reinforcement Learning', 'Simulation'],
        youtubeUrl: 'https://www.youtube.com/watch?v=-wHHJGRobww',
        readTime: '10 min watch',
        content: [
            {
                heading: 'Overview',
                body: `This is Part 1 of a video series on training a humanoid robot from start to finish in NVIDIA Isaac Sim and Isaac Lab. Rather than a text write-up, this tutorial lives as a video walkthrough — watch it above or on YouTube.

The series follows the full workflow of getting a humanoid robot policy trained in simulation: setting up the Isaac Sim/Isaac Lab environment, configuring the robot and task, and running through training so the policy is ready to evaluate and, eventually, move toward sim-to-real deployment.`,
            },
            {
                heading: 'What the Series Covers',
                body: `- Setting up NVIDIA Isaac Sim and Isaac Lab for humanoid robot work
- Configuring a humanoid robot model and simulation environment
- Structuring a training task for a humanoid policy
- Running and iterating on training in Isaac Lab

Later parts in the series build on this foundation — check the video description and channel for the rest of the series as it's released.`,
            },
            {
                heading: 'Who This Is For',
                body: `This series is aimed at anyone getting started with humanoid robotics in simulation — whether you're coming from mobile-manipulator or arm-based Isaac Lab work (like the VLA training project elsewhere on this site) and want to extend into full humanoid platforms, or you're new to Isaac Sim/Lab entirely and want a start-to-finish walkthrough instead of piecing together scattered docs.`,
            },
        ],
    },
    {
        id: '3',
        slug: 'asl-robotic-hand-tutorial',
        title: 'Computer Vision ASL Detection Robotic Arm',
        description:
            'Build a robotic hand that recognizes American Sign Language letters through computer vision and physically demonstrates them using 3D-printed components, servo motors, and a Raspberry Pi.',
        thumbnail: '/ml-arm.webp',
        date: '2024-06-15',
        tags: ['Robotics', 'Computer Vision', 'Machine Learning', '3D Printing', 'Raspberry Pi'],
        youtubeUrl: 'https://www.youtube.com/watch?v=Xffxt38l2kA',
        readTime: '20 min read',
        instructablesUrl: 'https://www.instructables.com/Computer-Vision-ASL-Detection-Robotic-Arm',
        content: [
            {
                heading: 'Overview',
                body: `This project creates a robotic hand that bridges communication between hearing and deaf communities. The system both recognizes American Sign Language (ASL) letters through computer vision and physically demonstrates them through mechanical movement.

The software stack consists of three main components: (1) Computer vision pipeline using OpenCV for hand tracking and feature extraction, (2) TensorFlow-based neural network trained on ASL gesture datasets for real-time classification, and (3) Arduino firmware for smooth servo control and interpolation.

The ML model was trained on 10,000+ labeled hand gesture images, achieving 95% accuracy on the test set. The system processes frames at 30 FPS, providing responsive gesture recognition.`,
            },
            {
                heading: 'What You\'ll Need',
                body: `- **Raspberry Pi 3B+ or 4** (2 GB RAM minimum)
- **PCA9685 servo driver board** (16-channel, I2C)
- **5x micro servo motors** (SG90 or MG90S)
- **30V/10A power supply** for servos
- **Pi Camera module** or USB webcam
- **3D-printed hand components** (STL files in [GitHub repo](https://github.com/ammarjmahmood/ASLRoboticHand))
- **Fishing line** (~50cm per finger for tendon actuation)
- Jumper wires, screws, and mounting hardware`,
            },
            {
                heading: 'Step 1 — 3D Print the Mechanical Components',
                body: `The robotic hand requires several 3D-printed parts that work together to enable realistic finger movements. Download the STL files from the project repository and print the five finger components along with the palm and wrist structural pieces.

**Print settings:**
- **Material:** PLA+ for strength and print quality
- **Layer height:** 0.2mm
- **Infill:** 30% for structural rigidity
- **Supports:** Yes, for overhangs on finger joints

Each finger includes articulated joints designed in SolidWorks, with modular link sections that can be reprinted independently if damaged.`,
            },
            {
                heading: 'Step 2 — Assemble the Mechanical Hand',
                body: `Construction involves threading fishing line through printed components to create finger actuation:

1. Cut approximately 50cm lengths of fishing line — one per finger.
2. Thread each line through the finger starting at the fingertip, routing through the joint channels.
3. Secure the line at the fingertip with a knot or crimp.
4. Route each line down through the palm to connect to its corresponding servo motor horn.
5. Ensure all joints move freely with minimal friction before tightening.

The design emphasizes lightweight construction while maintaining structural rigidity. Key design considerations include tendon routing for finger actuation, servo mounting points, and wire management.`,
            },
            {
                heading: 'Step 3 — Electronics & Wiring',
                body: `The electrical system uses a PCA9685 servo driver board to control multiple servos via I2C communication with the Raspberry Pi:

1. Connect the PCA9685 to the Raspberry Pi: **SDA → GPIO 2**, **SCL → GPIO 3**, **VCC → 3.3V**, **GND → GND**.
2. Connect the 30V/10A power supply to the PCA9685 servo power terminals (V+ and GND).
3. Plug each servo into channels 0–4 on the PCA9685.
4. Connect your camera module to the Pi (CSI port for Pi Camera, or USB).

The architecture separates computationally intensive ML inference from real-time servo control, with the Pi handling both through serial communication.`,
            },
            {
                heading: 'Step 4 — Software Installation',
                body: `Install Raspberry Pi OS via the official imager tool, then set up the software environment:

1. Enable SSH and I2C via **raspi-config**.
2. Update packages: \`sudo apt update && sudo apt upgrade\`
3. Install Python dependencies:

\`pip install opencv-python mediapipe tensorflow adafruit-circuitpython-pca9685\`

4. Clone the project repository:

\`git clone https://github.com/ammarjmahmood/ASLRoboticHand.git\`

Deployment was streamlined using Docker containers to ensure consistent environments. The system was successfully tested on Raspberry Pi 4, Raspberry Pi 5, MacBook Pro M2, and Windows PC.`,
            },
            {
                heading: 'Step 5 — Train the Computer Vision Model',
                body: `The system uses MediaPipe to track hand landmarks, then trains a Random Forest Classifier to recognize letter patterns from these tracking points:

1. Run the data collection script to capture hand landmark data for each ASL letter.
2. Position your hand in front of the camera and cycle through letters A–Z.
3. The script extracts 21 hand landmarks (63 features: x, y, z per landmark).
4. Train the classifier on your collected dataset.
5. Test recognition accuracy — aim for 95%+ on your test set.

The system processes frames at 30 FPS, providing responsive gesture recognition with an average response time of 200ms from detection to physical replication.`,
            },
            {
                heading: 'Step 6 — Servo Calibration',
                body: `Each ASL letter requires specific finger positions. Calibration ensures precise movements:

1. Run the calibration script to test each servo's range of motion.
2. For each letter, define the servo angles that produce the correct finger positions.
3. Fine-tune values — each servo and mechanical assembly has individual variations.
4. Save your calibration profile.

The completed system successfully recognizes and replicates 15 common ASL gestures with high accuracy.`,
            },
            {
                heading: 'Step 7 — Testing & Advanced Features',
                body: `Verify the complete system:

- All fingers move smoothly through their full range
- Fishing line shows no binding or excessive slack
- Servo horns are securely attached
- Camera has a clear view for hand detection

**Advanced: Hand Mirroring Mode** — A real-time mimicry mode allows the robotic hand to copy your hand movements live, rather than recognizing specific ASL letters. Run the hand_mirror program for this functionality.

Future improvements include expanding the gesture vocabulary, implementing bilateral hand design, and developing a standalone embedded system without requiring a computer for ML inference.`,
            },
        ],
    },
    {
        id: '4',
        slug: 'autonomous-robot-under-30',
        title: 'How to Make an Autonomous Robot for Under $30',
        description:
            'Transform a secondhand iRobot Roomba into an autonomous mobile robot with camera streaming, obstacle avoidance, and a 3D-printed robotic arm — all for under $30.',
        thumbnail: '/gallery/hackedroomba-new.png',
        date: '2023-12-04',
        tags: ['Robotics', 'Arduino', 'ESP32', 'Autonomous Navigation', 'Embedded Systems'],
        youtubeUrl: '',
        readTime: '18 min read',
        instructablesUrl: 'https://www.instructables.com/How-to-Make-an-Autonomous-Robot-for-Under-30',
        content: [
            {
                heading: 'Overview',
                body: `This project transforms a commercial iRobot Roomba into a fully programmable autonomous robotics platform for under $30. By reverse-engineering the Roomba's communication protocol and replacing its control system, the robot gains enhanced capabilities including camera streaming, obstacle avoidance, and object manipulation via a 3D-printed robotic arm.

The custom implementation allows for complete control over motor speeds, sensor readings, and navigation algorithms — opening up possibilities for advanced robotics research, path planning experiments, and integration with external systems.`,
            },
            {
                heading: 'What You\'ll Need',
                body: `- **Used iRobot Roomba** ($5–$15 from thrift stores, Craigslist, or Facebook Marketplace)
- **ESP32 microcontroller**
- **Zeee 5200mAh LiPo battery**
- **Motor driver board** (L298N or similar)
- **HC-SR04 ultrasonic sensor**
- **ESP32-CAM module** (budget camera option)
- **3D-printed robotic arm** (~$3 in filament)
- **Servo motors** for arm assembly
- **Voltage regulators** (5V and 3.3V)
- Mounting hardware (screws, standoffs)
- Multimeter for testing

**Total cost:** Under $30 if sourcing the Roomba secondhand.`,
            },
            {
                heading: 'Step 1 — Source & Disassemble the Roomba',
                body: `Check secondhand marketplaces for non-functional Roomba units — target models without chargers or with motor issues, typically $5–$15. Functionality doesn't matter since all electronics will be replaced.

**Disassembly:**
1. Remove all bottom cover screws and carefully lift away the cover.
2. Disconnect the original control board.
3. Retain the battery compartment and wheel motors — these are the valuable parts.
4. Extract the brush assembly motor for potential reuse as a spare drive motor.
5. Keep all screws and mounting hardware organized.`,
            },
            {
                heading: 'Step 2 — Motor Assessment & Testing',
                body: `Use a multimeter to identify functional motors and understand their characteristics:

1. Test each drive motor by applying direct power (match the original voltage rating).
2. Test the brush motor separately — note that it may have different torque and power draw characteristics.
3. If a drive motor is non-functional, the brush motor can serve as a replacement.
4. Document motor voltages and current draw for power management later.

Connect both motors to the motor driver board and verify directional control before proceeding.`,
            },
            {
                heading: 'Step 3 — ESP32 Motor Control',
                body: `Install Arduino IDE with ESP32 board support and develop the motor control firmware:

1. Wire the motor driver board to the ESP32 GPIO pins.
2. Write control code with adjustable PWM values per motor to account for torque differences.
3. Implement forward, reverse, left turn, and right turn functions.
4. Test each movement direction individually.

The firmware uses a state machine for behavior control with PID speed regulation. The modular architecture makes it easy to test new navigation strategies.`,
            },
            {
                heading: 'Step 4 — Ultrasonic Sensor & Obstacle Avoidance',
                body: `Mount the HC-SR04 ultrasonic sensor on the robot's front for distance measurement:

1. Connect: **VCC → 5V**, **GND → GND**, **Trigger → GPIO pin**, **Echo → GPIO pin**.
2. Update firmware to continuously read distance measurements.
3. Implement obstacle avoidance logic:
   - When distance drops below ~20cm, halt motors.
   - Execute a turning maneuver to avoid the obstacle.
   - Resume forward movement after successful evasion.
4. Validate with real-world object placement testing.

Additional IR sensors can be added for cliff detection, and a 9-DOF IMU for orientation tracking.`,
            },
            {
                heading: 'Step 5 — Camera Streaming (ESP32-CAM)',
                body: `For a budget-friendly camera solution, use an ESP32-CAM module:

1. Mount the ESP32-CAM on top of the robot.
2. Connect to the power supply (ensure stable 5V).
3. Program the module to stream video to a local web server.
4. Access the stream from any device on your network via a browser.

**Alternative: Raspberry Pi Camera** — For higher quality, mount a Raspberry Pi on top of the robot with a Pi Camera module. This adds cost but enables more advanced computer vision capabilities. Install the camera libraries and develop a Python streaming script.`,
            },
            {
                heading: 'Step 6 — 3D-Printed Robotic Arm',
                body: `Add manipulation capabilities with a 3D-printed robotic arm:

1. Source or design a small robotic arm — free designs available on Thingiverse.
2. 3D print all components (~$3 in filament).
3. Print mounting brackets for secure attachment to the Roomba chassis.
4. Assemble the arm with servo motors at each joint.
5. Wire servos to the ESP32 or a dedicated servo driver board.
6. Write control code for basic pick-and-place operations.`,
            },
            {
                heading: 'Step 7 — Power Management',
                body: `Calculate and manage total current draw across all components:

- ESP32 and motors need appropriate voltage and current levels.
- ESP32-CAM requires stable power — brownouts cause crashes.
- Servo motors can have high peak current draw.
- Use voltage regulators if running everything from the single LiPo battery.

The Zeee 5200mAh LiPo provides excellent runtime. Battery life is approximately 90 minutes with all sensors active, comparable to the original Roomba.`,
            },
            {
                heading: 'Results & Next Steps',
                body: `The hacked Roomba successfully navigates complex indoor environments autonomously, avoiding obstacles and recovering from stuck situations. The platform serves as an educational tool for learning robotics fundamentals.

**Future improvements:**
- SLAM integration for mapping
- Camera-based navigation with object detection
- ROS compatibility for advanced research
- Remote control via web interface or mobile app

The total build cost stays under $30 when sourcing the Roomba secondhand, making this one of the most affordable autonomous robotics platforms available.`,
            },
        ],
    },
    {
        id: '1',
        slug: 'octoprint-prusa-wifi-setup',
        title: 'How to Set Up OctoPrint on a Raspberry Pi & Make Your Prusa Wi-Fi Enabled',
        description:
            'A step-by-step guide to installing OctoPrint on a Raspberry Pi, connecting it to your Prusa i3 MK3S+, and controlling your 3D printer wirelessly from any device on your network.',
        thumbnail: 'https://img.youtube.com/vi/kHT8Q25NUTc/maxresdefault.jpg',
        date: '2026-07-21',
        tags: ['3D Printing', 'Raspberry Pi', 'OctoPrint', 'Prusa', 'IoT'],
        youtubeUrl: 'https://youtu.be/kHT8Q25NUTc?si=0rBYEavT9Umvi08b',
        readTime: '15 min read',
        content: [
            {
                heading: 'What You\'ll Need',
                body: `Before we start, gather the following:

- **Raspberry Pi 3B+ or 4** (2 GB RAM minimum recommended)
- **Micro SD card** (16 GB or larger, Class 10)
- **USB-A to USB-B cable** (the square printer-style connector)
- **5V power supply** for the Raspberry Pi
- **Prusa i3 MK3S/MK3S+** (or any Marlin-based printer)
- A computer with an SD card reader
- Wi-Fi network credentials`,
            },
            {
                heading: 'Step 1 — Flash OctoPi to the SD Card',
                body: `OctoPi is a pre-configured Raspberry Pi image that bundles OctoPrint with everything you need.

1. Download the latest **OctoPi** image from [octoprint.org](https://octoprint.org/download/).
2. Download and install **Raspberry Pi Imager** from [raspberrypi.com](https://www.raspberrypi.com/software/).
3. Insert your SD card and open Raspberry Pi Imager.
4. Click **Choose OS → Use custom** and select the OctoPi .img file.
5. Click **Choose Storage** and select your SD card.
6. **Before writing**, click the gear icon (⚙️) and configure:
   - **Set hostname:** octopi
   - **Enable SSH** (use password authentication)
   - **Set username and password**
   - **Configure wireless LAN** — enter your Wi-Fi SSID and password
   - **Set locale settings** to your timezone
7. Click **Write** and wait for the process to complete.`,
            },
            {
                heading: 'Step 2 — Boot the Raspberry Pi',
                body: `1. Remove the SD card from your computer and insert it into the Raspberry Pi.
2. Plug in the 5V power supply — the Pi will boot and automatically connect to your Wi-Fi.
3. Wait about 2–3 minutes for the first boot to finish.
4. On your computer, open a browser and navigate to **http://octopi.local**. If that doesn't resolve, find the Pi's IP address from your router's admin page and go to **http://<IP_ADDRESS>**.

You should see the OctoPrint Setup Wizard.`,
            },
            {
                heading: 'Step 3 — OctoPrint Setup Wizard',
                body: `Walk through the wizard:

1. **Access Control** — Create an admin username and password. Don't skip this.
2. **Anonymous Usage Tracking** — Your choice.
3. **Connectivity Check** — Leave defaults.
4. **Plugin Blacklist** — Enable it for security.
5. **Default Printer Profile** — Set up your Prusa:
   - **Name:** Prusa i3 MK3S+
   - **Model:** Prusa i3 MK3S+
   - **Build Volume:** 250 × 210 × 210 mm
   - **Heated Bed:** Yes
   - **Heated Chamber:** No
   - **Origin:** Lower Left
   - **Form Factor:** Rectangular

Click **Finish** and you'll land on the OctoPrint dashboard.`,
            },
            {
                heading: 'Step 4 — Connect the Prusa via USB',
                body: `1. Power on your Prusa printer.
2. Connect the USB-B end to the printer and the USB-A end to the Raspberry Pi.
3. In OctoPrint, go to the **Connection** panel on the left sidebar.
4. Select:
   - **Serial Port:** /dev/ttyACM0 (usually auto-detected)
   - **Baudrate:** 115200
5. Click **Connect**.

The status should change to **"Operational"**. You can now see your printer's temperature readings in real time.`,
            },
            {
                heading: 'Step 5 — Disable the Prusa\'s RPi Port Power (Important!)',
                body: `The Prusa's Einsy board supplies 5V power through its USB port, which can conflict with the Pi's own power supply and cause random reboots.

**Fix this by putting tape over the 5V pin on the USB cable**, or by disabling it in firmware:

1. On the printer LCD, go to **Settings → RPi Port**.
2. Set it to **Off**.

This ensures the Pi is powered solely by its own PSU.`,
            },
            {
                heading: 'Step 6 — Upload & Print Wirelessly',
                body: `You're set! Here's how to print:

1. Slice your model in **PrusaSlicer** as usual.
2. Instead of saving to SD, export the G-code file.
3. In OctoPrint, click the **Upload** button and select your .gcode file.
4. Once uploaded, click the **Print** icon next to the file.
5. Monitor temperature, progress, and even watch a live camera feed (if you add a Pi camera later).

You can access OctoPrint from any device on your network — phone, tablet, or laptop.`,
            },
            {
                heading: 'Bonus — Recommended Plugins',
                body: `Head to **Settings → Plugin Manager → Get More** and install these:

- **OctoPrint-PrusaSlicerThumbnails** — Shows model thumbnails from PrusaSlicer.
- **OctoLapse** — Creates smooth timelapse videos of your prints.
- **Bed Level Visualizer** — Visualize your mesh bed leveling data.
- **Print Time Genius** — More accurate time estimates.
- **Themeify** — Dark mode for OctoPrint.

These make the experience much more polished.`,
            },
            {
                heading: 'Troubleshooting Tips',
                body: `- **Can't reach octopi.local?** Use the IP address directly. Install **Angry IP Scanner** to find it.
- **Connection drops randomly?** Check the 5V power conflict fix in Step 5. Also try a shorter USB cable.
- **Slow interface?** A Raspberry Pi 3B can be sluggish — Pi 4 with 2 GB+ RAM is the sweet spot.
- **Serial port not showing up?** Try a different USB cable — some are charge-only and don't carry data.`,
            },
        ],
    },
];
