const DB_NAME = "MADGEAR"
const SENDER_NAME = "MadGear Team"
const LOGIN_PAGE = `https://madgear.vercel.app/login`
const REDIRECTIONS = {
    BACKEND_BASE_URL: `https://madgearapi.onrender.com/api/v1`
}
const BREVO_URI = 'https://api.brevo.com/v3/smtp/email'
const permissions = {
    VIEW_ALL_USERS: 'view_all_users',
    CREATE_USER: 'create_user',
    DELETE_USER: 'delete_user',
    CREATE_EVENT: 'create_event',
    ADD_NEW_GAME: 'add_new_game',
    DELETE_GAME: 'delete_game',
    DELETE_EVENT: 'delete_event',
    CHANGE_USER_PERMISSION: 'change_user_permission'
}
const rolePermissions = {
    user: [],
    manager: [permissions.VIEW_ALL_USERS, permissions.CREATE_USER, permissions.ADD_NEW_GAME],
    admin: [
        permissions.VIEW_ALL_USERS, 
        permissions.CREATE_USER, 
        permissions.DELETE_USER, 
        permissions.CREATE_EVENT, 
        permissions.ADD_NEW_GAME,
        permissions.DELETE_GAME,
        permissions.DELETE_EVENT,
        permissions.CHANGE_USER_PERMISSION
    ]
}

export { 
    DB_NAME,
    permissions,
    rolePermissions,
    SENDER_NAME,
    REDIRECTIONS,
    BREVO_URI,
    LOGIN_PAGE
}