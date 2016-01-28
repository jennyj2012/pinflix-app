# Schema Information

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
url	        | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed
board_id    | integer   | not null, foreign key (references boards), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null, indexed
tag_id      | integer   | not null, foreign key (references tags), indexed
description | text      |
created_at  | datetime  | not null
updated_at  | datetime  | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text    | not null
user_id     | integer   | not null, foreign key (references users), indexed
pin_id      | integer   | not null, foreign key (references pins), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
created_at  | datetime  | not null
updated_at  | datetime  | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------A|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
photo_id        | integer   | default photo created when user signs up


## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
user_id     | integer   | not null, foreign key (references users), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null
