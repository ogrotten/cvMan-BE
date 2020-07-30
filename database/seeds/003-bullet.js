exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('bullet').del()
		.then(function () {
			// Inserts seed entries
			return knex('bullet').insert(
				[
					{ "id": 1, "owner_id": 10, "bullet_text": "Aliquam non mauris. Morbi non lectus." },
					{ "id": 2, "owner_id": 9, "bullet_text": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam." },
					{ "id": 3, "owner_id": 9, "bullet_text": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus." },
					{ "id": 4, "owner_id": 10, "bullet_text": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus." },
					{ "id": 5, "owner_id": 9, "bullet_text": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit." },
					{ "id": 6, "owner_id": 10, "bullet_text": "Sed ante. Vivamus tortor." },
					{ "id": 7, "owner_id": 10, "bullet_text": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien." },
					{ "id": 8, "owner_id": 2, "bullet_text": "In quis justo. Maecenas rhoncus aliquam lacus." },
					{ "id": 9, "owner_id": 3, "bullet_text": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula." },
					{ "id": 10, "owner_id": 4, "bullet_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus." },
					{ "id": 11, "owner_id": 5, "bullet_text": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat." },
					{ "id": 12, "owner_id": 1, "bullet_text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum." },
					{ "id": 13, "owner_id": 2, "bullet_text": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi." },
					{ "id": 14, "owner_id": 5, "bullet_text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus." },
					{ "id": 15, "owner_id": 8, "bullet_text": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem." },
					{ "id": 16, "owner_id": 6, "bullet_text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue." },
					{ "id": 17, "owner_id": 10, "bullet_text": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo." },
					{ "id": 18, "owner_id": 6, "bullet_text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante." },
					{ "id": 19, "owner_id": 6, "bullet_text": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros." },
					{ "id": 20, "owner_id": 4, "bullet_text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum." },
					{ "id": 21, "owner_id": 9, "bullet_text": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem." },
					{ "id": 22, "owner_id": 3, "bullet_text": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio." },
					{ "id": 23, "owner_id": 10, "bullet_text": "Maecenas pulvinar lobortis est. Phasellus sit amet erat." },
					{ "id": 24, "owner_id": 6, "bullet_text": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus." },
					{ "id": 25, "owner_id": 9, "bullet_text": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante." },
					{ "id": 26, "owner_id": 8, "bullet_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit." },
					{ "id": 27, "owner_id": 8, "bullet_text": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat." },
					{ "id": 28, "owner_id": 2, "bullet_text": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet." },
					{ "id": 29, "owner_id": 8, "bullet_text": "Aenean sit amet justo. Morbi ut odio." },
					{ "id": 30, "owner_id": 6, "bullet_text": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus." },
					{ "id": 31, "owner_id": 6, "bullet_text": "In eleifend quam a odio. In hac habitasse platea dictumst." },
					{ "id": 32, "owner_id": 9, "bullet_text": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy." },
					{ "id": 33, "owner_id": 3, "bullet_text": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa." },
					{ "id": 34, "owner_id": 3, "bullet_text": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia." },
					{ "id": 35, "owner_id": 3, "bullet_text": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti." },
					{ "id": 36, "owner_id": 9, "bullet_text": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit." },
					{ "id": 37, "owner_id": 8, "bullet_text": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus." },
					{ "id": 38, "owner_id": 10, "bullet_text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus." },
					{ "id": 39, "owner_id": 2, "bullet_text": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo." },
					{ "id": 40, "owner_id": 2, "bullet_text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
					{ "id": 41, "owner_id": 1, "bullet_text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien." },
					{ "id": 42, "owner_id": 8, "bullet_text": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla." },
					{ "id": 43, "owner_id": 8, "bullet_text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque." },
					{ "id": 44, "owner_id": 8, "bullet_text": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum." },
					{ "id": 45, "owner_id": 2, "bullet_text": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo." },
					{ "id": 46, "owner_id": 3, "bullet_text": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem." },
					{ "id": 47, "owner_id": 2, "bullet_text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum." },
					{ "id": 48, "owner_id": 6, "bullet_text": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum." },
					{ "id": 49, "owner_id": 2, "bullet_text": "Etiam justo. Etiam pretium iaculis justo." },
					{ "id": 50, "owner_id": 10, "bullet_text": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." }
				]
			);
		});
};