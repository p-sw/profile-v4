export interface User {
    id: string;
    username: string;
    global_name: string | null;
    avatar: string | null;
}

export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: string;
    refresh_token: string;
    scope: string;
}