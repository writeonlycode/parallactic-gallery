insert into
  storage.buckets (id, name, public, allowed_mime_types)
values
  ('images', 'images', true, '{image/*}');

create policy "Enable select on images for everyone" on storage.objects for select
using ((bucket_id = 'images'::text));

create policy "Enable insert on images for everyone" on storage.objects for insert
with
  check ((bucket_id = 'images'::text));
