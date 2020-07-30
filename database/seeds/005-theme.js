
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('theme').del()
		.then(function () {
			// Inserts seed entries
			return knex('theme').insert(
				[{
					"id": 1,
					"data": [
						{
							"field1": "Function-based",
							"field2": "Open-architected bifurcated model",
							"field3": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
						},
						{
							"field1": "24 hour",
							"field2": "Enhanced optimal circuit",
							"field3": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
						},
						{
							"field1": "Open-architected",
							"field2": "Reduced intangible product",
							"field3": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
						}
					]
				}, {
					"id": 2,
					"data": [
						{
							"field1": "Enhanced",
							"field2": "Cloned foreground initiative",
							"field3": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
						},
						{
							"field1": "Multi-tiered",
							"field2": "Switchable didactic emulation",
							"field3": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
						},
						{
							"field1": "emulation",
							"field2": "De-engineered user-facing pricing structure",
							"field3": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
						}
					]
				}, {
					"id": 3,
					"data": [
						{
							"field1": "Programmable",
							"field2": "Versatile hybrid concept",
							"field3": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
						},
						{
							"field1": "scalable",
							"field2": "Customizable responsive database",
							"field3": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
						},
						{
							"field1": "Profound",
							"field2": "De-engineered discrete circuit",
							"field3": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
						}
					]
				}, {
					"id": 4,
					"data": [
						{
							"field1": "Multi-layered",
							"field2": "Centralized bottom-line internet solution",
							"field3": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
						},
						{
							"field1": "adapter",
							"field2": "Realigned dynamic orchestration",
							"field3": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
						},
						{
							"field1": "projection",
							"field2": "Realigned grid-enabled infrastructure",
							"field3": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
						}
					]
				}, {
					"id": 5,
					"data": [
						{
							"field1": "Object-based",
							"field2": "Synergistic stable challenge",
							"field3": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
						},
						{
							"field1": "mobile",
							"field2": "Synergized fresh-thinking info-mediaries",
							"field3": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
						},
						{
							"field1": "product",
							"field2": "Programmable responsive open architecture",
							"field3": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
						}
					]
				}]
			);
		});
};
