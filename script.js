// Nav-Links
const nav_links = [
  { link: "#about-us", title: "About" },
  { link: "#department", title: "Department" },
  { link: "#faculty", title: "Faculties" }
];

for (let i = 0; i < nav_links.length; i++) {
  document.getElementById("nav-links").innerHTML += `
    <a href="${nav_links[i].link}">${nav_links[i].title}</a>
  `;
}

// About
const about_us = [
  `The Government Arts College (Autonomous), Coimbatore was established in the year 1852 by the British Government.
  This College is one of the best Government Institutions in Tamilnadu. Top bureaucrats, administrators,
  defence personnel and high profile politicians are alumni of this institution.
  It was conferred autonomous status in the year 1987.`,

  `In 2012, the college was re-accredited with 'A' Grade by NAAC. Admissions to the college is coveted by 
  students due to the exceptional guidance offered by highly qualified teaching faculty.
  The ultimate aim of education is to make a person knowledgeable and well informed and offer him / her life
  skills so that one can earn one's livelihood.`
];

for (let i = 0; i < about_us.length; i++) {
  document.getElementById("about").innerHTML += `
    <p class="card">${about_us[i]}</p>
  `;
}

// Departments
const departments = [
  {
    title: "Arts Department",
    dep: [
      "Tamil Literature",
      "English Literature",
      "History",
      "Tourism and Travel Management",
      "Economics",
      "Political Science",
      "Public Administration",
      "Defence Studies",
      "Business Administration (BBA)"
    ]
  },
  {
    title: "Science Departments",
    dep: [
      "Botony",
      "Zoology",
      "Chemistry",
      "Physics",
      "Mathematics",
      "Psychology",
      "Geography",
      "Geology",
      "Statistics",
      "Computer Science",
      "Information Technology"
    ]
  },
  {
    title: "Commerce Departments",
    dep: [
      "Commerce (B.Com)",
      "Commerce with Computer Applications",
      "Commerce with International Business"
    ]
  },
  {
    title: "Computer Applications & IT",
    dep: [
      "Computer Science",
      "Information Technology",
      "Computer Applications (MCA & M.Sc / PG)"
    ]
  }
];

for (let i = 0; i < departments.length; i++) {
  document.getElementById("departments").innerHTML += `
    <div class="card">
      <h3 class="dep-title">${departments[i].title}</h3>
      <ol>
        ${departments[i].dep.map(department => `
          <li class="dep">
            <a href="cs.html">${department}</a>
          </li>
        `).join("")}
      </ol>
    </div>
  `;
}

// Faculties
const faculties = [
  {
    dep: "Principal",
    staffs: [
      {
        name: "Dr. M. R. Yezhili",
        about: "Principal, Government Arts College (Autonomous), Coimbatore"
      }
    ]
  },
  {
    dep: "Computer Science",
    staffs: [
      {
        name: "Dr. L. Robert",
        about: "Specializes in Data Compression"
      },
      {
        name: "Dr. S. Chitra",
        about: "Expert in Data Mining & Web Mining"
      },
      {
        name: "Dr. M. Devapriya",
        about: "Research & Teaching in Computer Science"
      }
    ]
  },
  {
    dep: "Tamil",
    staffs: [
      {
        name: "Dr. E. Senavarayan",
        about: "Associate Professor | Ph.D. Supervisor | Classical Tamil Literature"
      }
    ]
  },
  {
    dep: "English",
    staffs: [
      {
        name: "Dr. R. Gowri Shankar",
        about: ""
      },
      {
        name: "Dr. M. Muthukumar",
        about: ""
      },
      {
        name: "Dr. A. S. Mohanagiri",
        about: ""
      },
      {
        name: "Dr. K. Geetha Swamy",
        about: ""
      }
    ]
  },
  {
    dep: "Commerce",
    staffs: [
      {
        name: "Dr. M. Sivasubramanian",
        about: "Finance, HR, Marketing"
      },
      {
        name: "Dr. N. Meenakshi Sundareswari",
        about: "Finance Expert | MBA | Ph.D."
      }
    ]
  },
  {
    dep: " Public Administration",
    staffs: [
      {
        name: "Dr. C. Esther Buvana",
        about: "Head of Dept. | HRM & Public Welfare Expert"
      },
      {
        name: "Dr. P. Magudapathy",
        about: "Assistant Professor | Local Govt. & Admin"
      }
    ]
  },
  {
    dep: "BBA Department",
    staffs: [
      {
        name: "Dr. R. Geetharamani Venkataprabhu",
        about: "Assistant Professor (Selection Grade) | Placement Coordinator | Soft Skills Trainer"
      }
    ]
  }
];

for (let i = 0; i < faculties.length; i++) {
  document.getElementById("faculties").innerHTML += `
    <div class="card">
      <h3 class="dep-title">${faculties[i].dep}</h3>
      <ol>
        ${faculties[i].staffs.map(staff => `
          <li class="staff">
            <h4>${staff.name}</h4>
            <p class="staff-about">${staff.about}</p>
          </li>
        `).join("")}
      </ol>
    </div>
  `;
}

// Future-Goals
const future_goals = [
  {
    title: "Our Vision",
    goal: "The College works with a vision of providing quality higher education to all the sections of the society"
  },
  {
    title: "Our Mission",
    goal: `The institution aims at providing quality education to the students of the downtrodden 
      and weaker sections of the society, combined with a value based education, to ensure that 
      they become ideal citizens of the country. The skills needed to meet the global challenges 
      are to be imparted.
    `
  }
];

for (let i = 0; i < future_goals.length; i++) {
  document.getElementById("future-goal").innerHTML += `
    <div class="card">
      <h3 class="future-title">${future_goals[i].title}</h3>
      <p>${future_goals[i].goal}</p>
    </div>
  `;
}

// Footer
const footer = `
  Copyright © 2024 Government Arts College. All rights reserved. 
  Government Arts College,Coimbatore.
`;

document.getElementById("footer").innerHTML = `${footer}`;
