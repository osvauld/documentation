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
  created_by: uuid {constraint: foreign_key}
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



field_data: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  field_type: varchar
  field_name: varchar
  credential_id: uuid {constraint: foreign_key}
  created_by: uuid {constraint: foreign_key}
  updated_by: uuid {constraint: foreign_key}
}

field_values: {
  shape: sql_table
  field_id: uuid {constraint: foreign_key}
  field_value: varchar
  user_id: uuid {constraint: foreign_key}
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

environments: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  cli_user: uuid {constraint: foreign_key}
  name: varchar
}

environment_fields: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  field_name: varchar
  field_value: varchar
  parent_field_value_id: uuid {constraint: foreign_key}
  env_id: uuid {constraint: foreign_key}
  credential_id: uuid {constraint: foreign_key}
}

environments.id -> environment_fields.env_id
environment_fields.credential_id -> credentials.id
environment_fields.parent_field_value_id -> field_values.id

users.id -> group_list.user_id
users.id -> credential_access.user_id
users.id -> folder_access.user_id
users.id -> session_table.user_id

folders.id -> credentials.folder_id
folders.id -> credential_access.folder_id
folders.id -> folder_access.folder_id

credentials.id -> field_data.credential_id
credentials.id -> credential_access.credential_id

field_data.id -> field_values.field_id


groupings.id -> group_list.grouping_id
groupings.id -> credential_access.group_id
groupings.id -> folder_access.group_id
