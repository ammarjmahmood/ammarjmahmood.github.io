
const { projects } = require('./lib/projects-data.ts');

console.log("Projects with 'Electrical' tag:");
projects.filter(p => p.type.includes('Electrical')).forEach(p => {
    console.log(`- ${p.title} [${p.type.join(', ')}]`);
});

console.log("\nProjects with 'Mechanical' tag but NOT 'Electrical':");
projects.filter(p => p.type.includes('Mechanical') && !p.type.includes('Electrical')).forEach(p => {
    console.log(`- ${p.title} [${p.type.join(', ')}]`);
});
