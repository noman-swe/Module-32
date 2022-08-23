const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x } = myObject;
console.log(x);

// destructuring array
const [p, q] = [45, 31];
console.log(p, q);



// chaining
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development', employee: '22', framework: 'react', tech: {
            first: 'sad', second: 'raki', third: 'Third'
        }
    }
};

console.log(company.web.tech.third);
console.log(company.backend?.tech.third);