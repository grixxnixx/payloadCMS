import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_nav_items_for_cta_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_sections_section_type" AS ENUM('hero', 'aboutCoaching', 'services', 'ourPotential', 'ourExpertise', 'introVideo', 'howWeWork', 'companyGrowth', 'ourFaq', 'ourTestimonials', 'ourBlogs');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"is_external" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items_for_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"variant" "enum_header_nav_items_for_cta_variant" DEFAULT 'primary' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"logo_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_address" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"city" varchar NOT NULL,
  	"state" varchar NOT NULL,
  	"postal_code" varchar NOT NULL,
  	"country" varchar NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_footer_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"footer_title" varchar NOT NULL,
  	"copyright" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_about_coaching_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_about_coaching_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_services_service" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar,
  	"short_description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_our_potential_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"percentage" numeric,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_our_potential_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_video_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_process_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections_statistics_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_type" "enum_pages_sections_section_type" NOT NULL,
  	"hero_label" varchar,
  	"hero_subheading" varchar,
  	"hero_background_image_id" integer,
  	"hero_cta_label" varchar,
  	"hero_cta_link" varchar,
  	"about_coaching_label" varchar DEFAULT 'ABOUT US',
  	"about_coaching_heading" varchar,
  	"about_coaching_highlighted_text" varchar,
  	"about_coaching_description" varchar,
  	"about_coaching_main_image_id" integer,
  	"about_coaching_secondary_image_id" integer,
  	"about_coaching_experience_years" numeric,
  	"about_coaching_client_count" numeric,
  	"about_coaching_award_title" varchar,
  	"about_coaching_award_subtitle" varchar,
  	"about_coaching_cta_text" varchar,
  	"about_coaching_cta_link" varchar,
  	"services_label" varchar DEFAULT 'SERVICES',
  	"services_heading" varchar,
  	"services_highlighted_text" varchar,
  	"services_description" varchar,
  	"our_potential_label" varchar,
  	"our_potential_heading" varchar,
  	"our_potential_highlighted_text" varchar,
  	"our_potential_description" varchar,
  	"our_potential_image_id" integer,
  	"video_section_background_image_id" integer,
  	"video_section_heading" varchar,
  	"video_section_highlighted_text" varchar,
  	"video_section_video_url" varchar,
  	"process_steps_label" varchar,
  	"process_steps_heading" varchar,
  	"process_steps_highlighted_text" varchar,
  	"statistics_label" varchar,
  	"statistics_heading" varchar,
  	"statistics_highlighted_text" varchar,
  	"statistics_description" varchar,
  	"statistics_image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"header_id" integer,
  	"footer_id" integer,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_for_cta" ADD CONSTRAINT "header_nav_items_for_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_social_links" ADD CONSTRAINT "footer_social_links_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_social_links" ADD CONSTRAINT "footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_address" ADD CONSTRAINT "footer_address_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_contact" ADD CONSTRAINT "footer_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_navigation" ADD CONSTRAINT "footer_footer_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_about_coaching_features" ADD CONSTRAINT "pages_sections_about_coaching_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_about_coaching_team_members" ADD CONSTRAINT "pages_sections_about_coaching_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_about_coaching_team_members" ADD CONSTRAINT "pages_sections_about_coaching_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_services_service" ADD CONSTRAINT "pages_sections_services_service_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_services_service" ADD CONSTRAINT "pages_sections_services_service_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_our_potential_metrics" ADD CONSTRAINT "pages_sections_our_potential_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_our_potential_features" ADD CONSTRAINT "pages_sections_our_potential_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_video_section_features" ADD CONSTRAINT "pages_sections_video_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_process_steps_steps" ADD CONSTRAINT "pages_sections_process_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections_statistics_stats" ADD CONSTRAINT "pages_sections_statistics_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_hero_background_image_id_media_id_fk" FOREIGN KEY ("hero_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_about_coaching_main_image_id_media_id_fk" FOREIGN KEY ("about_coaching_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_about_coaching_secondary_image_id_media_id_fk" FOREIGN KEY ("about_coaching_secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_our_potential_image_id_media_id_fk" FOREIGN KEY ("our_potential_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_video_section_background_image_id_media_id_fk" FOREIGN KEY ("video_section_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_statistics_image_id_media_id_fk" FOREIGN KEY ("statistics_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_header_fk" FOREIGN KEY ("header_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_footer_fk" FOREIGN KEY ("footer_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_tablet_sizes_tablet_filename_idx" ON "media" USING btree ("sizes_tablet_filename");
  CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_for_cta_order_idx" ON "header_nav_items_for_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_for_cta_parent_id_idx" ON "header_nav_items_for_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "header_updated_at_idx" ON "header" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "header_created_at_idx" ON "header" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "footer_social_links_order_idx" ON "footer_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_social_links_parent_id_idx" ON "footer_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_social_links_logo_idx" ON "footer_social_links" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "footer_address_order_idx" ON "footer_address" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_address_parent_id_idx" ON "footer_address" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_contact_order_idx" ON "footer_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_contact_parent_id_idx" ON "footer_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_navigation_order_idx" ON "footer_footer_navigation" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_footer_navigation_parent_id_idx" ON "footer_footer_navigation" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_updated_at_idx" ON "footer" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "footer_created_at_idx" ON "footer" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_features_order_idx" ON "pages_sections_about_coaching_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_features_parent_id_idx" ON "pages_sections_about_coaching_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_team_members_order_idx" ON "pages_sections_about_coaching_team_members" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_team_members_parent_id_idx" ON "pages_sections_about_coaching_team_members" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_team_members_image_idx" ON "pages_sections_about_coaching_team_members" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_services_service_order_idx" ON "pages_sections_services_service" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_services_service_parent_id_idx" ON "pages_sections_services_service" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_services_service_icon_idx" ON "pages_sections_services_service" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_our_potential_metrics_order_idx" ON "pages_sections_our_potential_metrics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_our_potential_metrics_parent_id_idx" ON "pages_sections_our_potential_metrics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_our_potential_features_order_idx" ON "pages_sections_our_potential_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_our_potential_features_parent_id_idx" ON "pages_sections_our_potential_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_video_section_features_order_idx" ON "pages_sections_video_section_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_video_section_features_parent_id_idx" ON "pages_sections_video_section_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_process_steps_steps_order_idx" ON "pages_sections_process_steps_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_process_steps_steps_parent_id_idx" ON "pages_sections_process_steps_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_statistics_stats_order_idx" ON "pages_sections_statistics_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_statistics_stats_parent_id_idx" ON "pages_sections_statistics_stats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_order_idx" ON "pages_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_sections_parent_id_idx" ON "pages_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_hero_hero_background_image_idx" ON "pages_sections" USING btree ("hero_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_about_coaching_main_image_idx" ON "pages_sections" USING btree ("about_coaching_main_image_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_about_coaching_about_coaching_secondary_image_idx" ON "pages_sections" USING btree ("about_coaching_secondary_image_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_our_potential_our_potential_image_idx" ON "pages_sections" USING btree ("our_potential_image_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_video_section_video_section_background_image_idx" ON "pages_sections" USING btree ("video_section_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_sections_statistics_statistics_image_idx" ON "pages_sections" USING btree ("statistics_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_seo_seo_image_idx" ON "pages" USING btree ("seo_image_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_header_id_idx" ON "payload_locked_documents_rels" USING btree ("header_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_footer_id_idx" ON "payload_locked_documents_rels" USING btree ("footer_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_nav_items_for_cta" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "footer_social_links" CASCADE;
  DROP TABLE "footer_address" CASCADE;
  DROP TABLE "footer_contact" CASCADE;
  DROP TABLE "footer_footer_navigation" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "pages_sections_about_coaching_features" CASCADE;
  DROP TABLE "pages_sections_about_coaching_team_members" CASCADE;
  DROP TABLE "pages_sections_services_service" CASCADE;
  DROP TABLE "pages_sections_our_potential_metrics" CASCADE;
  DROP TABLE "pages_sections_our_potential_features" CASCADE;
  DROP TABLE "pages_sections_video_section_features" CASCADE;
  DROP TABLE "pages_sections_process_steps_steps" CASCADE;
  DROP TABLE "pages_sections_statistics_stats" CASCADE;
  DROP TABLE "pages_sections" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_header_nav_items_for_cta_variant";
  DROP TYPE "public"."enum_pages_sections_section_type";`)
}
