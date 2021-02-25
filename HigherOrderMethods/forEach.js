const companies = [
    { name: "Company 1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company 2", category: "Retail", start: 1992, end: 2007 },
    { name: "Company 3", category: "Auto", start: 1987, end: 2009 },
    { name: "Company 4", category: "Retail", start: 2008, end: 2013 },
    { name: "Company 5", category: "Technology", start: 1985, end: 2010 },
    { name: "Company 6", category: "Data Science", start: 2010, end: 2020 },
    { name: "Company 7", category: "Finance", start: 1981, end: 2003 },
    { name: "Company 8", category: "Data Base", start: 1992, end: 2007 },
    { name: "Company 9", category: "Auto", start: 2007, end: 20019 },
    { name: "Company 10", category: "Data Base", start: 2008, end: 2013 },
    { name: "Company 11", category: "Technology", start: 2003, end: 2010 },
    { name: "Company 12", category: "Data Science", start: 2008, end: 2021 }
];

const ages = [33, 21, 22, 35, 42, 45, 32, 27, 15, 64];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

companies.forEach((company) => {
    console.log(company.name);
});