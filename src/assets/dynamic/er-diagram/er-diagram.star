users: {
  shape: sql_table
  pk: string {constraint: primary_key}
  username: string
  name: string
}

group: {
  shape: sql_table
  pk: string {constraint: primary_key}
  name: string
}

group_list: {
  shape: sql_table
  pk: string {constraint: primary_key}
  id: string
  group_id: string {constraint: foreign_key}
  user_id: string {constraint: foreign_key}
  access_type: string
}

folder: {
  shape: sql_table
  pk: string {constraint: primary_key}
  id: string
  name: string
  created_by: string {constraint: foreign_key}
  type: string
  version: string
}

folder_access: {
  shape: sql_table
  pk: string {constraint: primary_key}
  id: string
  folder_id: string {constraint: foreign_key}
  user_id: string {constraint: foreign_key}
  access_type: string
  group_id: string {constraint: foreign_key}
}

credentials: {
  shape: sql_table
  pk: string {constraint: primary_key}
  id: string
  name: string
  description: string
  folder_id: {constraint: foreign_key}
}

access_list: {
  shape: sql_table
  pk: string {constraint: primary_key}
  id: string
  credential_id: string {constraint: foreign_key}
  user_id: string {constraint: foreign_key}
}

fields: {
  shape: sql_table
  pk: string {constraint: primary_key}
  id: string
  field_name: string
  credential_id: string {constraint: foreign_key}
  field_value: string
  type: string
  version: string
}

group.pk -> group_list.group_id
folder.pk -> access_list.folder_access

folder.pk -> folder_access.folder_id
folder.pk -> credentials.folder_id
users.pk -> folder_access.user_id
credentials.pk -> access_list.credential_id

fields.credential_id -> credentials.pk

users.pk -> access_list.user_id
users.pk -> group_list.user_id
