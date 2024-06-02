export default class Constants {
  public static API_PROPERTY_SIGN_IN_USERNAME_EXAMPLE = 'john';
  public static API_PROPERTY_SIGN_IN_USERNAME_DESCRIPTION =
    'The username of the user.';
  public static API_PROPERTY_SIGN_IN_PASSWORD_EXAMPLE = 'password123';
  public static API_PROPERTY_SIGN_IN_PASSWORD_DESCRIPTION =
    'The password of the user.';
  public static API_OPERATION_SIGN_IN_INFO = 'User login.';
  public static API_RESPONSE_OK_SIGN_IN_DESCRIPTION = 'Successfully logged in.';
  public static API_RESPONSE_OK_SIGN_IN_TOKEN_EXAMPLE =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYjJjMDUwLTdkZmYtNGRjNS04NzAxLWJhYzlkYmI0ZWYyNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3MTM1NzExLCJleHAiOjE3MTcxMzkzMTF9.xRnSroZiUPcmWevQk0PF-xAaillCI3_oMkR3L6OiF7Y';
  public static API_RESPONSE_INVALID_SIGN_IN_DESCRIPTION =
    'Invalid credentials';
  public static API_PROPERTY_CREATE_TASK_TITLE_EXAMPLE = 'Task Title.';
  public static API_PROPERTY_CREATE_TASK_TITLE_DESCRIPTION =
    'The title of the task.';
  public static API_PROPERTY_CREATE_TASK_DESCRIPTION_EXAMPLE =
    'Task Description.';
  public static API_PROPERTY_CREATE_TASK_DESCRIPTION_DESCRIPTION =
    'The description of the task.';
  public static API_PROPERTY_UPDATE_TASK_TITLE_EXAMPLE = 'Updated Task Title.';
  public static API_PROPERTY_UPDATE_TASK_TITLE_DESCRIPTION =
    'The updated title of the task.';
  public static API_PROPERTY_UPDATE_TASK_DESCRIPTION_EXAMPLE =
    'Updated Task Description.';
  public static API_PROPERTY_UPDATE_TASK_DESCRIPTION_DESCRIPTION =
    'The updated description of the task.';
  public static API_OPERATION_CREATE_TASK_INFO = 'Create a new task.';
  public static API_RESPONSE_OK_CREATE_TASK_DESCRIPTION =
    'The task has been successfully created.';
  public static API_OPERATION_GET_ALL_TASKS_INFO = 'Get all tasks by user.';
  public static API_RESPONSE_OK_GET_ALL_TASKS_DESCRIPTION =
    'Return all tasks for the user.';
  public static API_OPERATION_GET_ONE_TASK_INFO = 'Get task by ID.';
  public static API_RESPONSE_OK_GET_ONE_TASK_DESCRIPTION = 'Return the task.';
  public static API_RESPONSE_NOT_FOUND_GET_ONE_TASK_DESCRIPTION =
    'Task not found.';
  public static API_OPERATION_UPDATED_TASK_INFO = 'Update a task.';
  public static API_RESPONSE_OK_UPDATE_TASK_DESCRIPTION =
    'The task has been successfully updated.';
  public static API_RESPONSE_NOT_FOUND_UPDATE_TASK_DESCRIPTION =
    'Task not found.';
  public static API_OPERATION_DELETE_TASK_INFO = 'Delete a task.';
  public static API_RESPONSE_OK_DELETE_TASK_DESCRIPTION =
    'The task has been successfully deleted.';
  public static API_RESPONSE_NOT_FOUND_DELETE_TASK_DESCRIPTION =
    'Task not found.';
  public static API_PROPERTY_TASK_ENTITY_ID_DESCRIPTION =
    'The unique identifier of the task.';
  public static API_PROPERTY_TASK_ENTITY_TITLE_EXAMPLE = 'Task Title.';
  public static API_PROPERTY_TASK_ENTITY_TITLE_DESCRIPTION =
    'The title of the task.';
  public static API_PROPERTY_TASK_ENTITY_DESCRIPTION_EXAMPLE =
    'Task Description.';
  public static API_PROPERTY_TASK_ENTITY_DESCRIPTION_DESCRIPTION =
    'The description of the task.';
  public static API_PROPERTY_TASK_ENTITY_STATUS_EXAMPLE = 'pending';
  public static API_PROPERTY_TASK_ENTITY_STATUS_DESCRIPTION =
    'The status of the task.';
  public static API_PROPERTY_TASK_ENTITY_CREATED_AT_EXAMPLE =
    '2024-05-30T15:21:09.968Z';
  public static API_PROPERTY_TASK_ENTITY_CREATED_AT_DESCRIPTION =
    'The creation date of the task.';
  public static API_PROPERTY_TASK_ENTITY_UPDATED_AT_EXAMPLE =
    '2024-05-30T15:21:09.968Z';
  public static API_PROPERTY_TASK_ENTITY_UPDATED_AT_DESCRIPTION =
    'The last update date of the task.';
  public static API_PROPERTY_TASK_ENTITY_USER_ID_AT_DESCRIPTION =
    'The ID of the user who owns the task.';
  public static API_PROPERTY_CREATE_USER_USERNAME_EXAMPLE = 'john';
  public static API_PROPERTY_CREATE_USER_USERNAME_DESCRIPTION =
    'The username of the user.';
  public static API_PROPERTY_CREATE_USER_PASSWORD_EXAMPLE = 'password123';
  public static API_PROPERTY_CREATE_USER_PASSWORD_DESCRIPTION =
    'The password of the user.';
  public static API_PROPERTY_CREATE_USER_ROLE_EXAMPLE =
    'Role must be user or admin.';
  public static API_PROPERTY_CREATE_USER_ROLE_DESCRIPTION =
    'The role of the user.';
  public static API_OPERATION_CREATE_USER_INFO = 'Create a new user.';
  public static API_RESPONSE_OK_CREATE_USER_DESCRIPTION =
    'The user has been successfully created.';
  public static API_RESPONSE_BAD_REQUEST = 'Bad Request.';
  public static API_PROPERTY_USER_UUID_EXAMPLE =
    '3ab2c050-7dff-4dc5-8701-bac9dbb4ef25';
  public static API_PROPERTY_TASK_UUID_EXAMPLE =
    'ee2328c5-f6c3-4ef2-9075-8a777e33fa61';
  public static API_PROPERTY_USER_ENTITY_ID_DESCRIPTION =
    'The unique identifier of the user.';
  public static API_PROPERTY_USER_ENTITY_USERNAME_EXAMPLE = 'john';
  public static API_PROPERTY_USER_ENTITY_USERNAME_DESCRIPTION =
    'The username of the user.';
  public static API_PROPERTY_USER_ENTITY_PASSWORD_EXAMPLE = 'password123';
  public static API_PROPERTY_USER_ENTITY_PASSWORD_DESCRIPTION =
    'The password of the user';
  public static API_PROPERTY_USER_ENTITY_ROLE_EXAMPLE = 'admin';
  public static API_PROPERTY_USER_ENTITY_ROLE_DESCRIPTION =
    'Role must be "user" or "admin".';
  public static API_PROPERTY_USER_ENTITY_CREATED_AT_EXAMPLE =
    '2024-05-30T15:21:09.968Z';
  public static API_PROPERTY_USER_ENTITY_CREATED_AT_DESCRIPTION =
    'The creation date of the user.';
  public static API_PROPERTY_USER_ENTITY_UPDATED_AT_EXAMPLE =
    '2024-05-30T15:21:09.968Z';
  public static API_PROPERTY_USER_ENTITY_UPDATED_AT_DESCRIPTION =
    'The last update date of the user.';
  public static JWT_TOKEN_EXPIRES_TIME = '1h';
  public static PROJECT_NAME = 'Todo List API';
  public static PROJECT_DESCRIPTION =
    'This API allows users to manage their tasks. It supports user authentication and authorization with two roles: Admin and User.';
  public static API_VERSION = '1.0';
}
