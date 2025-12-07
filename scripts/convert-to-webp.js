const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, '/', file));
        }
    });

    return arrayOfFiles;
}

async function convertImages() {
    const files = getAllFiles(publicDir);
    const imageExtensions = ['.png', '.jpg', '.jpeg'];

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
            const newFile = file.replace(ext, '.webp');
            console.log(`Converting ${file} to ${newFile}`);

            try {
                await sharp(file)
                    .webp({ quality: 80 })
                    .toFile(newFile);
                console.log(`Successfully converted ${path.basename(file)}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convertImages();
