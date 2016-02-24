# Schema Information

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description | text      |
board_id    | integer   | not null, foreign key (references boards), indexed
photo_id    | integer   | foreign key (references photos), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null

## photos
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
image_file_name    | string    | 
image_content_type | string    | 
image_file_size    | integer   |
image_updated_at   | datetime  | 
created_at         | datetime  | not null
updated_at         | datetime  | not null

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null, indexed
description | text      |
created_at  | datetime  | not null
updated_at  | datetime  | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
pin_id      | integer   | not null, foreign key (references pins), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null

## pg_search_documents
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | text      | 
searchable_id   | integer   | indexed
searchable_type | string    | indexed
created_at      | datetime  | not null
updated_at      | datetime  | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
created_at      | datetime  | not null
updated_at      | datetime  | not null

