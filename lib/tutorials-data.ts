export interface Tutorial {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    date: string;
    tags: string[];
    youtubeUrl?: string;
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
        id: '1',
        slug: 'octoprint-prusa-wifi-setup',
        title: 'How to Set Up OctoPrint on a Raspberry Pi & Make Your Prusa Wi-Fi Enabled',
        description:
            'A step-by-step guide to installing OctoPrint on a Raspberry Pi, connecting it to your Prusa i3 MK3S+, and controlling your 3D printer wirelessly from any device on your network.',
        thumbnail: '/tutorials/octoprint-setup.jpg',
        date: '2026-07-21',
        tags: ['3D Printing', 'Raspberry Pi', 'OctoPrint', 'Prusa', 'IoT'],
        youtubeUrl: '',
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
