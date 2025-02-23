PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_account` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`sso_id` text NOT NULL,
	`created_time` integer NOT NULL,
	`deleted_at` integer,
	`linked_providers` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_account`("id", "email", "name", "sso_id", "created_time", "deleted_at", "linked_providers") SELECT "id", "email", "name", "sso_id", "created_time", "deleted_at", "linked_providers" FROM `account`;--> statement-breakpoint
DROP TABLE `account`;--> statement-breakpoint
ALTER TABLE `__new_account` RENAME TO `account`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `account_email_unique` ON `account` (`email`);