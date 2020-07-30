
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('descriptive_tag').del()
		.then(function () {
			// Inserts seed entries
			return knex('descriptive_tag').insert(
				[
					{ "id": 1, "tag_text": "composite" },
					{ "id": 2, "tag_text": "mediaries" },
					{ "id": 3, "tag_text": "Customer-focused" },
					{ "id": 4, "tag_text": "Diverse" },
					{ "id": 5, "tag_text": "high-level" },
					{ "id": 6, "tag_text": "paradigm" },
					{ "id": 7, "tag_text": "encompassing" },
					{ "id": 8, "tag_text": "5th generation" },
					{ "id": 9, "tag_text": "upward-trending" },
					{ "id": 10, "tag_text": "logistical" },
					{ "id": 11, "tag_text": "Fully-configurable" },
					{ "id": 12, "tag_text": "Externally-focused" },
					{ "id": 13, "tag_text": "methodology" },
					{ "id": 14, "tag_text": "Re-engineered" },
					{ "id": 15, "tag_text": "Compatible" },
					{ "id": 16, "tag_text": "Programmable" },
					{ "id": 17, "tag_text": "Secured" },
					{ "id": 18, "tag_text": "hierarchy" },
					{ "id": 19, "tag_text": "grid-enabled" },
					{ "id": 20, "tag_text": "Object-based" },
					{ "id": 21, "tag_text": "frame" },
					{ "id": 22, "tag_text": "next generation" },
					{ "id": 23, "tag_text": "clear-thinking" },
					{ "id": 24, "tag_text": "migration" },
					{ "id": 25, "tag_text": "system-worthy" },
					{ "id": 26, "tag_text": "Multi-tiered" },
					{ "id": 27, "tag_text": "Organized" },
					{ "id": 28, "tag_text": "info-mediaries" },
					{ "id": 29, "tag_text": "Persistent" },
					{ "id": 30, "tag_text": "Public-key" },
					{ "id": 31, "tag_text": "local" },
					{ "id": 32, "tag_text": "Quality-focused" },
					{ "id": 33, "tag_text": "Grass-roots" },
					{ "id": 34, "tag_text": "Down-sized" },
					{ "id": 35, "tag_text": "6th generation" },
					{ "id": 36, "tag_text": "Open-source" },
					{ "id": 37, "tag_text": "capacity" },
					{ "id": 38, "tag_text": "upwardly-trending" },
					{ "id": 39, "tag_text": "system engine" },
					{ "id": 40, "tag_text": "focus group" },
					{ "id": 41, "tag_text": "strategy" },
					{ "id": 42, "tag_text": "projection" },
					{ "id": 43, "tag_text": "Multi-layered" },
					{ "id": 44, "tag_text": "Pre-emptive" },
					{ "id": 45, "tag_text": "Robust" },
					{ "id": 46, "tag_text": "budgetary management" },
					{ "id": 47, "tag_text": "optimal" },
					{ "id": 48, "tag_text": "7th generation" },
					{ "id": 49, "tag_text": "Managed" },
					{ "id": 50, "tag_text": "secondary" }]
			);
		});
};
