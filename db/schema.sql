-- DoMyPooja database schema (Neon / PostgreSQL)
-- Safe to run more than once (all statements are idempotent).

create table if not exists users (
  id                  uuid primary key default gen_random_uuid(),
  full_name           text not null,
  email               text not null,
  phone               text not null,
  password_hash       text not null,
  address_line        text,
  area                text,
  city                text not null default 'Bengaluru',
  pincode             text,
  preferred_language  text not null default 'Kannada',
  gotra               text,
  nakshatra           text,
  free_muhurtam_used  boolean not null default false,
  created_at          timestamptz not null default now(),
  last_login_at       timestamptz
);

create unique index if not exists users_email_key on users (lower(email));
create index if not exists users_phone_idx on users (phone);

create table if not exists cart_items (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references users(id) on delete cascade,
  service_id    text not null,
  service_name  text not null,
  package_name  text,
  price_range   text,
  created_at    timestamptz not null default now(),
  unique (user_id, service_id)
);

create sequence if not exists order_no_seq start 1001;

create table if not exists orders (
  id                       uuid primary key default gen_random_uuid(),
  order_no                 text not null unique,
  user_id                  uuid not null references users(id) on delete cascade,
  status                   text not null default 'requested'
                           check (status in ('requested','confirmed','completed','cancelled')),
  ceremony_date            date,
  ceremony_time            text,
  venue_address            text not null,
  area                     text,
  city                     text not null default 'Bengaluru',
  pincode                  text,
  language                 text not null,
  saamagri_opted           boolean not null default false,
  alankara_opted           boolean not null default false,
  free_muhurtam_requested  boolean not null default false,
  notes                    text,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now()
);

create index if not exists orders_user_idx on orders (user_id, ceremony_date desc);

create table if not exists order_items (
  id            uuid primary key default gen_random_uuid(),
  order_id      uuid not null references orders(id) on delete cascade,
  service_id    text not null,
  service_name  text not null,
  package_name  text,
  price_range   text
);

create index if not exists order_items_order_idx on order_items (order_id);
