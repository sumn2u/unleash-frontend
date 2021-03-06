export const ADMIN = 'ADMIN';
export const CREATE_FEATURE = 'CREATE_FEATURE';
export const UPDATE_FEATURE = 'UPDATE_FEATURE';
export const DELETE_FEATURE = 'DELETE_FEATURE';
export const CREATE_STRATEGY = 'CREATE_STRATEGY';
export const UPDATE_STRATEGY = 'UPDATE_STRATEGY';
export const DELETE_STRATEGY = 'DELETE_STRATEGY';
export const UPDATE_APPLICATION = 'UPDATE_APPLICATION';

export function hasPermission(user, permission) {
    return (
        user &&
        (!user.permissions || user.permissions.indexOf(ADMIN) !== -1 || user.permissions.indexOf(permission) !== -1)
    );
}
