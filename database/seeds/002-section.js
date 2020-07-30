exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('section').del()
		.then(function () {
			// Inserts seed entries
			return knex('section').insert(
				[
					{ "id": 1, "owner_id": 6, "section_text": "VP Sales" },
					{ "id": 2, "owner_id": 10, "section_text": "Geological Engineer" },
					{ "id": 3, "owner_id": 9, "section_text": "Actuary" },
					{ "id": 4, "owner_id": 9, "section_text": "Biostatistician IV" },
					{ "id": 5, "owner_id": 5, "section_text": "Computer Systems Analyst II" },
					{ "id": 6, "owner_id": 3, "section_text": "Technical Writer" },
					{ "id": 7, "owner_id": 8, "section_text": "Chemical Engineer" },
					{ "id": 8, "owner_id": 3, "section_text": "Marketing Assistant" },
					{ "id": 9, "owner_id": 1, "section_text": "Media Manager III" },
					{ "id": 10, "owner_id": 10, "section_text": "Office Assistant I" },
					{ "id": 11, "owner_id": 9, "section_text": "Civil Engineer" },
					{ "id": 12, "owner_id": 9, "section_text": "Compensation Analyst" },
					{ "id": 13, "owner_id": 4, "section_text": "Accountant II" },
					{ "id": 14, "owner_id": 4, "section_text": "Geological Engineer" },
					{ "id": 15, "owner_id": 9, "section_text": "Environmental Tech" },
					{ "id": 16, "owner_id": 10, "section_text": "Director of Sales" },
					{ "id": 17, "owner_id": 9, "section_text": "Engineer I" },
					{ "id": 18, "owner_id": 9, "section_text": "Chemical Engineer" },
					{ "id": 19, "owner_id": 2, "section_text": "Senior Developer" },
					{ "id": 20, "owner_id": 4, "section_text": "Senior Quality Engineer" },
					{ "id": 21, "owner_id": 7, "section_text": "Staff Accountant III" },
					{ "id": 22, "owner_id": 5, "section_text": "Health Coach I" },
					{ "id": 23, "owner_id": 9, "section_text": "Professor" },
					{ "id": 24, "owner_id": 7, "section_text": "Product Engineer" },
					{ "id": 25, "owner_id": 4, "section_text": "Recruiter" },
					{ "id": 26, "owner_id": 7, "section_text": "Computer Systems Analyst I" },
					{ "id": 27, "owner_id": 10, "section_text": "Geological Engineer" },
					{ "id": 28, "owner_id": 10, "section_text": "Food Chemist" },
					{ "id": 29, "owner_id": 7, "section_text": "Librarian" },
					{ "id": 30, "owner_id": 8, "section_text": "VP Marketing" },
					{ "id": 31, "owner_id": 7, "section_text": "VP Accounting" },
					{ "id": 32, "owner_id": 8, "section_text": "Engineer II" },
					{ "id": 33, "owner_id": 8, "section_text": "Pharmacist" },
					{ "id": 34, "owner_id": 3, "section_text": "Research Associate" },
					{ "id": 35, "owner_id": 10, "section_text": "Librarian" },
					{ "id": 36, "owner_id": 4, "section_text": "Senior Sales Associate" },
					{ "id": 37, "owner_id": 10, "section_text": "VP Quality Control" },
					{ "id": 38, "owner_id": 5, "section_text": "Analyst Programmer" },
					{ "id": 39, "owner_id": 2, "section_text": "Design Engineer" },
					{ "id": 40, "owner_id": 3, "section_text": "Librarian" },
					{ "id": 41, "owner_id": 6, "section_text": "Analog Circuit Design manager" },
					{ "id": 42, "owner_id": 9, "section_text": "Web Designer IV" },
					{ "id": 43, "owner_id": 3, "section_text": "Structural Analysis Engineer" },
					{ "id": 44, "owner_id": 5, "section_text": "Mechanical Systems Engineer" },
					{ "id": 45, "owner_id": 9, "section_text": "Staff Accountant II" },
					{ "id": 46, "owner_id": 3, "section_text": "Software Engineer III" },
					{ "id": 47, "owner_id": 9, "section_text": "Database Administrator I" },
					{ "id": 48, "owner_id": 1, "section_text": "Environmental Specialist" },
					{ "id": 49, "owner_id": 6, "section_text": "Business Systems Development Analyst" },
					{ "id": 50, "owner_id": 1, "section_text": "Nurse" }
				]
			);
		});
};