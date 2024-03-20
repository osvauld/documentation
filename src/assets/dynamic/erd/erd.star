users: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  username: varchar
  name: varchar
  encryption_key: text
  device_key: text
  temp_password: varchar
  registration_challenge: varchar
  signed_up: boolean
  type: varchar
  status: varchar
}

folders: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  name: varchar
  description: varchar
  created_by: uuid {constraint: foreign_key}
}

credentials: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  name: varchar
  description: varchar
  credential_type: varchar
  folder_id: uuid {constraint: foreign_key}
  domain: varchar
  created_by: uuid {constraint: foreign_key}
  updated_by: uuid {constraint: foreign_key}
}

fields: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  field_name: varchar
  field_value: text
  field_type: varchar
  credential_id: uuid {constraint: foreign_key}
  user_id: uuid {constraint: foreign_key}
  created_by: uuid {constraint: foreign_key}
  updated_by: uuid {constraint: foreign_key}
}

field_archive: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  field_id: uuid {constraint: foreign_key}
  field_name: varchar
  field_value: text
  field_type: varchar
  created_by: uuid {constraint: foreign_key}
  updated_by: uuid {constraint: foreign_key}
  version: integer
}

groupings: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  name: varchar
  created_by: uuid {constraint: foreign_key}
}

group_list: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  grouping_id: uuid {constraint: foreign_key}
  user_id: uuid {constraint: foreign_key}
  access_type: varchar
}

credential_access: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  credential_id: uuid {constraint: foreign_key}
  user_id: uuid {constraint: foreign_key}
  access_type: varchar
  group_id: uuid {constraint: foreign_key}
  folder_id: uuid {constraint: foreign_key}
}

folder_access: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  folder_id: uuid {constraint: foreign_key}
  user_id: uuid {constraint: foreign_key}
  access_type: varchar
  group_id: uuid {constraint: foreign_key}
}

session_table: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  user_id: uuid {constraint: foreign_key}
  public_key: text
  challenge: varchar
  device_id: varchar
  session_id: varchar
}

users.id -> group_list.user_id
users.id -> credential_access.user_id
users.id -> folder_access.user_id
users.id -> session_table.user_id

folders.id -> credentials.folder_id
folders.id -> credential_access.folder_id
folders.id -> folder_access.folder_id

credentials.id -> fields.credential_id
credentials.id -> credential_access.credential_id

fields.id -> field_archive.field_id

groupings.id -> group_list.grouping_id
groupings.id -> credential_access.group_id
groupings.id -> folder_access.group_id
