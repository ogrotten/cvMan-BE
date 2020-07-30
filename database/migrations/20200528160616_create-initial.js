exports.up = function (knex) {
	return knex.schema
		.createTable("user", tbl => {
			tbl.increments();
			tbl.string("username", 128)
				.unique()
				.notNullable();
			tbl.string("email", 50)
				.notNullable();
			tbl.string("fullname", 32)
				.notNullable();
			tbl.string("addr_street", 32)
				.notNullable();
			tbl.string("addr_city", 32)
				.notNullable();
			tbl.string("addr_state", 2)
				.notNullable();
			tbl.string("addr_zip", 5)
				.notNullable();
			tbl.string("social_1", 100)
				.notNullable();
			tbl.string("social_2", 100)
				.notNullable();
			tbl.string("social_3", 100)
				.notNullable();
			tbl.string("social_4", 100)
				.notNullable();
		})

		.createTable("section", tbl => {
			tbl.increments();
			tbl.integer("owner_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("user")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			tbl.string("section_text", 40)
				.notNullable();
		})

		.createTable("bullet", tbl => {
			tbl.increments();
			tbl.integer("owner_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("user")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			tbl.string("bullet_text", 500)
				.notNullable();
		})

		.createTable("theme", tbl => {
			tbl.increments();
			tbl.string("data", 1000)
				.notNullable();
		})

		.createTable("descriptive_tag", tbl => {
			tbl.increments();
			tbl.string("tag_text", 50)
				.unique()
				.notNullable();
		})

		.createTable("build", tbl => {
			tbl.increments();
			tbl.integer("owner_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("user")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			tbl.integer("theme_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("theme")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			tbl.text("body")
				.notNullable();
			tbl.timestamp('created_at')
				.defaultTo(knex.fn.now())
				.notNullable();
		})

		.createTable('bullet_tag', tbl => {
			tbl.integer('bullet_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('bullet')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

			tbl.integer('tag_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('descriptive_tag')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');


		});
}

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('bullet_tag')
		.dropTableIfExists('build')
		.dropTableIfExists('descriptive_tag')
		.dropTableIfExists('theme')
		.dropTableIfExists('core_info')
		.dropTableIfExists('bullet')
		.dropTableIfExists('section')
		.dropTableIfExists('user')
};